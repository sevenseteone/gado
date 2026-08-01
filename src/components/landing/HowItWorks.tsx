import { useInstallModal } from "@/components/InstallModal";
import { GooglePlayBadge } from "@/components/GooglePlayBadge";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { n: "01", t: "Abra a Google Play", d: "Toque no selo e vá até a loja oficial." },
  { n: "02", t: "Instale o app", d: "Download seguro e verificado pela Play Store." },
  { n: "03", t: "Entre no pregão", d: "Acompanhe os leilões ao vivo em tempo real." },
  { n: "04", t: "Dê seu lance", d: "Fale direto no WhatsApp: (62) 99848-1808." },
];

export function HowItWorks() {
  const { open } = useInstallModal();
  return (
    <section id="como-funciona" className="px-5 py-12">
      <SectionHeader index="02" eyebrow="Como funciona">
        Do <span className="text-platinum italic">download</span>
        <br />
        ao lance em 4 passos.
      </SectionHeader>

      <ol className="relative mt-7 space-y-2">
        <div
          aria-hidden
          className="absolute bottom-4 left-[27px] top-4 w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent)",
          }}
        />
        {steps.map((s) => (
          <li
            key={s.n}
            className="relative flex items-start gap-4 rounded-2xl border border-transparent p-2 transition-colors hover:border-border hover:bg-card/40"
          >
            <div
              className="text-platinum relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-surface-elevated font-display text-[11px] font-bold"
            >
              {s.n}
            </div>
            <div className="pt-1">
              <p className="text-[14px] font-semibold leading-tight">{s.t}</p>
              <p className="mt-1 text-[11.5px] leading-relaxed text-muted-foreground">
                {s.d}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-col items-center gap-2">
        <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Comece agora · é grátis
        </p>
        <GooglePlayBadge onClick={open} size="lg" />
      </div>

    </section>
  );
}
