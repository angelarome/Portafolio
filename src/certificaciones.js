import { useState, useEffect, useRef } from "react";
import "./styles.css";

const certificados = [
  {
    nombre: "Tecnología en Desarrollo de Software",
    institucion: "Universidad del Valle",
    fecha: "2026",
    imagen: "/certificados/tecnologia.jpeg",
    categoria: "Tecnólogo",
  },
  {
    nombre: "Técnica en Asistencia Administrativa",
    institucion: "SENA",
    fecha: "2022",
    imagen: "/certificados/administrativa.jpg",
    categoria: "Técnico",
  },
  {
    nombre: "Construcción de Bases de Datos con MySQL",
    institucion: "SENA",
    fecha: "2025",
    imagen: "/certificados/mysql.jpg",
    categoria: "Complementario",
  },
  {
    nombre: "Desarrollo Web con PHP",
    institucion: "SENA",
    fecha: "2025",
    imagen: "/certificados/php.jpg",
    categoria: "Complementario",
  },
  {
    nombre: "English Does Work - Level 4",
    institucion: "SENA",
    fecha: "2025",
    imagen: "/certificados/ingles.jpg",
    categoria: "Complementario",
  },
  {
    nombre: "Básico de Mercadeo y Servicio al Cliente",
    institucion: "SENA",
    fecha: "2021",
    imagen: "/certificados/mercadeo.jpg",
    categoria: "Complementario",
  },
];

function Certificaciones() {
  const [certificadoSeleccionado, setCertificadoSeleccionado] = useState(null);

  const seccionRef = useRef(null);

  useEffect(() => {
    const elementos = seccionRef.current.querySelectorAll(".cert-animacion");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cert-visible");
          } else {
            entry.target.classList.remove("cert-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elementos.forEach((elemento) => observer.observe(elemento));

    return () => observer.disconnect();
  }, []);
  return (
    <section className="certificaciones" id="certificaciones" ref={seccionRef}>
      <div className="cert-header">
        <span className="cert-etiqueta cert-animacion">MI FORMACIÓN</span>

        <h2 className="cert-animacion">
          Mis <span>Certificaciones</span>
        </h2>

        <p className="cert-animacion">
          Cada aprendizaje representa un paso más en mi crecimiento profesional
          y personal.
        </p>
      </div>

      <div className="cert-grid">
        {certificados.map((cert, index) => (
          <div
            className="cert-card cert-animacion"
            key={index}
            style={{ "--delay": `${index * 0.15}s` }}
          >
            <div
              className="cert-imagen"
              onClick={() => setCertificadoSeleccionado(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setCertificadoSeleccionado(cert);
              }}
              aria-label={`Ampliar ${cert.nombre}`}
            >
              <img src={cert.imagen} alt={cert.nombre} />

              <span className="cert-badge">{cert.categoria}</span>

              <div className="cert-overlay">
                <span>⌕</span>
                <p>Ampliar certificado</p>
              </div>
            </div>

            <div className="cert-info">
              <span className="cert-fecha">{cert.fecha}</span>

              <h3>{cert.nombre}</h3>

              <p>{cert.institucion}</p>
            </div>
          </div>
        ))}
      </div>

      {certificadoSeleccionado && (
        <div
          className="cert-modal"
          onClick={() => setCertificadoSeleccionado(null)}
        >
          <button
            className="cert-cerrar"
            onClick={() => setCertificadoSeleccionado(null)}
            aria-label="Cerrar certificado"
          >
            ×
          </button>

          <div
            className="cert-modal-contenido"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={certificadoSeleccionado.imagen}
              alt={certificadoSeleccionado.nombre}
            />

            <div className="cert-modal-info">
              <h3>{certificadoSeleccionado.nombre}</h3>
              <p>
                {certificadoSeleccionado.institucion} ·{" "}
                {certificadoSeleccionado.fecha}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificaciones;
