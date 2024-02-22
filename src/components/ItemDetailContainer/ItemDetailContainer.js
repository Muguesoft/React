import { useState } from "react";
import { devuelveFotoPorId } from "../../fotos";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [foto, setFoto] = useState([]);

    const {fotoId} = useParams()

    useEffect( () => {
        devuelveFotoPorId(fotoId)
            .then(response => {
                setFoto(response)
            })
            .catch(error => {
                console.log(error)
            })
    },[fotoId])

    return (
        <div className="item_detail_container">
            <ItemDetail fotos={foto}/>
        </div>
    )
}

export default ItemDetailContainer;