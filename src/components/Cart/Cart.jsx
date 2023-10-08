// import { useContext } from "react";
// import { CarritoContext } from "../../context/CarritoContext";
// import { Link } from "react-router-dom";
// import CartItem from "../CartItem/CartItem";

// const Cart = () => {
//   const { carrito, vaciarCarrito, total, cantidadTotal } =
//     useContext(CarritoContext);

//   if (cantidadTotal === 0) {
//     return (
//       <>
//         <h2> Carrito vacío. </h2>
//         <Link to="/"> Ver productos </Link>
//       </>
//     );
//   }
//   return (
//     <div>
//       {carrito.map((producto) => (
//         <CartItem key={producto.id} {...producto} />
//       ))}
//       <h3>Total: $ {total} </h3>
//       <h3>Cantidad Total: {cantidadTotal} </h3>
//       <button onClick={() => vaciarCarrito()}> Vacíar Carrito </button>
//       <Link to="/checkOut"> Finalizar Compra </Link>
//     </div>
//   );
// };

// export default Cart;

import './Cart.css';
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div className="cart-container">
        <h2>Carrito vacío.</h2>
        <Link to="/">Ver productos</Link>
      </div>
    );
  }
  return (
    <div className="cart-container">
      <div className="cart-items">
        {carrito.map((producto) => (
          <CartItem key={producto.id} {...producto} />
        ))}
      </div>
      <h3 className="cart-total">Total: $ {total}</h3>
      <h3>Cantidad Total: {cantidadTotal}</h3>
      <div className="cart-actions">
        <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        <Link to="/checkOut">Finalizar Compra</Link>
      </div>
    </div>
  );
};

export default Cart;
