import { useEffect, useRef, useState } from "react";
import "./styles.css";

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
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  function Dato({ titulo, subtitulo, index }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        {
          threshold: 0.2,
        }
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
        <h3>{titulo}</h3>
        <span>{subtitulo}</span>
      </div>
    );
  }

  return (
    <section id="sobre-mi" ref={ref}>
      <h2 className={`titulo ${visible ? "show" : ""}`}>Sobre mí</h2>

      <div className="sobre-contenido">
        <div className={`sobre-texto ${visible ? "show" : ""}`}>
          <p>
            Soy Tecnóloga en Desarrollo de Software, actualmente con derecho a
            grado, con experiencia en el desarrollo de aplicaciones web y
            móviles. Me apasiona crear soluciones tecnológicas que resuelvan
            problemas reales y aporten valor a las personas.
          </p>

          <p>
            He participado en proyectos frontend y backend, trabajando con bases
            de datos, APIs y sistemas de gestión. Me caracterizo por la
            disciplina, la responsabilidad y el aprendizaje continuo.
          </p>
        </div>

        <div className="sobre-datos">
          <Dato index={0} titulo="+1 año" subtitulo="Experiencia" />
          <Dato index={1} titulo="Frontend" subtitulo="Interfaces modernas" />
          <Dato
            index={2}
            titulo="Backend"
            subtitulo="APIs y lógica de negocio"
          />
          <Dato index={3} titulo="Mobile" subtitulo="Android developer" />
        </div>
      </div>
    </section>
  );
}
