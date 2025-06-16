import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavPage() {
    const [menuActive, isMenuActive] = useState(false)
    
    const toggleMenu = () => {
        isMenuActive(!menuActive)
    }
    return (
        <div className="navigation">
            <nav>
                <NavLink className="adedevs" to="/"> <h1>AdeDevs</h1> </NavLink>
                <ul className="desk-menu">
                    <a href="#about"> <li>about</li> </a>
                    <a href="#projects"> <li>projects</li> </a>
                    <a href="#contact"> <li>contact</li> </a>
                    <a href="resume.pdf" download={true}><li>my resume</li></a>
                </ul>
                <span className="toggle-menu" onClick={toggleMenu}>
                  <ion-icon name="menu-outline" />
                </span>
                
                <div className={`overlay ${menuActive ? 'show' : ""}`} onClick={toggleMenu}></div>
                <ul className={`hamburger-menu ${menuActive ? 'show' : ""}`}>
                    <span className="toggle-menu">
                      <ion-icon name="close-outline" onClick={toggleMenu} />
                    </span>
                    <a href="#about" onClick={toggleMenu}> <li>about</li> </a>
                    <a href="#projects" onClick={toggleMenu}> <li>projects</li> </a>
                    <a href="#contact" onClick={toggleMenu}> <li>contact</li> </a>
                    <a href="" onClick={toggleMenu}><li>my resume</li></a>
                </ul>
            </nav>
        </div>
    )
}

export default NavPage;