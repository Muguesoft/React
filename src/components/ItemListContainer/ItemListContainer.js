import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemListContainer = () => {
    const [foto, setFotos] = useState([]);
    const [cargando, setCargando] = useState(true);
    
    const {estilodesc} = useParams();
    
    useEffect( () => {
    
        setCargando(true)
        
        const collectionRef = estilodesc
            ? query(collection(db, 'Fotos'), where('categoria','==',estilodesc))
            : collection(db, 'Fotos')
        
        getDocs(collectionRef)
            .then(response => {
                const fotosAdaptadas = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setFotos(fotosAdaptadas)
            })
                
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setCargando(false)
            })
    },[estilodesc])

    if (cargando) {
        return (
            <div>
                <h3 className="cargando">Cargando...</h3>
            </div>
        )
    }

    return (
        <div>
            <ItemList fotos={foto}/>
        </div>
    )
};

export default ItemListContainer;