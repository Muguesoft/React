import NavBrand from "./NavBrand";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";



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
                        <NavLink to={`estilo/Productos`} className="nav-link p-3 item-menu-a">PRODUCTOS</NavLink>
                        <CartWidget/>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;