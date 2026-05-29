import React from 'react'
import './navbar.css'
import logo from '../logo.png'
import lupa2 from '../lupa2.png'
import campana from '../campana.png'
import usuario from '../usuario.png'
const Navbar = () => {

    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

          

            {/*izquierda*/}
            <div className="nav-left">
                <img src={logo} alt="Logo" className="nav-logo" />
                <button className="nav-btn">Inicio</button>
                <button className="nav-btn">Series</button>
                <button className="nav-btn">Peliculas</button>
                <button className="nav-btn">Juegos</button>
                <button className="nav-btn">Novedades Populares</button>
                <button className="nav-btn">Mi Lista</button>
                <button className="nav-btn">Explorar por Idiomas</button>
            </div>

            {/*derecha*/}
            <div className="nav-right">
                <img src={lupa2} alt="lupa2" className="nav-lupa" />
                <img src={campana} alt="campana" className="nav-campana" />
                <img src={usuario} alt="usuario" className="nav-usuario" />
            </div>
        </nav>
    )
}
export default Navbar
