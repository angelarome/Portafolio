import "./styles.css";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import SobreMi from "./sobremi.js";
import Hero from "./hero.js";
import Tecnologias from "./tecnologias.js";
import Proyectos from "./proyectos.js";
import Contacto from "./contacto.js";
import Navbar from "./menu";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [ready, setReady] = useState(false);

  // ⏳ tiempo splash
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        setLoading(false);

        requestAnimationFrame(() => {
          setReady(true);
        });
      }, 800);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {loading && <SplashScreen fadeOut={fadeOut} />}
      <div className={`app ${ready ? "ready" : ""}`}>
        <Navbar />

        <Hero ready={ready} />

        <SobreMi />
        <Tecnologias />
        <Proyectos />

        <Contacto />
        <footer className="footer">
          <p>© 2026 Ángela Romero Meléndez.</p>
          <span>Frontend Developer · React</span>
        </footer>
      </div>
      {loading && (
        <div className={`splash ${fadeOut ? "hide" : ""}`}>
          <SplashScreen />
        </div>
      )}
    </>
  );
}
