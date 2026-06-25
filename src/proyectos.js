import { useState, useEffect, useRef } from "react";
import heliconias from "./assets/heliconiasreport1.jpeg";
import heliconia2 from "./assets/heliconiasreport2.jpeg";
import heliconia3 from "./assets/heliconiasreport3.jpeg";
import prestaap from "./assets/preestaap1.jpeg";
import prestaap1 from "./assets/prestaap2.jpeg";
import prestaap2 from "./assets/prestaap3.jpeg";
import prestaap3 from "./assets/prestaap4.jpeg";
import prestaap4 from "./assets/prestaap6.jpeg";
import prestaap5 from "./assets/prestaap8.jpeg";
import logoheliconias from "./assets/LOGO-HELICONIAS.jpeg";
import prestaaplogo from "./assets/logo-prestaap.png";
import logoboletazo from "./assets/logo-boletazo.png";
import boletazo1 from "./assets/boletazo1.jpeg";
import boletazo2 from "./assets/boletazo2.jpeg";
import boletazo3 from "./assets/boletazo3.jpeg";
import boletazo4 from "./assets/boletazo4.jpeg";
import boletazo5 from "./assets/boletazo5.jpeg";
import boletazo6 from "./assets/boletazo6.jpeg";
import boletazo9 from "./assets/boletazo9.jpeg";

