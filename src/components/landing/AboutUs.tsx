import { MapPin, Phone } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function AboutUs() {
  return (
    <section id="quem-somos" className="px-5 py-12">
      <SectionHeader index="04" eyebrow="Quem somos">
        Feito por quem
        <br />
        <span className="text-platinum italic">entende</span> de gado.
      </SectionHeader>

      <div className="mt-5 space-y-3 text-[13px] leading-relaxed text-muted-foreground">
        <p>
          A <span className="text-foreground">Agropecuária Giraboi</span> é uma
          empresa especializada na realização de leilões agropecuários,
          conectando vendedores e compradores com transparência, credibilidade
          e segurança em cada negociação.
        </p>
        <p>
          Desde <span className="text-foreground">2011</span>, oferecemos uma
          estrutura organizada para a comercialização de bovinos, com processos
          claros e atendimento próximo. Nosso compromisso é valorizar o
          produtor rural, facilitando negociações que geram oportunidades para
          todo o setor.
        </p>
        <p>
          Buscamos constantemente aprimorar nossos serviços, usando tecnologia
          para tornar a experiência de participação em leilões mais prática,
          acessível e eficiente — sem abrir mão da seriedade que sempre marcou
          nossa atuação.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex items-start gap-3 rounded-2xl border border-border bg-card px-4 py-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-surface-elevated">
            <MapPin className="text-platinum-dark h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Endereço
            </p>
            <p className="text-[13px] font-medium leading-snug">
              Rodovia GO-020, Km 42 — Zona Rural
              <br />
              Bela Vista de Goiás — GO
            </p>
          </div>
        </div>
        <a
          id="contato"
          href="https://wa.me/5562998481808"
          className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 transition-colors hover:border-amber/40"
        >
          <div
            className="grid h-9 w-9 place-items-center rounded-xl"
            style={{ background: "oklch(0.92 0.006 270 / 0.12)" }}
          >
            <Phone className="h-4 w-4 text-amber" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Fale com a Giraboi
            </p>
            <p className="text-[13px] font-medium">(62) 99848-1808</p>
          </div>
        </a>
      </div>
    </section>
  );
}
