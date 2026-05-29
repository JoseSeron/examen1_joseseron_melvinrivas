import React from 'react'
import './destacado.css'
import demon_slayer from '../demon_slayer.gif';

const Destacado = () => {
  return (
    <div className="destacado-container">
      <img src={demon_slayer} className="App-demon_slayer" alt="demon_slayer" />

      <div className="banner-content">
        <h1>Demon Slayer</h1>

        <p>
          Tanjiro Kamado se une al Cuerpo de Exterminio de Demonios
          para salvar a su hermana y vengar a su familia.
        </p>

        <div className="banner-buttons">
          <button className="play-btn">▶ Reproducir</button>
          <button className="info-btn">ℹ Más información</button>
        </div>
      </div>
    </div>
  )
}

export default Destacado