export default function Proyectos() {
  const [proyectoActivo, setProyectoActivo] = useState(null);
  const [indexImagen, setIndexImagen] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const detalleRef = useRef(null);
  const [detalleVisible, setDetalleVisible] = useState(false);

  const descRef = useRef(null);
  const featuresRef = useRef(null);
  const techRef = useRef(null);

  const [carouselVisible, setCarouselVisible] = useState(false);
  const carouselRef = useRef(null);

  const [descVisible, setDescVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [techVisible, setTechVisible] = useState(false);

  const testimonialRef = useRef(null);
  const [testimonialVisible, setTestimonialVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTestimonialVisible(true);
        } else {
          setTestimonialVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => observer.disconnect();
  }, [proyectoActivo]);

  useEffect(() => {
    if (!carouselRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCarouselVisible(true);
        } else {
          setCarouselVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(carouselRef.current);

    return () => observer.disconnect();
  }, [proyectoActivo]);

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

  useEffect(() => {
    const createObserver = (ref, setState) => {
      return new IntersectionObserver(
        ([entry]) => {
          setState(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );
    };

    const obs1 = createObserver(descRef, setDescVisible);
    const obs2 = createObserver(featuresRef, setFeaturesVisible);
    const obs3 = createObserver(techRef, setTechVisible);

    if (descRef.current) obs1.observe(descRef.current);
    if (featuresRef.current) obs2.observe(featuresRef.current);
    if (techRef.current) obs3.observe(techRef.current);

    return () => {
      obs1.disconnect();
      obs2.disconnect();
      obs3.disconnect();
    };
  }, [proyectoActivo]);

  useEffect(() => {
    // reset animaciones cada vez que cambia el proyecto
    setDetalleVisible(false);
    setDescVisible(false);
    setFeaturesVisible(false);
    setTechVisible(false);

    const timer = setTimeout(() => {
      setDetalleVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [proyectoActivo]);

  const proyectos = [
    {
      id: 1,
      tipo: "web",
      nombre: "Heliconias Report",
      imagen: logoheliconias,

      imagenes: [heliconias, heliconia2, heliconia3],

      descripcion:
        "Desarrollo de una plataforma web de inteligencia de datos para el Parque de las Heliconias, enfocada en la gestión, análisis y generación de reportes estadísticos sobre sus visitantes. Proyecto desarrollado en equipo, con enfoque en la optimización del manejo de datos y la automatización de reportes.",

      testimonio: {
        titulo: "Opinión del cliente",
        estrellas: 5,
        comentario:
          "Antes manejábamos toda la información en papel y era muy fácil perder datos o demorarnos buscando registros. Con esta plataforma todo está centralizado, se puede consultar rápidamente y ya no dependemos de hojas de Excel ni de conteos manuales. Nos ha ahorrado mucho tiempo en el proceso.",
        autor: "Administrador del Parque de las Heliconias",
      },

      funcionalidades: [
        "Visualización de estadísticas mediante gráficos interactivos",
        "Análisis por género, edad y otros indicadores",
        "Consulta de información por rangos de fechas",
        "Gráficos de barras para facilitar la interpretación",
        "Gestión y programación de eventos",
        "Exportación de reportes estadísticos",
        "Generación automática de informes",
        "Actualización de métricas en tiempo real",
      ],

      tecnologias: [
        { nombre: "HTML", icono: "/icons/html.svg" },
        { nombre: "CSS", icono: "/icons/css.svg" },
        { nombre: "JavaScript", icono: "/icons/javascript.svg" },
        { nombre: "PostgreSQL", icono: "/icons/postgresql.svg" },
        { nombre: "Supabase", icono: "/icons/supabase.svg" },
        { nombre: "GitHub", icono: "/icons/github.svg" },
      ],
    },

    {
      id: 2,
      tipo: "movil",
      nombre: "Prestaap",
      imagen: prestaaplogo,

      imagenes: [
        prestaap,
        prestaap1,
        prestaap2,
        prestaap3,
        prestaap4,
        prestaap5,
      ],

      descripcion:
        "Aplicación móvil para la gestión de préstamos desarrollada en Flutter. Incluye control de clientes, préstamos, cuotas, facturación digital, caja, gastos, estadísticas y copias de seguridad.",

      testimonio: {
        titulo: "Opinión del cliente",
        estrellas: 5,
        comentario:
          "La aplicación es muy fácil de usar e intuitiva, lo que hace que cualquier persona pueda adaptarse rápidamente sin necesidad de mucha capacitación. Nos ha permitido llevar un mejor control de los préstamos, sin pérdida de datos y con toda la información organizada. Además, ahora podemos ver estadísticas en tiempo real, lo que antes tomaba mucho tiempo calcular manualmente. En general, nos ha ahorrado bastante tiempo en la gestión diaria.",
        autor: "Cliente de Prestaap",
      },

      funcionalidades: [
        "Registro e inicio de sesión con Firebase",
        "Recuperación de contraseña",
        "Protección mediante PIN y huella biométrica",
        "Gestión de clientes y préstamos",
        "Creación de múltiples préstamos por cliente",
        "Seguimiento automático de cuotas",
        "Identificación de clientes atrasados y pagos pendientes",
        "Seguimiento de pagos del día y próximos vencimientos",
        "Recordatorios de cobro mediante WhatsApp",
        "Marcación telefónica automática desde la aplicación",
        "Generación de facturas digitales en imagen",
        "Historial de facturas con búsqueda y reenvío",
        "Control de ingresos, gastos y caja",
        "Registro y administración de gastos",
        "Retiros de dinero de caja",
        "Cálculo automático del saldo disponible",
        "Análisis semanal, mensual y anual",
        "Consultas por rango de fechas",
        "Edición del perfil y configuración financiera",
        "Exportación e importación de la base de datos",
        "Copias de seguridad en Google Drive",
        "Funcionamiento sin conexión a internet",
      ],

      tecnologias: [
        { nombre: "Flutter", icono: "/icons/flutter.svg" },
        { nombre: "Dart", icono: "/icons/logos--dart.svg" },
        { nombre: "Firebase", icono: "/icons/firebase.svg" },
        { nombre: "SQLite", icono: "/icons/sqlite.svg" },
        { nombre: "Python", icono: "/icons/python.svg" },
        { nombre: "MySQL", icono: "/icons/mysql.svg" },
        { nombre: "Railway", icono: "/icons/railways.svg" },
      ],
    },

    {
      id: 3,
      tipo: "movil",
      nombre: "Boletazo",
      imagen: logoboletazo,

      imagenes: [
        boletazo9,
        boletazo3,
        boletazo4,
        boletazo2,
        boletazo5,
        boletazo1,
      ],

      descripcion:
        "Boletazo es una aplicación móvil desarrollada para la gestión de rifas y boletas. Permite generar números automáticos o personalizados, administrar deudores y encargos, generar PDFs, consultar historiales y trabajar sin conexión a internet. Además, incorpora autenticación, PIN y huella digital para brindar mayor seguridad.",

      testimonio: {
        titulo: "Opinión del cliente",
        estrellas: 5,
        comentario:
          "Antes hacía todo en papel y muchas veces perdía listas o no recordaba quién me debía. Con Boletazo ahora tengo todo organizado, ahorro tiempo y puedo administrar mis rifas mucho más fácil.",
        autor: "Cliente de Boletazo",
      },

      funcionalidades: [
        "Generación automática de boletas de 2, 3 y 4 cifras",
        "Creación de números personalizados para rifas",
        "Exportación e impresión de boletas en PDF",
        "Diseños personalizables para las boletas",
        "Historial de números personalizados generados",
        "Copia, eliminación y reimpresión de listas guardadas",
        "Búsqueda de rifas por fecha, lotería o precio",
        "Gestión de deudores y registro de abonos",
        "Administración de encargos y control de entregas",
        "Rifas con imágenes personalizadas del premio",
        "Eliminación automática de deudas pagadas",
        "Eliminación automática de encargos entregados",
        "Autenticación de usuarios con Firebase",
        "Recuperación y cambio de contraseña",
        "Protección mediante PIN de seguridad",
        "Inicio de sesión con huella digital",
        "Exportación e importación de la base de datos",
        "Funcionamiento sin conexión a internet",
      ],

      tecnologias: [
        { nombre: "Flutter", icono: "/icons/flutter.svg" },
        { nombre: "Dart", icono: "/icons/logos--dart.svg" },
        { nombre: "Firebase", icono: "/icons/firebase.svg" },
        { nombre: "SQLite", icono: "/icons/sqlite.svg" },
        { nombre: "GitHub", icono: "/icons/github.svg" },
      ],
    },
  ];

  return (
    <section id="proyectos" ref={ref}>
      <h2 className={`titulo_proyect ${visible ? "show" : ""}`}>Proyectos</h2>

      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className={`project-preview ${visible ? "show" : ""} ${
              proyectoActivo?.id === proyecto.id ? "active" : ""
            }`}
            style={{ transitionDelay: `${proyecto.id * 0.15}s` }}
            onClick={() => {
              setIndexImagen(0);

              const nuevoProyecto =
                proyectoActivo?.id === proyecto.id ? null : proyecto;

              setProyectoActivo(nuevoProyecto);

              // RESET primero
              setDetalleVisible(false);

              setTimeout(() => {
                setDetalleVisible(true);

                detalleRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }, 120);
            }}
          >
            <img src={proyecto.imagen} alt={proyecto.nombre} />

            <p className="project-tag">
              {proyecto.id === 1 ? "🌐 Aplicación Web" : "📱 Aplicación Móvil"}
            </p>
          </div>
        ))}
      </div>

      {proyectoActivo && (
        <div
          key={proyectoActivo.id}
          className="project-detail"
          ref={detalleRef}
        >
          {/* IZQUIERDA */}
          <div className="project-info">
            <h2 className={`project-title ${detalleVisible ? "show" : ""}`}>
              {proyectoActivo.nombre}
            </h2>

            <div className="description-carousel">
              <div
                ref={descRef}
                className={`project-description ${descVisible ? "show" : ""}`}
              >
                <h3>Descripción</h3>
                <p>{proyectoActivo.descripcion}</p>
              </div>
              {/* DERECHA (CARRUSEL) */}
              <div
                ref={carouselRef}
                className={`project-carousel ${carouselVisible ? "show" : ""}`}
              >
                <div
                  className={`carousel-wrapper ${
                    proyectoActivo.tipo === "movil"
                      ? "mobile-frame"
                      : "web-frame"
                  }`}
                >
                  <button
                    className="carousel-btn left"
                    onClick={() =>
                      setIndexImagen((prev) =>
                        prev === 0
                          ? proyectoActivo.imagenes.length - 1
                          : prev - 1
                      )
                    }
                  >
                    ◀
                  </button>

                  <div className="carousel-stack">
                    {proyectoActivo.imagenes.map((img, i) => {
                      let position = i - indexImagen;

                      if (position < -1)
                        position = proyectoActivo.imagenes.length + position;
                      if (position > 1)
                        position = position - proyectoActivo.imagenes.length;

                      return (
                        <img
                          key={i}
                          src={img}
                          className={`carousel-img pos-${position}`}
                        />
                      );
                    })}
                  </div>

                  <button
                    className="carousel-btn right"
                    onClick={() =>
                      setIndexImagen(
                        (prev) => (prev + 1) % proyectoActivo.imagenes.length
                      )
                    }
                  >
                    ▶
                  </button>
                </div>
                <div className="carousel-dots">
                  {proyectoActivo.imagenes.map((_, i) => (
                    <span
                      key={i}
                      className={`dot ${i === indexImagen ? "active" : ""}`}
                      onClick={() => setIndexImagen(i)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {proyectoActivo.testimonio && (
              <div
                ref={testimonialRef}
                className={`testimonial ${testimonialVisible ? "show" : ""}`}
              >
                <h4>{proyectoActivo.testimonio.titulo}</h4>

                <div className="stars">
                  {"★".repeat(proyectoActivo.testimonio.estrellas)}
                </div>

                <p>"{proyectoActivo.testimonio.comentario}"</p>

                <span>— {proyectoActivo.testimonio.autor}</span>
              </div>
            )}

            <h4 className={`subtitulo ${featuresVisible ? "show" : ""}`}>
              Características destacadas
            </h4>

            <ul
              ref={featuresRef}
              className={`feature-list ${featuresVisible ? "show" : ""}`}
            >
              {proyectoActivo.funcionalidades.map((item, index) => (
                <li key={index} style={{ transitionDelay: `${index * 0.09}s` }}>
                  {item}
                </li>
              ))}
            </ul>

            <h4
              ref={techRef}
              className={`subtitulo ${techVisible ? "show" : ""}`}
            >
              Tecnologías usadas
            </h4>

            <div className={`tech-row ${techVisible ? "show" : ""}`}>
              {proyectoActivo.tecnologias.map((tech, index) => (
                <div
                  key={index}
                  className={`tech-pill ${visible ? "show" : ""}`}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <img src={tech.icono} alt={tech.nombre} />
                  <span>{tech.nombre}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
