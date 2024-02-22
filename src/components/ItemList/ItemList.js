import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({fotos}) => {
    const renderedImages = fotos.map((foto)=>{
        return <Item id={foto.id} nombre={foto.nombre} categoria={foto.categoria} img={foto.img} precio={foto.precio} />
    })

    return (
        <div className="contenedor_fotos">{renderedImages}</div>
    )
}

export default ItemList;