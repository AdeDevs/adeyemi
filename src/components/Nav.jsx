import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavPage() {
    const [menuActive, isMenuActive] = useState(false)
    
    const toggleMenu = () => {
        isMenuActive(!menuActive)
    }
    return (
        <div></div>
    )
}

export default NavPage;