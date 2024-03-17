import CartImg from "../../img/carrito2.png"
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const {totalFotos} = useContext(CartContext);
    const cantTotal = totalFotos()

    return (
        <div className="navbar-brand">
            <Link to="/carrito" style={{display: cantTotal > 0 ? 'block' : 'none'}}>
                <img src={CartImg} alt="logo_fotografia" width="28px" height="28px"></img>
                <span id="contador-carrito">{cantTotal}</span>
            </Link> 
        </div>
    )

}

export default CartWidget;