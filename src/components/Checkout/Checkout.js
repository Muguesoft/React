import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const Checkout = () => {
    const [cargando, setCargando] = useState(false);
    const [orderId, setOrderId] = useState("");

    const {carrito, montoTotal, resetCarrito} = useContext(CartContext);

    const createOrder = async ({nombre, telefono, email}) => {
        setCargando(true)

        try {
            const objOrder = {
                buyer: {nombre, telefono, email},
                items: carrito,
                total: montoTotal()
            }

            /////////////////////////////////////////////////////////
            // NO HAY CONTROL DE STOCK YA QUE SE PUEDEN REALIZAR N //
            // IMPRESIONES DE UNA FOTO.                            //
            /////////////////////////////////////////////////////////
            
            const orderRef = collection(db, "Ordenes");

            addDoc(orderRef, objOrder).then((doc) => {
                setOrderId(doc.id);
                resetCarrito();
            });
        }

        catch (error) {
            console.log(error)
        }

        finally {
            setCargando(false)
        }
    } 

    if (cargando) {
        return (
            <div>
                <h3 className="cargando">Generando orden...</h3>
            </div>
        )      
    }

    if (orderId) {
        return (
            <div>
                <h3 className="cargando">Su orden tiene el ID: {orderId}</h3>
            </div>
        )
    }

    return (
        <div>
            <h3 className="cargando">Checkout</h3>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout;