import "./styles.css";
import { useState } from "react";
import logo from "./assets/logo.png";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="navbar">
      <img id="main-logo" className="logo" src={logo} />

      <button className="menu-btn" onClick={() => setMenuAbierto(!menuAbierto)}>
        ☰
      </button>

      <div className={`nav-links ${menuAbierto ? "active" : ""}`}>
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#tecnologias">Tecnologías</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}
