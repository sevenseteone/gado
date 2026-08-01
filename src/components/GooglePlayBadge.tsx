import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface GooglePlayBadgeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}

export const GooglePlayBadge = forwardRef<HTMLButtonElement, GooglePlayBadgeProps>(
  ({ className, size = "md", ...props }, ref) => {
    const dims =
      size === "lg"
        ? "px-5 py-3 gap-3"
        : size === "sm"
          ? "px-3 py-1.5 gap-2"
          : "px-4 py-2.5 gap-2.5";
    const icon = size === "lg" ? "h-7 w-7" : size === "sm" ? "h-5 w-5" : "h-6 w-6";
    const top = size === "lg" ? "text-[10px]" : "text-[9px]";
    const bottom = size === "lg" ? "text-sm" : "text-xs";
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "inline-flex items-center rounded-xl border border-white/10 text-white transition-transform hover:scale-[1.02] active:scale-[0.98]",
          dims,
          className,
        )}
        style={{
          background: "linear-gradient(180deg, oklch(0.18 0.005 270) 0%, oklch(0.06 0 0) 100%)",
          boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.08), 0 8px 20px -10px oklch(0 0 0 / 0.8)",
        }}
        {...props}
      >
        <svg viewBox="0 0 24 24" className={icon} aria-hidden>
          <path d="M3.6 2.2C3.2 2.5 3 3 3 3.7v16.6c0 .7.2 1.2.6 1.5l.1.1L13 12.1v-.2L3.7 2.1l-.1.1z" fill="#00D4E6" />
          <path d="M16 15.2 13 12.1v-.2l3-3.1.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.7 2.1-.1-.1z" fill="#FFCE00" />
          <path d="M16.1 15.1 13 12l-9.4 9.4c.4.4 1 .4 1.7.1l10.8-6.4" fill="#FF3A44" />
          <path d="M16.1 8.9 5.3 2.5C4.6 2.1 4 2.2 3.6 2.6L13 12l3.1-3.1z" fill="#00F076" />
        </svg>
        <div className="flex flex-col items-start leading-tight">
          <span className={cn("opacity-70", top)}>DISPONÍVEL NO</span>
          <span className={cn("font-semibold tracking-tight", bottom)}>Google Play</span>
        </div>
      </button>
    );
  },
);
GooglePlayBadge.displayName = "GooglePlayBadge";
