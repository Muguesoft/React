import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartItem = ({id, nombre, img, descripcion, tamanio, precio, cantidad, categoria}) => {
    const {borrarImpresiones} = useContext(CartContext);

    const handleBorrarImpresiones = () => {
        borrarImpresiones(id)
    }

    return(
        <div className="item">
            <p className="titulo">{categoria}: {nombre}</p>
            <p className="subtitulo">{descripcion}</p>
            <img className="imagen" src={img} alt={nombre}/>
            <div className="precioboton">
                <p>Tamaño: {tamanio}</p>
                <p>Precio: ${precio}</p>
            </div>
            <div className="precioboton">
                <p>Cantidad: {cantidad}</p>
                <p>TOTAL: ${cantidad * precio}</p>
            </div>
            <button className="boton" onClick={handleBorrarImpresiones}>Eliminar</button>
        </div>
    )
}

export default CartItem;