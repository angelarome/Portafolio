import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import heliconias from "./assets/heliconiasreport1.jpeg";
import heliconia2 from "./assets/heliconiasreport2.jpeg";
import heliconia3 from "./assets/heliconiasreport3.jpeg";
import logoheliconias from "./assets/LOGO-HELICONIAS.jpeg";
import logoboletazo from "./assets/sorteapro.png";
import boletazo1 from "./assets/sorteapro1.jpeg";
import boletazo2 from "./assets/sorteapro2.jpeg";
import boletazo3 from "./assets/sorteapro3.jpeg";
import boletazo4 from "./assets/sorteapro4.jpeg";
import boletazo5 from "./assets/sorteapro5.jpeg";
import boletazo8 from "./assets/sorteapro8.jpeg";
import boletazo7 from "./assets/sorteapro7.jpeg";
import prestaappro from "./assets/cobropro.png";
import prestaappro1 from "./assets/prestaappro1.jpeg";
import prestaappro2 from "./assets/prestaappro2.jpeg";
import prestaappro3 from "./assets/prestaappro3.jpeg";
import prestaappro4 from "./assets/prestaappro4.jpeg";
import prestaappro5 from "./assets/prestaappro5.jpeg";
import prestaappro6 from "./assets/prestappro6.jpeg";
import prestaappro7 from "./assets/prestaappro7.jpeg";

