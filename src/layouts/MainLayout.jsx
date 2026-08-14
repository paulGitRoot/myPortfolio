import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TerminalConsole from "../components/TerminalConsole";
import { useEffect } from "react";
import SiteInteractions from "../components/SiteInteractions";

const MainLayout = () => {
  useEffect(() => {
    document.documentElement.dataset.terminalTheme = localStorage.getItem("terminal-theme") || "amber";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <TerminalConsole />
      <SiteInteractions />
    </>
  );
};
export default MainLayout;
