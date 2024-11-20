import { NavLink } from "react-router-dom";
import { useState } from "react";
function HomePage() {
    const [menuActive, isMenuActive] = useState(false)
    
    const toggleMenu = () => {
        isMenuActive(!menuActive)
    }
    return (
        <div className="home">
        <div className="navigation">
            <nav>
                <NavLink to="/"> <h1>AdeDevs</h1> </NavLink>
                <ul className="desk-menu">
                    <NavLink to="/about"> <li>about</li> </NavLink>
                    <NavLink to="/projects"> <li>projects</li> </NavLink>
                    <NavLink to="/contact"> <li>contact</li> </NavLink>
                </ul>
                <span className="toggle-menu" onClick={toggleMenu}>
                  <ion-icon name="menu-outline" />
                </span>
                
                <div className={`overlay ${menuActive ? 'show' : ""}`} onClick={toggleMenu}></div>
                <ul className={`hamburger-menu ${menuActive ? 'show' : ""}`}>
                    <span className="toggle-menu">
                      <ion-icon name="close-outline" onClick={toggleMenu} />
                    </span>
                    <li >about</li>
                    <li >projects</li>
                    <li >contact</li>
                </ul>
            </nav>
        </div>
            <div className="home-nav">

            </div>
            <h1>homuu</h1>
            <p>ile</p>
            <footer>
                <h1>01</h1>
            </footer>
        </div>
    )
}

export default HomePage;