export default function Proyectos() {
  const [proyectoActivo, setProyectoActivo] = useState(null);
  const [indexImagen, setIndexImagen] = useState(0);
  const [visorAbierto, setVisorAbierto] = useState(false);
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

  const [videoAbierto, setVideoAbierto] = useState(false);
  const [videoActivo, setVideoActivo] = useState(null);

  useEffect(() => {
    const elemento = ref.current;

    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(elemento);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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
    const elemento = carouselRef.current;

    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setCarouselVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(elemento);

    return () => observer.disconnect();
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

  useEffect(() => {
    const elemento = testimonialRef.current;

    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setTestimonialVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(elemento);

    return () => observer.disconnect();
  }, [proyectoActivo]);

  const proyectos = [
    {
      id: 1,
      tipo: "web",
      nombre: "Heliconias Report",
      resumen:
        "Plataforma web para gestionar visitantes, consultar estadísticas y generar informes automáticamente.",
      imagen: logoheliconias,

      imagenes: [heliconia3, heliconia2, heliconias],
      descripcionesImagenes: [
        {
          titulo: "Panel principal y resumen estadístico",
          descripcion:
            "Página principal de la plataforma después del inicio de sesión, con tarjetas informativas que presentan un resumen de las estadísticas y métricas principales para consultar rápidamente la actividad registrada.",
        },
        {
          titulo: "Distribución de visitantes por ciudad",
          descripcion:
            "Visualización estadística de la procedencia de los visitantes mediante gráficos de barras, que permiten identificar y comparar las ciudades con mayor número de visitantes.",
        },
        {
          titulo: "Estadísticas de reservas individuales y grupales",
          descripcion:
            "Consulta y comparación de las reservas individuales y grupales mediante gráficos circulares, facilitando el análisis de la distribución de las reservas.",
        },
      ],

      descripcion:
        "Desarrollo de una plataforma web de inteligencia de datos para el Parque de las Heliconias, enfocada en la gestión, análisis y generación de reportes estadísticos sobre sus visitantes. Proyecto desarrollado en equipo, con enfoque en la optimización del manejo de datos y la automatización de reportes.",

      repositorio:
        "https://github.com/codigoabiertoceron123-wq/heliconias2.2.git",

      problemaSolucion: {
        problema:
          "La información de los visitantes y las reservas se registraba manualmente en archivos de Excel y cuadernos. Este proceso exigía ingresar y organizar grandes cantidades de datos para elaborar estadísticas, dificultaba las consultas y representaba un riesgo de pérdida de información.",

        solucion:
          "Se desarrolló en equipo una plataforma web compuesta por tres módulos para centralizar la gestión de la información. Mi participación se enfocó en el módulo de estadísticas, encargado de consultar los datos almacenados en la base de datos y transformarlos en gráficos e indicadores para analizar la actividad de los visitantes y las reservas.",

        beneficio:
          "La información de las reservas queda almacenada y disponible para su análisis, evitando tener que recopilar manualmente los registros para elaborar estadísticas. Esto facilita las consultas, permite identificar tendencias y agiliza la generación de reportes para la toma de decisiones.",
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
      nombre: "CobroPro",
      resumen:
        "Solución móvil para gestionar negocios, equipos de trabajo, clientes, cobranzas y rutas mediante mapas inteligentes y sincronización en la nube.",
      imagen: prestaappro,

      imagenes: [
        prestaappro1,
        prestaappro2,
        prestaappro3,
        prestaappro4,
        prestaappro5,
        prestaappro6,
        prestaappro7,
      ],

      descripcionesImagenes: [
        {
          titulo: "Gestión diaria de cobros y clientes",
          descripcion:
            "Panel de seguimiento que permite visualizar cobros del día, cuotas atrasadas, pagos realizados y próximos vencimientos. Facilita el registro de pagos y la comunicación directa con los clientes mediante WhatsApp o llamadas telefónicas con un solo toque.",
        },
        {
          titulo: "Registro inteligente de clientes",
          descripcion:
            "Permite registrar nuevos clientes, guardar automáticamente su ubicación mediante GPS y calcular las cuotas de los préstamos según el porcentaje de interés configurado por el usuario.",
        },
        {
          titulo: "Administración e historial financiero de clientes",
          descripcion:
            "Consulta y actualización de datos personales, teléfonos y direcciones, junto con el historial de préstamos y movimientos financieros de cada cliente. Incluye captura de ubicación mediante GPS.",
        },
        {
          titulo: "Administración y seguimiento de trabajadores",
          descripcion:
            "Permite gestionar trabajadores, activar o desactivar cuentas, establecer comunicación directa y consultar estadísticas individuales de clientes, préstamos y productividad.",
        },
        {
          titulo: "Dashboard y control financiero del negocio",
          descripcion:
            "Panel administrativo con información sobre caja disponible, ingresos, gastos y comportamiento general del negocio. Presenta indicadores de clientes al día, atrasados y pendientes de cobro.",
        },
        {
          titulo: "Análisis de préstamos y recaudos",
          descripcion:
            "Visualización gráfica del comportamiento financiero durante los últimos siete días, incluyendo valores de préstamos realizados y recaudos obtenidos para facilitar el seguimiento del negocio.",
        },
        {
          titulo: "Gestión y planificación de rutas de cobro",
          descripcion:
            "Mapa interactivo con la ubicación de los clientes y sus respectivos estados de pago. Permite filtrar clientes por cobros del día, atrasados, pendientes de inicio y todos, facilitando la planificación de recorridos y visitas de cobranza.",
        },
      ],

      descripcion:
        "Aplicación móvil profesional para la gestión y administración de negocios desarrollada en Flutter. Permite controlar clientes, operaciones financieras, pagos, facturación, caja, gastos y equipos de trabajo. Incluye mapas inteligentes, rutas de gestión, estadísticas avanzadas, sincronización en la nube y herramientas diseñadas para optimizar los procesos diarios de una empresa.",
      testimonio: {
        titulo: "Opinión del cliente",
        estrellas: 5,
        comentario:
          "Desde que usamos la aplicación hemos podido organizar mucho mejor nuestro trabajo diario. Es rápida y práctica, ya no tenemos que perder tiempo buscando información porque todo está en un solo lugar. La función del mapa nos ayuda a encontrar clientes fácilmente y optimizar las rutas, permitiéndonos aprovechar mejor el tiempo durante las jornadas de trabajo.",
        autor: "Cliente de CobroPro",
      },

      videoDemo: "/videos/cobroprovideo.mp4",

      problemaSolucion: {
        problema:
          "Administrar rifas mediante listas en papel o registros manuales puede dificultar el control de números, encargos y participantes. También hace más complicado consultar información anterior y mantener los registros organizados.",

        solucion:
          "SorteaPro permite gestionar rifas desde una aplicación móvil, facilitando la asignación de números aleatorios o personalizados, el registro de encargos, la consulta de números disponibles y la generación de documentos PDF.",

        beneficio:
          "Centraliza la información, agiliza la administración de las rifas y facilita el seguimiento de los registros, incluso sin conexión a internet.",
      },

      funcionalidades: [
        // Autenticación y usuarios
        "Registro e inicio de sesión de usuarios",
        "Recuperación de contraseña mediante correo electrónico",
        "Envío de credenciales y claves de acceso para nuevos trabajadores",
        "Protección mediante PIN y huella biométrica",
        "Gestión de trabajadores desde el administrador",
        "Activación y desactivación de cuentas con bloqueo de acceso",

        // Integración de servicios externos
        "Integración con API de Brevo para envío automático de correos electrónicos",
        "Envío de correos de recuperación de contraseña y notificaciones de acceso",
        "Integración con Google Maps API para visualización y gestión de ubicaciones",
        "Integración con API de geocodificación para convertir direcciones en coordenadas",
        "Ubicación automática de clientes mediante dirección ingresada o GPS del dispositivo",

        // Clientes y operaciones
        "Registro y administración de clientes",
        "Asignación y transferencia de clientes entre trabajadores",
        "Registro de préstamos y pagos",
        "Consulta del historial financiero de clientes",
        "Generación de facturas digitales",
        "Control de caja, ingresos y gastos",

        // Mapas y rutas
        "Mapa personalizado para cada trabajador con sus clientes asignados",
        "Generación de rutas de cobro",
        "Filtros por estado de cliente: al día, atrasados, próximos vencimientos y todos",
        "Marcadores de colores para identificar rápidamente el estado de cada cliente",
        "Acceso a la información del cliente desde el mapa",

        // Comunicación
        "Envío de mensajes por WhatsApp con un solo toque",
        "Llamadas rápidas a clientes y trabajadores",

        // Estadísticas
        "Dashboard administrativo con estadísticas del negocio",
        "Ranking de trabajadores con reinicio semanal automático",
        "Seguimiento de productividad por trabajador",
        "Consulta de clientes, préstamos, cobros y gastos realizados",
        "Backend desarrollado con Flask",
        "API REST propia para comunicación entre aplicación y servidor",
        "Despliegue del servidor en Railway",
        "Gestión de información mediante MySQL",
      ],

      tecnologias: [
        { nombre: "Flutter", icono: "/icons/flutter.svg" },
        { nombre: "Dart", icono: "/icons/logos--dart.svg" },
        { nombre: "Python", icono: "/icons/python.svg" },
        { nombre: "MySQL", icono: "/icons/mysql.svg" },
        { nombre: "REST APIs", icono: "/icons/api.png" },
        { nombre: "Google Maps API", icono: "/icons/mapa.png" },
        { nombre: "Geocoding API", icono: "/icons/pin-seguridad.png" },
        { nombre: "Brevo API", icono: "/icons/enviar.png" },
        { nombre: "Railway", icono: "/icons/railways.svg" },
      ],
    },

    {
      id: 3,
      tipo: "movil",
      nombre: "SorteaPro",
      resumen:
        "Aplicación móvil para administrar rifas, generar números personalizados, controlar encargos y gestionar deudores.",
      imagen: logoboletazo,

      imagenes: [
        boletazo7,
        boletazo1,
        boletazo8,
        boletazo3,
        boletazo5,
        boletazo4,
        boletazo2,
      ],

      descripcionesImagenes: [
        {
          titulo: "Inicio de sesión y autenticación",
          descripcion:
            "Acceso mediante correo electrónico y contraseña, con autenticación de usuarios a través de Firebase. Incluye registro de nuevas cuentas y recuperación de contraseña por correo electrónico. La conexión a internet es necesaria para estas funciones de autenticación.",
        },
        {
          titulo: "Generación de boletas",
          descripcion:
            "Generación automática de números de 2, 3 y 4 cifras para la administración de rifas.",
        },
        {
          titulo: "Números personalizados",
          descripcion:
            "Creación de números personalizados para adaptarse a las necesidades de cada sorteo.",
        },
        {
          titulo: "Diseño de boletas",
          descripcion:
            "Personalización de los diseños de las boletas para presentar la información de cada rifa.",
        },
        {
          titulo: "Gestión de deudores y abonos",
          descripcion:
            "Registro de personas con pagos pendientes y seguimiento de los abonos realizados.",
        },
        {
          titulo: "Administración de encargos",
          descripcion:
            "Control de números encargados y seguimiento de las entregas pendientes.",
        },
        {
          titulo: "Historial de números",
          descripcion:
            "Consulta y explora los registros anteriores mediante tarjetas que muestran el número, la lotería, el valor y la fecha de cada jugada.",
        },
      ],

      descripcion:
        "SorteaPro es una aplicación móvil desarrollada para la gestión de rifas y boletas. Permite generar números automáticos o personalizados, administrar deudores y encargos, generar PDFs, consultar historiales y trabajar sin conexión a internet. Además, incorpora autenticación, PIN y huella digital para brindar mayor seguridad.",

      videoDemo: "/videos/sorteapro.mp4",

      problemaSolucion: {
        problema:
          "La administración de rifas se realizaba mediante listas y registros en papel. La creación manual de números requería mucho tiempo y las hojas podían perderse, dificultando el control de los números asignados, los encargos y las personas que tenían pagos pendientes.",

        solucion:
          "Se desarrolló SorteaPro, una aplicación móvil que automatiza la generación de números y permite personalizar las boletas, organizar las rifas, registrar encargos y llevar un control de deudores y abonos. También incorpora almacenamiento local para consultar la información sin conexión a internet.",

        beneficio:
          "Reduce el tiempo dedicado a crear y organizar las boletas, centraliza los registros en un solo lugar y facilita el seguimiento de números, encargos y pagos pendientes. Además, permite consultar la información sin depender de documentos físicos.",
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
      <div className={`encabezado-proyectos ${visible ? "show" : ""}`}>
        <span className="proyectos-etiqueta">MI TRABAJO</span>

        <h2 className="titulo_proyect">
          Proyectos <span>destacados.</span>
        </h2>

        <p className="descripcion-proyectos">
          Ideas convertidas en soluciones digitales funcionales, intuitivas y
          eficientes.
        </p>
      </div>
      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className={`project-preview ${visible ? "show" : ""} ${
              proyectoActivo?.id === proyecto.id ? "active" : ""
            }`}
            style={{ transitionDelay: `${proyecto.id * 0.15}s` }}
          >
            <div className="project-image">
              <img src={proyecto.imagen} alt={proyecto.nombre} />

              <span className="project-tag">
                {proyecto.tipo === "web"
                  ? "Aplicación Web"
                  : "Aplicación Móvil"}
              </span>
            </div>

            <div className="project-card-info">
              <h3>{proyecto.nombre}</h3>

              <p>{proyecto.resumen}</p>

              <div className="project-card-tech">
                {proyecto.tecnologias.slice(0, 4).map((tech, index) => (
                  <span key={index}>{tech.nombre}</span>
                ))}
                {proyecto.tecnologias.length > 4 && (
                  <span>+{proyecto.tecnologias.length - 4}</span>
                )}
              </div>

              <button
                className="btn-ver-proyecto"
                onClick={() => {
                  setIndexImagen(0);

                  const nuevoProyecto =
                    proyectoActivo?.id === proyecto.id ? null : proyecto;

                  setProyectoActivo(nuevoProyecto);
                  setDetalleVisible(false);

                  if (nuevoProyecto) {
                    setTimeout(() => {
                      setDetalleVisible(true);

                      detalleRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 120);
                  }
                }}
              >
                {proyectoActivo?.id === proyecto.id
                  ? "Cerrar proyecto"
                  : "Ver proyecto"}
                <span> →</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {proyectoActivo && (
        <div
          key={proyectoActivo.id}
          className={`project-detail ${detalleVisible ? "show" : ""}`}
          ref={detalleRef}
        >
          {videoAbierto &&
            videoActivo &&
            createPortal(
              <div
                className="video-modal"
                onClick={() => setVideoAbierto(false)}
              >
                <button
                  className="video-close"
                  onClick={() => setVideoAbierto(false)}
                  aria-label="Cerrar video"
                >
                  ×
                </button>

                <div
                  className="video-container"
                  onClick={(e) => e.stopPropagation()}
                >
                  <video
                    key={videoActivo}
                    src={videoActivo}
                    controls
                    autoPlay
                    playsInline
                  >
                    Tu navegador no admite la reproducción de videos.
                  </video>
                </div>
              </div>,
              document.body
            )}

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

              <div className="project-actions">
                {proyectoActivo.videoDemo && (
                  <button
                    className="btn-demo"
                    onClick={() => {
                      setVideoActivo(proyectoActivo.videoDemo);
                      setVideoAbierto(true);
                    }}
                  >
                    ▶ Ver demostración
                  </button>
                )}

                {proyectoActivo.repositorio && (
                  <a
                    href={proyectoActivo.repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-repositorio"
                  >
                    <span>⌘</span> Ver repositorio
                  </a>
                )}
              </div>
              {/* DERECHA (CARRUSEL) */}
              <div
                ref={carouselRef}
                className={`project-carousel ${carouselVisible ? "show" : ""}`}
              >
                <div className="modern-project-gallery">
                  {/* ENCABEZADO */}
                  <div className="modern-gallery-heading">
                    <div>
                      <span>PORTAFOLIO VISUAL</span>
                      <h3>Explora sus pantallas</h3>
                      <p>Selecciona una imagen para conocer más detalles.</p>
                    </div>

                    <span className="gallery-total">
                      {proyectoActivo.imagenes.length} pantallas
                    </span>
                  </div>

                  {/* GALERÍA ASIMÉTRICA */}
                  <div
                    className={`modern-gallery-grid gallery-${proyectoActivo.tipo}`}
                  >
                    {proyectoActivo.imagenes.map((img, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`modern-gallery-item gallery-position-${
                          index + 1
                        }`}
                        style={{
                          animationDelay: `${0.15 + index * 0.15}s`,
                        }}
                        onClick={() => {
                          setIndexImagen(index);
                          setVisorAbierto(true);
                        }}
                        aria-label={`Ver pantalla ${index + 1}`}
                      >
                        <div className="gallery-image-wrapper">
                          <img
                            src={img}
                            alt={`${proyectoActivo.nombre} - Pantalla ${
                              index + 1
                            }`}
                          />

                          <div className="gallery-image-overlay">
                            <span>VER PANTALLA ↗</span>
                          </div>
                        </div>

                        <div className="gallery-item-info">
                          <span>{String(index + 1).padStart(2, "0")}</span>

                          <p>
                            {proyectoActivo.descripcionesImagenes?.[index]
                              ?.titulo || `Pantalla ${index + 1}`}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {visorAbierto &&
                    createPortal(
                      <div
                        className="gallery-lightbox"
                        onClick={() => setVisorAbierto(false)}
                      >
                        <button
                          type="button"
                          className="lightbox-close"
                          onClick={() => setVisorAbierto(false)}
                          aria-label="Cerrar visor"
                        >
                          ×
                        </button>

                        <button
                          type="button"
                          className="lightbox-arrow lightbox-prev"
                          onClick={(e) => {
                            e.stopPropagation();

                            setIndexImagen(
                              (prev) =>
                                (prev - 1 + proyectoActivo.imagenes.length) %
                                proyectoActivo.imagenes.length
                            );
                          }}
                          aria-label="Imagen anterior"
                        >
                          ‹
                        </button>

                        <div
                          className="lightbox-content"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="lightbox-image-container">
                            <img
                              src={proyectoActivo.imagenes[indexImagen]}
                              alt={`${proyectoActivo.nombre} - Pantalla ${
                                indexImagen + 1
                              }`}
                            />
                          </div>

                          <div className="lightbox-description">
                            <span className="lightbox-label">
                              VISTA DEL PROYECTO
                            </span>

                            <h3>
                              {proyectoActivo.descripcionesImagenes?.[
                                indexImagen
                              ]?.titulo || `Pantalla ${indexImagen + 1}`}
                            </h3>

                            <p>
                              {proyectoActivo.descripcionesImagenes?.[
                                indexImagen
                              ]?.descripcion ||
                                `Vista de ${proyectoActivo.nombre}. Esta pantalla forma parte de las funcionalidades de la aplicación.`}
                            </p>

                            <span className="lightbox-counter">
                              {String(indexImagen + 1).padStart(2, "0")} /{" "}
                              {String(proyectoActivo.imagenes.length).padStart(
                                2,
                                "0"
                              )}
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="lightbox-arrow lightbox-next"
                          onClick={(e) => {
                            e.stopPropagation();

                            setIndexImagen(
                              (prev) =>
                                (prev + 1) % proyectoActivo.imagenes.length
                            );
                          }}
                          aria-label="Imagen siguiente"
                        >
                          ›
                        </button>
                      </div>,

                      document.body
                    )}
                </div>
              </div>
            </div>

            {proyectoActivo.problemaSolucion && (
              <section
                ref={testimonialRef}
                className={`problem-solution ${
                  testimonialVisible ? "show" : ""
                }`}
              >
                <div className="problem-header">
                  <span className="section-subtitle">
                    EL VALOR DEL PROYECTO
                  </span>
                  <h3>Problema y solución</h3>
                  <p>
                    Una solución tecnológica diseñada para responder a
                    necesidades reales.
                  </p>
                </div>

                <div className="problem-grid">
                  <article className="problem-card">
                    <div className="problem-icon">⚠</div>
                    <h4>El problema</h4>
                    <p>{proyectoActivo.problemaSolucion.problema}</p>
                  </article>

                  <article className="problem-card">
                    <div className="problem-icon">💡</div>
                    <h4>La solución</h4>
                    <p>{proyectoActivo.problemaSolucion.solucion}</p>
                  </article>

                  <article className="problem-card">
                    <div className="problem-icon">✓</div>
                    <h4>El valor que aporta</h4>
                    <p>{proyectoActivo.problemaSolucion.beneficio}</p>
                  </article>
                </div>
              </section>
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
                  className={`tech-pill ${techVisible ? "show" : ""}`}
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
