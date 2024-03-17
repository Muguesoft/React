import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CarritoProveedor } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Checkout from "./components/Checkout/Checkout";


function App() {

    return (
      <div>
        <BrowserRouter>
          <CarritoProveedor>
            <NavBar/>
            <Routes>
                <Route path="/" element = {<ItemListContainer/> }/>
                <Route path="/estilo/:estilodesc" element = {<ItemListContainer/> }/>
                <Route path="/foto/:fotoId" element = {<ItemDetailContainer /> }/>
                <Route path="/carrito" element = {<Cart/>}/>
                <Route path="/checkout" element = {<Checkout/>}/>
                <Route path="*" element = {<h1>ERROR 404 - NO ENCONTRADO</h1> }/>
            </Routes>
          </CarritoProveedor>
        </BrowserRouter>
        
      </div>
    )
  };

export default App;