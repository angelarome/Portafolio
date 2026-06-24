import { useEffect, useRef, useState } from "react";

function Contacto() {
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
    <section id="contacto" ref={ref} className={visible ? "mostrar" : ""}>
      <h2 className={`titulo ${visible ? "show" : ""}`}>Contacto</h2>

      <p className={`contact-text ${visible ? "show" : ""}`}>
        ¿Tienes un proyecto, una oportunidad laboral o una idea en mente?
        <br />
        <span> Estaré encantada de ayudarte.</span>
      </p>

      <div className={`contact-card ${visible ? "show" : ""}`}>
        <a
          href="mailto:angela.romero.melendez.software@gmail.com"
          className={`contact-item ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="icon-wrapper">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>

          <div>
            <h3>Correo</h3>
            <span>angela.romero.melendez.software@gmail.com</span>
          </div>
        </a>

        <a
          href="https://github.com/angelarome"
          target="_blank"
          rel="noopener noreferrer"
          className={`contact-item ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <img src="/icons/github.svg" className="icon" />
          <div>
            <h3>GitHub</h3>
            <span>github.com/angelarome</span>
          </div>
        </a>

        <a
          href="www.linkedin.com/in/angela-tatiana-romero-melendez-3b5690385"
          target="_blank"
          rel="noopener noreferrer"
          className={`contact-item ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.7s" }}
        >
          <img src="/icons/linkedin.svg" className="icon" />
          <div>
            <h3>LinkedIn</h3>
            <span>Perfil profesional</span>
          </div>
        </a>

        <a
          href="https://wa.me/573247553136?text=Hola%20Ángela,%20vi%20tu%20portafolio%20y%20me%20interesa%20contactarte"
          target="_blank"
          rel="noopener noreferrer"
          className={`contact-item ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.7s" }}
        >
          <img src="/icons/whatsapp.svg" className="icon" />
          <div>
            <h3>whatsapp</h3>
            <span>Escríbeme por WhatsApp</span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Contacto;
