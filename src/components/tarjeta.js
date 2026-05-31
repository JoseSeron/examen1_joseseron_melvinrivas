import React from 'react'
import "./tarjeta.css";

const Tarjeta = ({ pelicula }) => {
  return (
    <div className="tarjeta">
      <img
        src={pelicula.imagen}
        alt={pelicula.nombre}
        className="poster"
      />

      <div className="tarjeta-hover">
        <h4>{pelicula.nombre}</h4>

        <div className="botones">
          <button>▶</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;