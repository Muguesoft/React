import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartIetm/CartItem";
import "./Cart.css"
import { Link } from "react-router-dom";

const Cart = () => {
    const {carrito, totalFotos, montoTotal, resetCarrito} = useContext(CartContext);
    const totalPesos = montoTotal()
    const cantFotosTotal = totalFotos()

    const handleLimpiar = () => {
        resetCarrito()
    }

    if (cantFotosTotal === 0) {
        return (
            <div className="vacio_link">
                <h3 className="titulo_carrito_vacio">CARRITO DE IMPRESION VACIO</h3>
                <Link to = '/' className="boton_link">Ver Fotos</Link>
            </div>
        )
    }
    return (
        <div>
            <h3 className="titulo_carrito">CARRITO DE IMPRESION</h3>
            <div className="total_carrito">
                <p className="texto_total_fotos">Cantidad de Fotos a Imprimir: {cantFotosTotal} - Monto Total: ${totalPesos}</p>
                <div>
                    <button className="boton" onClick={handleLimpiar}>Limpiar Carrito</button>
                    <Link to = '/checkout' className="boton_link">Checkout</Link>
                </div>
            </div>
            <div className="contenedor_fotos">
                {carrito.map(fotos => <CartItem id={fotos.id} nombre={fotos.nombre} img={fotos.img} descripcion = {fotos.descripcion} tamanio={fotos.impresion} precio={fotos.precio} cantidad={fotos.cantidad} categoria={fotos.categoria}/>)}
            </div>
        </div>
    )
};


export default Cart;