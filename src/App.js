import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

    return (
      <div>
        <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path="/" element = {<ItemListContainer/> }/>
              <Route path="/estilo/:estilodesc" element = {<ItemListContainer/> }/>
              <Route path="/foto/:fotoId" element = {<ItemDetailContainer /> }/>
              <Route path="*" element = {<h1>ERROR 404 - NO ENCONTRADO</h1> }/>
          </Routes>
        </BrowserRouter>
        
      </div>
    )
  };

  export default App;