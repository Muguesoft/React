import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({id, nombre, categoria, img, precio}) => {
    return(
        <section className="item">
            <p className="titulo">{categoria}: {nombre}</p>
            <img className="imagen" src={img} alt={nombre}/>
            <div className="precioboton">
                <p className="precio">Precio: ${precio}</p>
                <Link to={`/foto/${id}`} className="boton">Imprimir</Link>
            </div>
        </section>
    )
}

export default Item;