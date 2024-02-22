import { useState } from "react";
import "./ItemCounter.css"


function ItemCounter({seleccionadas, agregar}) {

    const [cantidad , setCantidad] = useState(seleccionadas);

    function incrementar() {
        setCantidad(cantidad + 1);
    }

    function decrementar(){
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }

    function handleAgregar() {
        if (cantidad > 0) {
            agregar(cantidad);
        }
    }

    return (
        <div className="contador">
            <div className="botones_y_cant">
                <button className="boton_mas_menos" onClick={decrementar}>-</button>
                <p className="texto_cantidad">{cantidad}</p>
                <button className="boton_mas_menos" onClick={incrementar}>+</button>
            </div>
            <div>
                <button className="boton_agregar_cart" onClick={handleAgregar}>Agregar</button>
            </div>
        </div>
        
    )
}

export default ItemCounter;