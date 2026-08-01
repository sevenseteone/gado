import { useEffect, useRef, useState } from "react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { MockScreen } from "./MockScreen";
import { SectionHeader } from "./SectionHeader";
import splash1 from "@/assets/splash-1.jpeg.asset.json";
import cadastro2 from "@/assets/cadastro-2.jpeg.asset.json";
import inicio3 from "@/assets/inicio-3.jpeg.asset.json";
import leilao4 from "@/assets/leilao-4.jpeg.asset.json";
import lotes5 from "@/assets/lotes-5.jpeg.asset.json";
import notificacoes6 from "@/assets/notificacoes-6.jpeg.asset.json";
import perfil7 from "@/assets/perfil-7.jpeg.asset.json";

type Screen =
  | { kind: "image"; src: string; label: string; desc: string }
  | { kind: "mock"; v: Parameters<typeof MockScreen>[0]["variant"]; label: string; desc: string };

const screens: Screen[] = [
  {
    kind: "image",
    src: splash1.url,
    label: "Iniciando o app",
    desc: "Tela de abertura com a identidade da Giraboi — carregamento rápido e visual limpo antes de entrar no pregão.",
  },
  {
    kind: "image",
    src: cadastro2.url,
    label: "Cadastro",
    desc: "Fluxo em 3 etapas com dados pessoais (nome, RG, CPF, nascimento, telefone e e-mail) — rápido e direto.",
  },
  {
    kind: "image",
    src: inicio3.url,
    label: "Início",
    desc: "Carteirinha digital do membro com QR code, atalho para leilões ao vivo e acesso rápido a lotes, notícias e FAQ.",
  },
  {
    kind: "image",
    src: leilao4.url,
    label: "Leilão ao vivo e lances",
    desc: "Página do leilão com banner do evento, status (Aberto), data e hora, botões para dar lance e assistir no YouTube, além da descrição completa.",
  },
  {
    kind: "image",
    src: lotes5.url,
    label: "Lotes",
    desc: "Lista de lotes do pregão — quando não há leilão ativo, um estado vazio convida o usuário a voltar para a aba de Leilões.",
  },
  {
    kind: "image",
    src: notificacoes6.url,
    label: "Notificações",
    desc: "Central de avisos do app — alertas de leilões abrindo, cobertura em lotes favoritos e mensagens do leiloeiro em um só lugar.",
  },
  {
    kind: "image",
    src: perfil7.url,
    label: "Perfil",
    desc: "Sua conta com selo de verificação, inscrição, validade e status, além de dados pessoais e endereço completos — tudo pronto para participar dos leilões.",
  },
];

export function ScreenTour() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % screens.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement | undefined;
    if (!child) return;
    // First item stays flush left; subsequent items scroll to the right in order.
    const offset = index === 0 ? 0 : child.offsetLeft - 20;
    el.scrollTo({ left: offset, behavior: "smooth" });
  }, [index]);

  const active = screens[index];

  return (
    <section className="relative py-12">
      <div className="px-5">
        <SectionHeader index="03" eyebrow="Tour pelas telas">
          Cada tela pensada
          <br />
          <span className="text-platinum italic">para o pecuarista.</span>
        </SectionHeader>
      </div>

      <div
        ref={scrollerRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setTimeout(() => setPaused(false), 2500)}
        className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pl-5 scrollbar-none"
        style={{
          scrollbarWidth: "none",
          paddingRight: "calc(100% - 280px)",
        }}
      >
        {screens.map((s, i) => {
          const isActive = i === index;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className="flex shrink-0 snap-center flex-col items-center transition-all duration-500"
              style={{
                width: 260,
                opacity: isActive ? 1 : 0.35,
                transform: isActive ? "scale(1)" : "scale(0.9)",
                filter: isActive ? "none" : "blur(1px)",
              }}
            >
              <PhoneMockup>
                {s.kind === "image" ? (
                  <img src={s.src} alt={s.label} className="h-full w-full object-cover" />
                ) : (
                  <MockScreen variant={s.v} />
                )}
              </PhoneMockup>
            </button>
          );
        })}
      </div>

      <div className="mt-6 px-5">
        <div
          key={index}
          className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm"
          style={{ boxShadow: "var(--shadow-premium)" }}
        >
          <div className="flex items-center gap-2">
            <span className="eyebrow-index">
              {String(index + 1).padStart(2, "0")}
              <span className="opacity-40"> / {String(screens.length).padStart(2, "0")}</span>
            </span>
            <span className="eyebrow-line" />
          </div>
          <p className="mt-2 font-display text-lg font-semibold tracking-tight">
            {active.label}
          </p>
          <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
            {active.desc}
          </p>
        </div>

        <div className="mt-5 flex justify-center gap-1.5">
          {screens.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Tela ${i + 1}`}
              onClick={() => setIndex(i)}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: index === i ? 22 : 6,
                background:
                  index === i ? "var(--gradient-platinum)" : "var(--color-border)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
