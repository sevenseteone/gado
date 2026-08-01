import type { ReactNode } from "react";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  children: ReactNode;
}

export function SectionHeader({ index, eyebrow, children }: SectionHeaderProps) {
  return (
    <div>
      <div className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        <span className="eyebrow-line" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="section-title mt-3">{children}</h2>
    </div>
  );
}
