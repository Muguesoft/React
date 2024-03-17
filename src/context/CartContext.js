import { createContext, useState } from "react";

export const CartContext = createContext({
    carrito: []
})

export const CarritoProveedor = ( {children} ) => {
    const [carrito, setCarrito] = useState([]);

    console.log(carrito)

    const sumarImpresion = (foto, cantidad) => {
        if (!estaEnCarrito(foto.id)) {
            // Se suman la cantidad de impresiones que el
            // usuario quiera sin limitaciones.
            setCarrito(prevCarrito => [...prevCarrito, {...foto,cantidad}]);    
        } else {
            // Incrementa la cantidad de la foto en el carrito
            setCarrito(prevCarrito => prevCarrito.map(item => 
                item.id === foto.id ? {...item, cantidad: item.cantidad + cantidad} : item
            ));
        }
        
    }

    const borrarImpresiones = (id) => {
        const carritoFiltrado = carrito.filter(cart => cart.id !== id)
        setCarrito(carritoFiltrado)
    }

    const resetCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (fotoId) => {
        return carrito.some(foto => foto.id === fotoId)
    }


    const totalFotos = () => {
        let sumWithInitial = 0;
        sumWithInitial = carrito.reduce((total, foto) => total + foto.cantidad, 0);
        return sumWithInitial;
    }

    const montoTotal = () => {
        let sumWithInitial = 0;
        sumWithInitial = carrito.reduce((total, foto) => total + (foto.cantidad * foto.precio), 0);
        return sumWithInitial;
    }

    return (
        <CartContext.Provider value={{carrito, sumarImpresion, borrarImpresiones, resetCarrito, totalFotos, montoTotal}}>
            {children}
        </CartContext.Provider>
        
    )
}