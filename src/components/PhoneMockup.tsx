import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children?: ReactNode;
  className?: string;
  screenClassName?: string;
}

export function PhoneMockup({ children, className, screenClassName }: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto", className)} style={{ width: 260, height: 540 }}>
      {/* Side buttons */}
      <div className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l-full bg-border" />
      <div className="absolute -left-[3px] top-40 h-14 w-[3px] rounded-l-full bg-border" />
      <div className="absolute -left-[3px] top-60 h-14 w-[3px] rounded-l-full bg-border" />
      <div className="absolute -right-[3px] top-36 h-20 w-[3px] rounded-r-full bg-border" />

      {/* Outer bezel */}
      <div
        className="relative h-full w-full rounded-[42px] p-[3px]"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.35 0.01 270), oklch(0.08 0.005 270) 60%, oklch(0.25 0.01 270))",
          boxShadow:
            "0 24px 60px -20px oklch(0 0 0 / 0.7), inset 0 1px 0 oklch(1 0 0 / 0.06)",
        }}
      >
        {/* Inner bezel */}
        <div className="relative h-full w-full rounded-[40px] bg-background p-[6px]">
          {/* Screen */}
          <div
            className={cn(
              "relative h-full w-full overflow-hidden rounded-[34px] bg-card",
              screenClassName,
            )}
          >
            {/* Dynamic island */}
            <div className="absolute left-1/2 top-2 z-30 h-6 w-20 -translate-x-1/2 rounded-full bg-background" />
            {/* Reflection */}
            <div
              className="pointer-events-none absolute inset-0 z-20 rounded-[34px]"
              style={{
                background:
                  "linear-gradient(135deg, oklch(1 0 0 / 0.06) 0%, transparent 30%, transparent 70%, oklch(1 0 0 / 0.03) 100%)",
              }}
            />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
