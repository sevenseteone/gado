import { useInstallModal } from "./InstallModal";
import { GooglePlayBadge } from "./GooglePlayBadge";

export function StickyInstallBar() {
  const { open } = useInstallModal();
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-3">
      <div
        className="pointer-events-auto flex w-full max-w-[420px] items-center justify-between gap-3 rounded-2xl border border-border bg-card/85 p-2 pl-2 pr-4 backdrop-blur-xl"
        style={{ boxShadow: "var(--shadow-premium)" }}
      >
        <GooglePlayBadge onClick={open} size="sm" />
        <button
          type="button"
          onClick={open}
          className="text-right text-[12px] font-semibold leading-tight text-foreground"
        >
          Baixar aplicativo
          <span className="block text-[10px] font-normal text-muted-foreground">
            Grátis · Play Store
          </span>
        </button>
      </div>
    </div>
  );
}
