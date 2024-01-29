import CartImg from "../../img/carrito2.png"

const Cart = () => {
    return (
        <a className="navbar-brand" href="..">
            <img src={CartImg} alt="logo_fotografia" width="28px" height="28px"></img>
            <span id="contador-carrito">3</span> 
        </a>
    )
};

export default Cart;