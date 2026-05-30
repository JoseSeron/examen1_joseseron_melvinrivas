import { useRef } from "react";
import "./Fila.css";

const Fila = ({ titulo, peliculas }) => {
  const filaRef = useRef(null);

const moverDerecha = () => {
  const fila = filaRef.current;
  const maxScroll = fila.scrollWidth - fila.clientWidth;

  if (fila.scrollLeft >= maxScroll - 10) {
    fila.scrollLeft = 0;
  } else {
    fila.scrollLeft += 1170;
  }
};

const moverIzquierda = () => {
  const fila = filaRef.current;
  const maxScroll = fila.scrollWidth - fila.clientWidth;

  if (fila.scrollLeft <= 10) {
    fila.scrollLeft = maxScroll;
  } else {
    fila.scrollLeft -= 1170;
  }
};

  return (
    <div className="fila">
      <h2 className="titulo-fila">{titulo}</h2>

      <button className="flecha izquierda" onClick={moverIzquierda}>
        ◀
      </button>

      <div className="fila-posters" ref={filaRef}>
        {peliculas.map((pelicula) => (
          <img
            key={pelicula.id}
            src={pelicula.imagen}
            alt={pelicula.nombre}
            className="poster"
          />
        ))}
      </div>

      <button className="flecha derecha" onClick={moverDerecha}>
        ▶
      </button>
    </div>
  );
};

export default Fila;