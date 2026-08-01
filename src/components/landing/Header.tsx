import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { id: "apresentacao", label: "Apresentação" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "recursos", label: "Recursos" },
  { id: "quem-somos", label: "Quem somos" },
  { id: "perguntas", label: "Perguntas" },
  { id: "contato", label: "Contato" },
];

function scrollTo(id: string) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

export function Header() {
  return (
    <div className="fixed right-4 top-4 z-30">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/80 text-muted-foreground backdrop-blur-md transition-colors hover:text-foreground"
            aria-label="Abrir menu"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {links.map((l) => (
            <DropdownMenuItem key={l.id} onSelect={() => scrollTo(l.id)}>
              {l.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
