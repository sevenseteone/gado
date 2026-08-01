import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Database } from "@/integrations/supabase/types";

const FALLBACK_INSTALL_URL = "https://example.com/giraboi-leiloes.apk";

export const getInstallUrl = createServerFn({ method: "GET" }).handler(async () => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return { installUrl: FALLBACK_INSTALL_URL };

  const supabase = createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });

  const { data } = await supabase
    .from("app_config")
    .select("value")
    .eq("key", "install_url")
    .maybeSingle();

  return { installUrl: data?.value ?? FALLBACK_INSTALL_URL };
});

const updateSchema = z.object({ url: z.string().url().max(2048) });

export const updateInstallUrl = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => updateSchema.parse(data))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { data: isAdmin, error: roleErr } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    if (roleErr) throw new Error("Falha ao verificar permissão.");
    if (!isAdmin) throw new Error("Sem permissão.");

    const { error } = await supabase
      .from("app_config")
      .upsert(
        { key: "install_url", value: data.url, updated_by: userId },
        { onConflict: "key" },
      );
    if (error) throw new Error(error.message);
    return { ok: true, installUrl: data.url };
  });

export const checkIsAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    return { isAdmin: Boolean(data) };
  });
