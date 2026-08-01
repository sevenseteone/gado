import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { LogOut, Save } from "lucide-react";
import { checkIsAdmin, getInstallUrl, updateInstallUrl } from "@/lib/config.functions";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/quatrofolha7")({
  component: AdminPanel,
});

function AdminPanel() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const getUrl = useServerFn(getInstallUrl);
  const updateUrl = useServerFn(updateInstallUrl);
  const checkAdmin = useServerFn(checkIsAdmin);

  const admin = useQuery({ queryKey: ["is-admin"], queryFn: () => checkAdmin() });
  const cfg = useQuery({ queryKey: ["install-url"], queryFn: () => getUrl() });
  const [value, setValue] = useState("");

  useEffect(() => {
    if (cfg.data?.installUrl) setValue(cfg.data.installUrl);
  }, [cfg.data]);

  const save = useMutation({
    mutationFn: (url: string) => updateUrl({ data: { url } }),
    onSuccess: () => {
      toast.success("URL do APK atualizada.");
      qc.invalidateQueries({ queryKey: ["install-url"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/entrar", replace: true });
  }

  if (admin.isLoading) {
    return <main className="p-6 text-sm text-muted-foreground">Carregando…</main>;
  }

  if (!admin.data?.isAdmin) {
    return (
      <main className="p-6">
        <h1 className="font-display text-2xl font-bold text-platinum">Sem acesso</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Sua conta não tem permissão de administrador.
        </p>
        <button
          type="button"
          onClick={signOut}
          className="btn-primary mt-6 px-4 py-2 text-sm"
        >
          Sair
        </button>
      </main>
    );
  }

  return (
    <main className="p-5 pt-10">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold">
          Painel <span className="text-platinum">admin</span>
        </h1>
        <button
          type="button"
          onClick={signOut}
          className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground"
          aria-label="Sair"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>

      <div className="card-premium mt-8 p-5">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
          URL do app na Google Play
        </p>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="https://…"
          className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ring"
        />
        <button
          type="button"
          disabled={save.isPending || !value}
          onClick={() => save.mutate(value)}
          className="btn-primary mt-4 flex w-full items-center justify-center gap-2 py-3 text-sm disabled:opacity-60"
        >
          <Save className="h-4 w-4" />
          {save.isPending ? "Salvando…" : "Salvar"}
        </button>
      </div>
    </main>
  );
}
