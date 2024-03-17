import ItemCounter from "../ItemCounter/ItemCounter";
import { Link } from "react-router-dom";
import "./ItemDetail.css"
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext"; 


const ItemDetail = ({fotos}) => {

    const {sumarImpresion} = useContext(CartContext)

    const [cantidadAgregada, setCantidadAgregada] = useState(0);

    const handleCantidad = (cantidad) => {
        setCantidadAgregada(cantidad);

        sumarImpresion(fotos, cantidad)
    }

    return (
        <article className="itemdetail">
            <p className="itemdetail_tit">{fotos.categoria}: {fotos.nombre}</p>
            <p className="itemdetail_subtit">{fotos.descripcion}</p>
            <img className="itemdetail_imagen" src={fotos.img} alt={fotos.nombre}/>
            <div className="itemdetail_tam_prec">
                <p>Tamaño Impresión: {fotos.impresion}</p>
                <p>Precio: ${fotos.precio}</p>
            </div>
            <div className="contador_y_volver">
                {
                    cantidadAgregada > 0 ? (
                        <Link to={`/carrito`} className="boton">Terminar Selección</Link>
                     ) : (
                        <ItemCounter seleccionadas={1} agregar={handleCantidad}></ItemCounter>        
                        )
                }
                
                <Link to={`/`} className="boton">Continuar Selección</Link>
            </div>
        </article>
    )
}


export default ItemDetail;
