import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/config";


const ItemListContainer = ({greeting} )=> {
    const [productos, setProductos ] = useState ([]);
    const {idCategoria} = useParams();

    /*así es como llamaba a mis productos antes de conectar Firebase
        useEffect(()=> {
        const funcion = idCategoria ? getProductosPorCategoria : getproducts;

        funcion(idCategoria)
            .then(res=> setProductos(res))
    }, [idCategoria]);*/

    useEffect(()=>{
        const coleccionProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) :collection(db, "productos")
        getDocs (coleccionProductos)
        .then((res)=> {
            const list = res.docs.map((product)=>{
                return{
                    id: product.id,
                    ...product.data()
                }
            })
            setProductos(list)
        })
        .catch((error)=> console.log(error))
    },[idCategoria])

return(
    <div>
        <h1 className="tituloContenedor">{greeting} </h1>
        <ItemList productos={productos}/>
    </div>
)
}
export default ItemListContainer