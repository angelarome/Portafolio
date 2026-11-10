import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCode,
  faLaptopCode,
  faServer,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

export default function SobreMi() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  function Dato({ titulo, subtitulo, index, icono }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisible(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);
    return (
      <div
        ref={ref}
        className={`dato ${visible ? "visible" : ""}`}
        style={{ transitionDelay: `${index * 0.15}s` }}
      >
        {" "}
        <i className={icono}></i>{" "}
        <FontAwesomeIcon icon={icono} className="dato-icono" />{" "}
        <h3>{titulo}</h3> <span>{subtitulo}</span>{" "}
      </div>
    );
  }
  return (
    <section id="sobre-mi" ref={ref}>
      <h2 className={`titulo ${visible ? "show" : ""}`}>Sobre mí</h2>

      <div className="sobre-contenido">
        <div className={`sobre-texto ${visible ? "show" : ""}`}>
          <p>
            Soy Tecnóloga en Desarrollo de Software, graduada de la Universidad del Valle. Cuento con experiencia práctica en el desarrollo de aplicaciones móviles y plataformas web, participando en la creación de soluciones tecnológicas orientadas a necesidades reales.
          </p>
          <p>
            He trabajado en proyectos independientes y profesionales, abordando diferentes etapas del desarrollo de software: análisis de requerimientos, desarrollo frontend y backend, integración de APIs, gestión de bases de datos e implementación de funcionalidades. Además, he aplicado metodologías ágiles como Scrum y Kanban para la planificación, organización y seguimiento de actividades durante el desarrollo de proyectos.
          </p>

          <p>
            Me caracterizo por mi pensamiento analítico, capacidad para identificar y resolver problemas, aprendizaje continuo y responsabilidad. Busco aportar mis conocimientos al desarrollo de soluciones eficientes que optimicen procesos y generen valor para las organizaciones.
          </p>
        </div>

        <div className="sobre-datos">
          <Dato
            index={0}
            icono={faCode}
            titulo="+1 año"
            subtitulo="Experiencia en desarrollo de software"
          />

          <Dato
            index={1}
            icono={faLaptopCode}
            titulo="Frontend"
            subtitulo="Diseño y desarrollo de interfaces web"
          />

          <Dato
            index={2}
            icono={faServer}
            titulo="Backend"
            subtitulo="APIs REST, servicios y bases de datos"
          />

          <Dato
            index={3}
            icono={faMobileScreenButton}
            titulo="Mobile"
            subtitulo="Desarrollo de aplicaciones Android"
          />
        </div>
      </div>
    </section>
  );
}
