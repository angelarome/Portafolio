import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function Tecnologias() {
  const AnimatedTitle = ({ text }) => {
    const [ref, visible] = useInView();

    return (
      <h2 ref={ref} className={`categoria ${visible ? "show" : ""}`}>
        {text.split("").map((letter, i) => (
          <span
            key={i}
            style={{ transitionDelay: `${i * 0.03}s` }}
            className="letter"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h2>
    );
  };

  function useInView(
    options = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  ) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      }, options);

      const el = ref.current;

      if (el) {
        observer.observe(el);
      }

      return () => {
        if (el) {
          observer.unobserve(el);
        }
      };
    }, []);

    return [ref, inView];
  }

  function TechCard({ icon, name, index }) {
    const [ref, visible] = useInView();

    return (
      <div
        ref={ref}
        className={`tech ${visible ? "show" : ""}`}
        style={{ transitionDelay: `${index * 0.05}s` }}
      >
        <div className="tech-icon">
          <img src={icon} alt={name} />
        </div>
        <p>{name}</p>
      </div>
    );
  }

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

  return (
    <section id="tecnologias" ref={ref} className={visible ? "visible" : ""}>
      <AnimatedTitle text="Desarrollo web y móvil" visible={visible} />
      <div className="grid">
        <TechCard icon="/icons/python.svg" name="Python" index={0} />
        <TechCard icon="/icons/flutter.svg" name="Flutter" index={1} />
        <TechCard icon="/icons/logos--dart.svg" name="Dart" index={2} />
        <TechCard icon="/icons/react.svg" name="React" index={3} />
        <TechCard icon="/icons/javascript.svg" name="JavaScript" index={4} />
        <TechCard icon="/icons/html.svg" name="HTML" index={5} />
        <TechCard icon="/icons/css.svg" name="CSS" index={6} />
      </div>

      <AnimatedTitle text="Backend, bases de datos y cloud" visible={visible} />

      <div className="grid">
        <TechCard icon="/icons/flask.svg" name="Flask" index={7} />
        <TechCard icon="/icons/firebase.svg" name="Firebase" index={8} />
        <TechCard icon="/icons/railways.svg" name="Railway" index={9} />
        <TechCard icon="/icons/supabase.svg" name="Supabase" index={10} />
        <TechCard icon="/icons/mysql.svg" name="MySQL" index={11} />
        <TechCard icon="/icons/sqlite.svg" name="SQLite" index={12} />
        <TechCard icon="/icons/postgresql.svg" name="PostgreSQL" index={13} />
      </div>

      <AnimatedTitle text="APIs e integraciones" visible={visible} />
      <div className="grid">
        <TechCard icon="/icons/api1.svg" name="REST APIs" index={14} />
        <TechCard icon="/icons/mapa.png" name="Google Maps API" index={15} />
        <TechCard
          icon="/icons/google-drive.svg"
          name="Google Drive API"
          index={16}
        />
        <TechCard icon="/icons/enviar1.svg" name="Brevo Email API" index={17} />
        <TechCard
          icon="/icons/firebase.svg"
          name="Firebase Authentication"
          index={18}
        />
        <TechCard
          icon="/icons/pin-seguridad.png"
          name="OpenRouteService API"
          index={19}
        />
      </div>

      <AnimatedTitle text="Herramientas de desarrollo" visible={visible} />
      <div className="grid">
        <TechCard
          icon="/icons/visual-studio-code.svg"
          name="VS Code"
          index={20}
        />
        <TechCard icon="/icons/github.svg" name="GitHub" index={21} />
        <TechCard icon="/icons/git.svg" name="Git" index={22} />
        <TechCard icon="/icons/trello.svg" name="Trello" index={23} />
      </div>

      <AnimatedTitle text="Diseño" visible={visible} />
      <div className="grid">
        <TechCard icon="/icons/figma.svg" name="Figma" index={24} />
        <TechCard icon="/icons/devicon--canva.svg" name="Canva" index={25} />
        <TechCard icon="/icons/photoshop.svg" name="Photoshop" index={26} />
      </div>
    </section>
  );
}
