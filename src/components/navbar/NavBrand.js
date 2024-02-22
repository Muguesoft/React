import LogoImg from "../../img/logo_fotografia.png";
import "./NavBrand.css"

const NavBrand = () =>{
    return (
        <a className="navbar-brand cristian-mouguelar" href="..">
          <img src={LogoImg} alt="logo_fotografia" width="79px" height="69px" className="logo_navbrand"></img>
          Cristian Mouguelar Fotografías
        </a>
    )

};

export default NavBrand;