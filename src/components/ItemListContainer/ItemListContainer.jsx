import { useState, useEffect } from "react"
import { getProductosPorCategoria, getproducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';


const ItemListContainer = ({greeting} )=> {
    const [productos, setProductos ] = useState ([]);
    const {idCategoria} = useParams();

    useEffect(()=> {
        const funcion = idCategoria ? getProductosPorCategoria : getproducts;

        funcion(idCategoria)
            .then(res=> setProductos(res))
    }, [idCategoria]);
return(
    <div>
        <h1 className="tituloContenedor">{greeting} </h1>
        <ItemList productos={productos}/>
    </div>
)
}
export default ItemListContainer