import { MessageCircle, Youtube } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="px-5 pb-32 pt-8">
      <div className="divider-hair mb-8" />
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <BrandLogo size={36} />
          <div>
            <p className="font-display text-[14px] font-bold text-foreground">
              Giraboi Leilões
            </p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">
              © {new Date().getFullYear()} — Todos os direitos reservados.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href="https://wa.me/5562998481808"
            aria-label="WhatsApp"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href="https://youtube.com"
            aria-label="YouTube"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
          >
            <Youtube className="h-4 w-4" />
          </a>
        </div>
      </div>
      <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-muted-foreground">
        <a href="#apresentacao">Apresentação</a>
        <a href="#como-funciona">Como funciona</a>
        <a href="#recursos">Recursos</a>
        <a href="#quem-somos">Quem somos</a>
        <a href="#perguntas">Perguntas</a>
        <a href="#contato">Contato</a>
      </nav>
    </footer>
  );
}
