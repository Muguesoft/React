import NavBrand from "./NavBrand";
import NavItem from "./NavItem";
import Cart from "../cart/Cart";



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-fondo">
            <div className="container-fluid">
                <NavBrand/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavItem hreftxt={".."} description={"RETRATOS"}/>
                        <NavItem hreftxt={".."} description={"PAISAJES"}/>
                        <NavItem hreftxt={".."} description={"ABSTRACTAS"}/>
                        <Cart/>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;