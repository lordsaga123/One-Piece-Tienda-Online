import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {


  return (
      <>
        <BrowserRouter>
          <CarritoProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={ <ItemListContainer greeting={'Bienvenidos'}/>} />
              <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting={'Bienvenidos'}/>} />
              <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
              <Route path="/cart" element= {<Cart/>}/> 
              <Route path="/Checkout" element= {<Checkout/>}/> 
              <Route path="*" element = {<h2> Sitio no encontrado</h2>}/>
            </Routes>
          </CarritoProvider>
        </BrowserRouter>
      </>
  );
}

export default App;
