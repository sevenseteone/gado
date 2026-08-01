import { Bell, Gavel, MessageCircle, Play, User, Video } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "live" | "youtube" | "lots" | "notifications" | "profile" | "faq" | "bid" | "catalog" | "home";

interface MockScreenProps {
  variant: Variant;
  className?: string;
}

const titles: Record<Variant, string> = {
  home: "Giraboi Leilões",
  live: "AO VIVO",
  youtube: "Transmissão",
  lots: "Lotes",
  notifications: "Notificações",
  profile: "Meu perfil",
  faq: "Ajuda",
  bid: "Dar lance",
  catalog: "Catálogo",
};

export function MockScreen({ variant, className }: MockScreenProps) {
  return (
    <div className={cn("flex h-full w-full flex-col bg-card text-foreground", className)}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] text-muted-foreground">
        <span>9:41</span>
        <span>••• 5G</span>
      </div>

      {/* App bar */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <div
            className="grid h-6 w-6 place-items-center rounded-md text-[10px] font-bold"
            style={{ background: "var(--gradient-platinum)", color: "oklch(0.10 0 0)" }}
          >
            G
          </div>
          <span className="text-xs font-semibold">{titles[variant]}</span>
        </div>
        <Bell className="h-3.5 w-3.5 text-muted-foreground" />
      </div>

      <div className="flex-1 space-y-2 overflow-hidden px-3 pb-3">
        {variant === "home" && <HomeContent />}
        {variant === "live" && <LiveContent />}
        {variant === "youtube" && <YoutubeContent />}
        {variant === "lots" && <LotsContent />}
        {variant === "notifications" && <NotificationsContent />}
        {variant === "profile" && <ProfileContent />}
        {variant === "faq" && <FaqContent />}
        {variant === "bid" && <BidContent />}
        {variant === "catalog" && <CatalogContent />}
      </div>

      {/* Bottom nav */}
      <div className="grid grid-cols-4 border-t border-border bg-surface-elevated py-2 text-muted-foreground">
        <Gavel className="mx-auto h-4 w-4 text-foreground" />
        <Video className="mx-auto h-4 w-4" />
        <MessageCircle className="mx-auto h-4 w-4" />
        <User className="mx-auto h-4 w-4" />
      </div>
    </div>
  );
}

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-destructive/20 px-2 py-0.5 text-[9px] font-semibold uppercase text-destructive">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-destructive" />
      Ao vivo
    </span>
  );
}

function HomeContent() {
  return (
    <>
      <div className="rounded-lg border border-border p-3">
        <div className="flex items-center justify-between">
          <LiveBadge />
          <span className="text-[9px] text-muted-foreground">Lote 042</span>
        </div>
        <p className="mt-2 text-[11px] font-medium">Nelore PO — 22 machos</p>
        <p className="text-[9px] text-muted-foreground">Lance atual</p>
        <p className="text-platinum text-sm font-bold">R$ 8.400 / cab.</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-border p-2">
            <div className="mb-1 h-10 rounded bg-muted" />
            <p className="text-[9px] font-medium">Lote {40 + i}</p>
            <p className="text-[8px] text-muted-foreground">R$ 6.{i}00</p>
          </div>
        ))}
      </div>
    </>
  );
}

function LiveContent() {
  return (
    <>
      <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
        <div className="absolute inset-0 grid place-items-center">
          <Play className="h-8 w-8 text-primary/80" />
        </div>
        <div className="absolute left-2 top-2">
          <LiveBadge />
        </div>
        <div className="absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-[8px] text-primary">
          312 assistindo
        </div>
      </div>
      <div className="rounded-lg border border-border p-2">
        <p className="text-[10px] text-muted-foreground">Lance atual</p>
        <p className="text-platinum text-lg font-bold">R$ 12.800</p>
        <button
          type="button"
          className="btn-primary mt-1 w-full py-1.5 text-[10px]"
        >
          Dar lance no WhatsApp
        </button>
      </div>
    </>
  );
}

function YoutubeContent() {
  return (
    <>
      <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-8 w-12 place-items-center rounded" style={{ background: "#FF0000" }}>
            <Play className="h-4 w-4 fill-white text-white" />
          </div>
        </div>
      </div>
      <p className="text-[10px] font-medium">Leilão Especial Boi Gordo</p>
      <p className="text-[9px] text-muted-foreground">Giraboi · Ao vivo agora</p>
    </>
  );
}

function LotsContent() {
  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-2 rounded-lg border border-border p-2">
          <div className="h-10 w-10 rounded bg-muted" />
          <div className="flex-1">
            <p className="text-[10px] font-medium">Lote 0{40 + i}</p>
            <p className="text-[9px] text-muted-foreground">{18 + i} animais · Nelore</p>
          </div>
          <span className="text-[10px] font-semibold text-platinum">R$ {6 + i}.200</span>
        </div>
      ))}
    </>
  );
}

function NotificationsContent() {
  const notes = [
    "Novo leilão começando às 20h",
    "Seu lote favorito recebeu lance",
    "Transmissão ao vivo iniciada",
    "Nova mensagem do leiloeiro",
  ];
  return (
    <>
      {notes.map((n, i) => (
        <div key={i} className="flex items-start gap-2 rounded-lg border border-border p-2">
          <Bell className="mt-0.5 h-3 w-3 text-amber" />
          <div>
            <p className="text-[10px]">{n}</p>
            <p className="text-[8px] text-muted-foreground">há {i + 1}h</p>
          </div>
        </div>
      ))}
    </>
  );
}

function ProfileContent() {
  return (
    <>
      <div className="rounded-lg border border-border p-3 text-center">
        <div
          className="mx-auto h-12 w-12 rounded-full"
          style={{ background: "var(--gradient-platinum)" }}
        />
        <p className="mt-2 text-[11px] font-semibold">Produtor</p>
        <p className="text-[9px] text-muted-foreground">Goiânia · GO</p>
      </div>
      <div className="space-y-1">
        {["Meus lances", "Meus lotes", "Notificações", "Sair"].map((i) => (
          <div key={i} className="rounded border border-border px-2 py-1.5 text-[10px]">
            {i}
          </div>
        ))}
      </div>
    </>
  );
}

function FaqContent() {
  return (
    <>
      {["Como dou meu lance?", "É seguro comprar?", "Preciso me cadastrar?"].map((q, i) => (
        <div key={i} className="rounded-lg border border-border p-2">
          <p className="text-[10px] font-medium">{q}</p>
          <p className="mt-0.5 text-[9px] text-muted-foreground">Toque para ver a resposta</p>
        </div>
      ))}
    </>
  );
}

function BidContent() {
  return (
    <>
      <div className="rounded-lg border border-border p-3">
        <p className="text-[9px] text-muted-foreground">Lote 042 · Nelore</p>
        <p className="text-platinum text-lg font-bold">R$ 8.400</p>
        <div className="mt-2 grid grid-cols-3 gap-1">
          {["+100", "+200", "+500"].map((v) => (
            <button
              key={v}
              type="button"
              className="rounded border border-border py-1 text-[9px] font-medium"
            >
              {v}
            </button>
          ))}
        </div>
        <button type="button" className="btn-primary mt-2 w-full py-1.5 text-[10px]">
          Enviar lance · WhatsApp
        </button>
      </div>
    </>
  );
}

function CatalogContent() {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-lg border border-border p-2">
            <div className="h-12 rounded bg-muted" />
            <p className="mt-1 text-[9px] font-medium">Lote 0{30 + i}</p>
            <p className="text-[8px] text-muted-foreground">R$ {5 + i}.100</p>
          </div>
        ))}
      </div>
    </>
  );
}
