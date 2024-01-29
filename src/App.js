import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
      <div>
        <NavBar/>
        <ItemListContainer saludo={"Bienvenidos"}/>
      </div>
    )
  };

  export default App;