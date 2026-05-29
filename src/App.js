
import './App.css';
import Navbar from './components/navbar';
import Destacado from './components/destacado';
import Fila from './components/Fila';

const tendencias = [
  {
    id: 1,
    nombre: "Serie 1",
    imagen: ""
  },
  {
    id: 2,
    nombre: "Serie 2",
    imagen: ""
  },
  {
    id: 3,
    nombre: "Serie 3",
    imagen: ""
  },
  {
    id: 4,
    nombre: "Serie 4",
    imagen: ""
  },
  {
    id: 5,
    nombre: "Serie 5",
    imagen: ""
  },
  {
    id: 6,
    nombre: "Serie 6",
    imagen: ""
  },
  {
    id: 7,
    nombre: "Serie 7",
    imagen: ""
  },
  {
    id: 8,
    nombre: "Serie 8",
    imagen: ""
  },
  {
    id: 9,
    nombre: "Serie 9",
    imagen: ""
  },
  {
    id: 10,
    nombre: "Serie 10",
    imagen: ""
  },
  {
    id: 11,
    nombre: "Serie 11",
    imagen: ""
  },
  {
    id: 12,
    nombre: "Serie 12",
    imagen: ""
  },
  {
    id: 13,
    nombre: "Serie 13",
    imagen: ""
  },
  {
    id: 14,
    nombre: "Serie 14",
    imagen: ""
  },
  {
    id: 15,
    nombre: "Serie 15",
    imagen: ""
  }
];

const Romance = [
  {
    id: 1,
    nombre: "Serie 1",
    imagen: ""
  },
  {
    id: 2,
    nombre: "Serie 2",
    imagen: ""
  },
  {
    id: 3,
    nombre: "Serie 3",
    imagen: ""
  },
  {
    id: 4,
    nombre: "Serie 4",
    imagen: ""
  },
  {
    id: 5,
    nombre: "Serie 5",
    imagen: ""
  },
  {
    id: 6,
    nombre: "Serie 6",
    imagen: ""
  },
  {
    id: 7,
    nombre: "Serie 7",
    imagen: ""
  },
  {
    id: 8,
    nombre: "Serie 8",
    imagen: ""
  },
  {
    id: 9,
    nombre: "Serie 9",
    imagen: ""
  },
  {
    id: 10,
    nombre: "Serie 10",
    imagen: ""
  },
  {
    id: 11,
    nombre: "Serie 11",
    imagen: ""
  },
  {
    id: 12,
    nombre: "Serie 12",
    imagen: ""
  },
  {
    id: 13,
    nombre: "Serie 13",
    imagen: ""
  },
  {
    id: 14,
    nombre: "Serie 14",
    imagen: ""
  },
  {
    id: 15,
    nombre: "Serie 15",
    imagen: ""
  }
];

const Accion = [
  {
    id: 1,
    nombre: "Serie 1",
    imagen: ""
  },
  {
    id: 2,
    nombre: "Serie 2",
    imagen: ""
  },
  {
    id: 3,
    nombre: "Serie 3",
    imagen: ""
  },
  {
    id: 4,
    nombre: "Serie 4",
    imagen: ""
  },
  {
    id: 5,
    nombre: "Serie 5",
    imagen: ""
  },
  {
    id: 6,
    nombre: "Serie 6",
    imagen: ""
  },
  {
    id: 7,
    nombre: "Serie 7",
    imagen: ""
  },
  {
    id: 8,
    nombre: "Serie 8",
    imagen: ""
  },
  {
    id: 9,
    nombre: "Serie 9",
    imagen: ""
  },
  {
    id: 10,
    nombre: "Serie 10",
    imagen: ""
  },
  {
    id: 11,
    nombre: "Serie 11",
    imagen: ""
  },
  {
    id: 12,
    nombre: "Serie 12",
    imagen: ""
  },
  {
    id: 13,
    nombre: "Serie 13",
    imagen: ""
  },
  {
    id: 14,
    nombre: "Serie 14",
    imagen: ""
  },
  {
    id: 15,
    nombre: "Serie 15",
    imagen: ""
  }
];

const Anime = [
  {
    id: 1,
    nombre: "Serie 1",
    imagen: ""
  },
  {
    id: 2,
    nombre: "Serie 2",
    imagen: ""
  },
  {
    id: 3,
    nombre: "Serie 3",
    imagen: ""
  },
  {
    id: 4,
    nombre: "Serie 4",
    imagen: ""
  },
  {
    id: 5,
    nombre: "Serie 5",
    imagen: ""
  },
  {
    id: 6,
    nombre: "Serie 6",
    imagen: ""
  },
  {
    id: 7,
    nombre: "Serie 7",
    imagen: ""
  },
  {
    id: 8,
    nombre: "Serie 8",
    imagen: ""
  },
  {
    id: 9,
    nombre: "Serie 9",
    imagen: ""
  },
  {
    id: 10,
    nombre: "Serie 10",
    imagen: ""
  },
  {
    id: 11,
    nombre: "Serie 11",
    imagen: ""
  },
  {
    id: 12,
    nombre: "Serie 12",
    imagen: ""
  },
  {
    id: 13,
    nombre: "Serie 13",
    imagen: ""
  },
  {
    id: 14,
    nombre: "Serie 14",
    imagen: ""
  },
  {
    id: 15,
    nombre: "Serie 15",
    imagen: ""
  }
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Destacado />

      <Fila
        titulo="Tendencias"
        peliculas={tendencias}
      />

      <Fila
        titulo="Romance"
        peliculas={Romance}
      />

      <Fila
        titulo="Accion"
        peliculas={Accion}
      />

        <Fila
        titulo="Anime"
        peliculas={Anime}
      />
    </div>
  );
}

export default App;