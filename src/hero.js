import { useEffect, useRef, useState } from "react";
import "./styles.css";

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
      <h1>Bienvenido, soy Ángela Romero Meléndez</h1>
      <h2>Desarrolladora de páginas web y aplicaciones.</h2>
    </section>
  );
}
