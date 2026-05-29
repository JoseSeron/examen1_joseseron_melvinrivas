import React from 'react'
import './navbar.css'
import logo from '../logo.png'
import lupa2 from '../lupa2.png'
import campana from '../campana.png'
import usuario from '../usuario.png'
const Navbar = () => {

    /*stateChange para el scroll*/
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

    /*state changed para menu hamburguesa1*/
    const [menuOpen, setMenuOpen] = React.useState(false);
    const menuRef = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            const menu = menuRef.current;

            if (!menu) return;

            const isClickInsideMenu = menu.contains(event.target);
            const isClickOnButton = event.target.closest(".explorar-btn");

            if (!isClickInsideMenu && !isClickOnButton) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (

        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

            <div
                ref={menuRef}
                className={`menu-hamburguesa-explorar ${menuOpen ? "open" : ""}`}>

                <button className="btn-menu-exp">Inicio</button>
                <button className="btn-menu-exp">Series</button>
                <button className="btn-menu-exp">Películas</button>
                <button className="btn-menu-exp">Juegos</button>
                <button className="btn-menu-exp">Mi Lista</button>

            </div>


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
                <button
                    className="explorar-btn"
                    onClick={(e) => {

                        setMenuOpen(prev => !prev);
                    }}
                >
                    ☰ Explorar
                </button>
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
