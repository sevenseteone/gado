import { Bell, BookOpen, Gavel, HelpCircle, Layers, LayoutDashboard } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const features = [
  { icon: Gavel, title: "Leilões ao vivo", d: "Pregão em tempo real." },
  { icon: Bell, title: "Notificações", d: "Nunca perca um lote." },
  { icon: Layers, title: "Catálogo de lotes", d: "Fotos, raça, peso." },
  { icon: LayoutDashboard, title: "Painel do produtor", d: "Gerencie sua conta." },
  { icon: BookOpen, title: "Trazer lote", d: "Cadastre o seu." },
  { icon: HelpCircle, title: "FAQ integrado", d: "Suporte no app." },
];

export function AppFeatures() {
  return (
    <section className="px-5 py-12">
      <SectionHeader index="03" eyebrow="Recursos">
        Tudo o que você precisa,
        <br />
        <span className="text-platinum italic">num app só.</span>
      </SectionHeader>

      <div className="mt-7 grid grid-cols-2 gap-2.5">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-3.5 transition-all hover:border-platinum-dark/40"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-7 w-7 place-items-center rounded-lg border border-border bg-surface-elevated">
                <f.icon className="text-platinum-dark h-3.5 w-3.5 transition-colors group-hover:text-amber" />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-3 text-[13px] font-semibold leading-tight">{f.title}</p>
            <p className="mt-1 text-[10.5px] text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
