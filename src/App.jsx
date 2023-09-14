import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={ <ItemListContainer greeting={'Bienvenidos'}/>} />
              <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting={'Bienvenidos'}/>} />
              <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;