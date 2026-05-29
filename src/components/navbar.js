import React from 'react'
import './navbar.css'
import logo from '../logo.png'
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
                <button className="nav-btn">Home</button>
                <button className="nav-btn">Shows</button>
                <button className="nav-btn">Movies</button>
                <button className="nav-btn">Games</button>
                <button className="nav-btn">News & Popular</button>
                <button className="nav-btn">My List</button>
            </div>

            {/*derecha*/}
            <div className="nav-right">
                <button className="nav-btn">Browse by Languages</button>
            </div>
        </nav>
    )
}
export default Navbar
