import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemDetailContainer = () => {
    const [foto, setFoto] = useState([]);
    const [cargando, setCargando] = useState(true);

    const {fotoId} = useParams()

    useEffect( () => {

        setCargando(true)

        const fotoRef = doc(db, 'Fotos', fotoId)

        getDoc(fotoRef)
            .then(response => {
                const data = response.data()
                const fotoAdaptada = {id: response.id, ...data}
                setFoto(fotoAdaptada)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setCargando(false)
            })
    },[fotoId])

    if (cargando) {
        return (
            <div>
                <h3 className="cargando">Cargando...</h3>
            </div>
        )
    }

    return (
        <div className="item_detail_container">
            <ItemDetail fotos={foto}/>
        </div>
    )
}

export default ItemDetailContainer;