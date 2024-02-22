import NavBrand from "./NavBrand";
//import NavItem from "./NavItem";
import Cart from "../cart/Cart";
import { NavLink } from "react-router-dom";



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-fondo">
            <div className="container-fluid">
                <NavBrand/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavLink to={`/estilo/Retratos`} className="nav-link p-3 item-menu-a">RETRATOS</NavLink>
                        <NavLink to={`estilo/Paisajes`} className="nav-link p-3 item-menu-a">PAISAJES</NavLink>
                        <NavLink to={`estilo/Abstractas`} className="nav-link p-3 item-menu-a">ABSTRACTAS</NavLink>
                        <Cart/>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;
/*
<NavItem desc={"ABSTRACTAS"}/>
<NavItem desc={"RETRATOS"}/>
*/