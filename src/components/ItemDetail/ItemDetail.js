import ItemCounter from "../ItemCounter/ItemCounter";
import { Link } from "react-router-dom";
import "./ItemDetail.css"

const ItemDetail = ({fotos}) => {
    const handleCantidad = (cantidad) => {
    alert('Cantidad agregada'+cantidad)
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
                <ItemCounter seleccionadas={1} agregar={handleCantidad}></ItemCounter>
                <Link to={`/`} className="boton">Volver</Link>
            </div>
        </article>
    )
}

export default ItemDetail;
