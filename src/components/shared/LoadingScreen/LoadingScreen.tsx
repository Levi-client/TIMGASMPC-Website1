import { type ReactNode, useEffect } from "react";

interface LoadingScreenProps {
  children: ReactNode;
}

export function LoadingScreen({ children }: LoadingScreenProps) {
  useEffect(() => {
    const loadingElement = document.getElementById("loading-screen");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!loadingElement) {
      window.dispatchEvent(new Event("timgas:hero-ready"));
      return;
    }

    const openingTimer = window.setTimeout(
      () => {
        loadingElement.classList.add("is-opening");
      },
      reducedMotion ? 0 : 180,
    );

    const revealTimer = window.setTimeout(
      () => window.dispatchEvent(new Event("timgas:hero-ready")),
      reducedMotion ? 0 : 720,
    );

    const cleanupTimer = window.setTimeout(
      () => loadingElement.remove(),
      reducedMotion ? 50 : 1250,
    );

    return () => {
      window.clearTimeout(openingTimer);
      window.clearTimeout(revealTimer);
      window.clearTimeout(cleanupTimer);
    };
  }, []);

  return <>{children}</>;
}
