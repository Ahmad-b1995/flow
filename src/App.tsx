import ls, {get} from "local-storage";
import {useEffect} from "react";
import Header from "./components/pages/homepage/Header";
import Router from "./routes";
import "./styles/Global";

export default function App() {
  useEffect(() => {
    if (get("isDark"))
      document.querySelector("body")?.setAttribute("data-theme", "dark");
  }, []);

  function toggleTheme() {
    let isDark = document.querySelector("body")?.toggleAttribute("data-theme");
    ls("isDark", isDark);
  }
  return (
    <main className="bg-background1 mx-auto min-h-screen">
      <Header onThemeToggle={toggleTheme} />
      <div className="mx-auto max-w-7xl">
        <Router />
      </div>
    </main>
  );
}
