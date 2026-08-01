import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

export const Route = createFileRoute("/entrar")({
  component: EntrarPage,
});

function EntrarPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("Entrando…");
    navigate({ to: "/quatrofolha7" });
  }

  async function onGoogle() {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) toast.error(result.error.message);
  }

  return (
    <main className="min-h-screen px-5 pt-16">
      <h1 className="font-display text-3xl font-bold">
        <span className="text-platinum">Entrar</span>
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Acesse o painel administrativo.</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-ring"
        />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-ring"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full py-3 text-sm disabled:opacity-60"
        >
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="divider-hair flex-1" />
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">ou</span>
        <div className="divider-hair flex-1" />
      </div>

      <button
        type="button"
        onClick={onGoogle}
        className="w-full rounded-xl border border-border bg-card py-3 text-sm text-foreground transition-colors hover:bg-secondary"
      >
        Continuar com Google
      </button>
    </main>
  );
}
