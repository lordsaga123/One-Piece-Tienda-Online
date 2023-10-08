// import { useContext } from "react";
// import { CarritoContext } from "../../context/CarritoContext";

// const CartItem = ({item, cantidad}) => {
//     const {eliminarProducto} = useContext(CarritoContext)
//     console.log(item)
//   return (
//         <div>
//       <h4> {item.nombre} </h4>
//       <p> Cantidad: {cantidad} </p>
//       <p> Precio:$ {item.precio} </p>
//       <button onClick={() => eliminarProducto(item.id)}> Eliminar Producto </button>
//       <hr />
//     </div>
//   )
// }

// export default CartItem
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartItem.css"; // Importa el archivo CSS personalizado

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);
  console.log(item);
  
  return (
    <>
    <div className="cart-item">
      <h4>{item.nombre}</h4>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: ${item.precio}</p>
      <button onClick={() => eliminarProducto(item.id)}>Eliminar Producto</button>
      <hr />
    </div>
    <div>
      
    </div>
    </>
  );
};

export default CartItem;

