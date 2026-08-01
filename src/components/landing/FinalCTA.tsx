import { useInstallModal } from "@/components/InstallModal";
import { BrandLogo } from "@/components/BrandLogo";
import { GooglePlayBadge } from "@/components/GooglePlayBadge";

export function FinalCTA() {
  const { open } = useInstallModal();
  return (
    <section className="px-5 py-10">
      <div
        className="relative overflow-hidden rounded-[28px] border border-border px-6 py-8 text-center"
        style={{
          background:
            "radial-gradient(130% 90% at 50% 0%, oklch(0.22 0.02 70 / 0.7), var(--color-card) 65%)",
          boxShadow: "var(--shadow-premium)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 50% -10%, oklch(0.92 0.006 270 / 0.25), transparent 55%)",
          }}
        />
        <div aria-hidden className="grain-overlay" />
        <div className="relative flex flex-col items-center">
          <BrandLogo size={52} className="float" />
          <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            O leilão na sua mão
          </p>
          <h2 className="section-title mt-2 text-[1.5rem]">
            Baixe o <span className="text-platinum italic">Giraboi Leilões</span>
          </h2>
          <p className="mx-auto mt-2 max-w-[280px] text-[12px] leading-relaxed text-muted-foreground">
            Aplicativo oficial · grátis na Google Play · instala em menos de 1 minuto.
          </p>
          <div className="mt-5">
            <GooglePlayBadge onClick={open} size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
