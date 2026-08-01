import { Radio, Youtube, MessageCircle, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: Radio, title: "Leilões em tempo real", text: "Cada lance, cada lote — sem atraso." },
  { icon: Youtube, title: "Transmissão ao vivo", text: "Assista pelo YouTube, dentro do app." },
  { icon: MessageCircle, title: "Direto no WhatsApp", text: "Negocie com o leiloeiro na hora." },
  { icon: Users, title: "Múltiplos usuários", text: "Equipe inteira no mesmo pregão." },
];

export function WhyChoose() {
  return (
    <section id="recursos" className="px-5 py-12">
      <SectionHeader index="01" eyebrow="Por que Giraboi">
        O jeito <span className="text-platinum italic">certo</span>
        <br />
        de leiloar gado.
      </SectionHeader>

      <div className="mt-7 grid grid-cols-2 gap-3">
        {items.map((it) => (
          <div key={it.title} className="card-premium relative overflow-hidden p-4">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full blur-2xl"
              style={{ background: "oklch(0.96 0.003 270 / 0.06)" }}
            />
            <div
              className="grid h-9 w-9 place-items-center rounded-xl border border-border"
              style={{ background: "var(--color-surface-elevated)" }}
            >
              <it.icon className="text-platinum-dark h-4 w-4" />
            </div>
            <p className="mt-3 text-[13px] font-semibold leading-tight">{it.title}</p>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
              {it.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
