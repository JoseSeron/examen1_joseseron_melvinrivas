import demon_slayer from './demon_slayer.gif';
import './App.css';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App" >
      <Navbar />
      <header className="App-header">
        <img src={demon_slayer} className="App-demon_slayer" alt="demon_slayer" />
      
        <h1>Demon Slayer</h1>

        <p>
          Tanjiro Kamado se une al Cuerpo de Exterminio de Demonios
          para salvar a su hermana y vengar a su familia.
        </p>

        <div className="banner-buttons">
          <button className="play-btn">▶ Reproducir</button>
          <button className="info-btn">ℹ Más información</button>
          
        </div>
        </header>
      </div>
  );
}

export default App;
