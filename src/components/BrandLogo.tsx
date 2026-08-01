import logo from "@/assets/giraboi-logo.png.asset.json";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export function BrandLogo({ className, size = 44 }: BrandLogoProps) {
  return (
    <img
      src={logo.url}
      alt="Giraboi Leilões"
      width={size}
      height={size}
      className={cn("select-none object-contain", className)}
      style={{ width: size, height: size }}
      draggable={false}
    />
  );
}
