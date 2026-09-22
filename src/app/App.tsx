import { Suspense } from "react";
import { AppRoutes } from "@/app/routes";
import { ScrollToTop } from "@/components/shared/ScrollToTop/ScrollToTop";

export function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <main aria-live="polite">
            <p className="srOnly">Loading…</p>
          </main>
        }
      >
        <AppRoutes />
      </Suspense>
    </>
  );
}
