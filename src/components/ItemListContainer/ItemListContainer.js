import { devuelveFotos, devuelveFotosPorEstilo } from "../../fotos";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [foto, setFotos] = useState([]);
    
    const {estilodesc} = useParams();
    
    useEffect( () => {
        const asyncFunc = estilodesc ? devuelveFotosPorEstilo : devuelveFotos

        asyncFunc(estilodesc)
            .then(response => {
                setFotos(response)
            })
            .catch(error => {
                console.log(error)
            })
    },[estilodesc])

    return (
        <div>
            <ItemList fotos={foto}/>
        </div>
    )
};

export default ItemListContainer;