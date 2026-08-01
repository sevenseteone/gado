import { createContext, useCallback, useContext, type ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { getInstallUrl } from "@/lib/config.functions";

type InstallModalCtx = { open: () => void; url: string };
const Ctx = createContext<InstallModalCtx | null>(null);

const FALLBACK = "https://play.google.com/store";

export function useInstallModal() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useInstallModal must be used inside InstallModalProvider");
  return ctx;
}

export function InstallModalProvider({ children }: { children: ReactNode }) {
  const { data } = useQuery({
    queryKey: ["install-url"],
    queryFn: () => getInstallUrl(),
    staleTime: 60_000,
  });

  const url = data?.installUrl ?? FALLBACK;

  const open = useCallback(() => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }, [url]);

  return <Ctx.Provider value={{ open, url }}>{children}</Ctx.Provider>;
}
