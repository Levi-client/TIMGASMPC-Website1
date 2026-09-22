import { Outlet } from "react-router-dom";
import { Footer } from "@/layouts/PublicLayout/components/Footer/Footer";
import { Header } from "@/layouts/PublicLayout/components/Header/Header";
export function PublicLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
