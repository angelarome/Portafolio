
import { useEffect, useRef, useState } from "react";
import "./styles.css";
import angelaromero from "./assets/angelaromero.jpg";

export default function Hero({ ready }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="inicio"
      ref={ref}
      className={`hero ${ready && visible ? "visible" : ""}`}
    >
      <div className="hero-contenido">

        <div className="hero-imagen">
          <img
            src={angelaromero}
            alt="Ángela Romero Meléndez"
            className="foto-perfil"
          />
        </div>

        <div className="hero-texto">

          <span className="hero-etiqueta">
            DESARROLLADORA DE SOFTWARE
          </span>

          <h1>
            Transformo ideas en soluciones digitales.
          </h1>

          <h2>Ángela Romero Meléndez</h2>

          <h3>Tecnóloga en Desarrollo de Software</h3>

          <p>
            Diseño y desarrollo aplicaciones móviles y
            soluciones web enfocadas en resolver problemas
            reales. Combino lógica, creatividad y tecnología
            para construir herramientas funcionales,
            intuitivas y eficientes.
          </p>

          <div className="hero-botones">
            <a href="#proyectos" className="btn-principal">
              Ver proyectos →
            </a>

            <a href="#contacto" className="btn-secundario">
              Contactarme
            </a>
          </div>

          <div className="hero-especialidades">
            <span>Desarrollo móvil</span>
            <span>Desarrollo web</span>
            <span>Backend</span>
          </div>

        </div>
      </div>
    </section>
  );
}
