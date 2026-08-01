import { ShieldCheck, Star } from "lucide-react";
import { useInstallModal } from "@/components/InstallModal";
import { BrandLogo } from "@/components/BrandLogo";
import { GooglePlayBadge } from "@/components/GooglePlayBadge";

export function Hero() {
  const { open } = useInstallModal();
  return (
    <section id="apresentacao" className="relative overflow-hidden px-5 pt-8 pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-20 h-[540px]"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 25%, oklch(0.92 0.006 270 / 0.10), transparent 70%), radial-gradient(50% 40% at 80% 10%, oklch(0.96 0.003 270 / 0.08), transparent 70%)",
        }}
      />
      <div aria-hidden className="grain-overlay" />

      <div className="relative flex flex-col items-center text-center">
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full blur-2xl"
            style={{ background: "oklch(0.96 0.003 270 / 0.18)" }}
          />
          <BrandLogo size={96} className="float" />
        </div>

        <div className="mt-5 flex items-center gap-1.5 text-muted-foreground">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-amber text-amber" />
          ))}
          <span className="ml-1 text-[11px]">
            4.9 · <span className="text-foreground">2.1k</span> pecuaristas
          </span>
        </div>

        <h1 className="mt-5 font-display text-[2.35rem] font-bold leading-[1.02] tracking-[-0.035em]">
          Leilões de gado
          <br />
          <span className="text-platinum italic">ao vivo</span>, na palma
          <br />
          da sua mão.
        </h1>

        <p className="mt-4 max-w-[320px] text-[13px] leading-relaxed text-muted-foreground">
          Transmissão em tempo real, catálogo de lotes e lances direto pelo
          WhatsApp — tudo no app oficial do Giraboi.
        </p>

        <div className="mt-6 flex w-full max-w-[320px] flex-col items-center gap-2.5">
          <GooglePlayBadge onClick={open} size="lg" />
          <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-muted-foreground">
            <ShieldCheck className="h-3 w-3" />
            Aplicativo oficial · Google Play · Android
          </div>
        </div>
      </div>
    </section>
  );
}
