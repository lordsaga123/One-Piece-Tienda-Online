// import './ItemCount.css';
// import { useState } from "react"



// const ItemCount = ({inicial, stock, funcionAgregar}) => {
//     const [contador, setContador] = useState(inicial);
  
//     const sumar = () => {
//       if (contador < stock) {
//         setContador(contador + 1);
//       }
//     };
    
//     const restar = () => {
//       if (contador > inicial) {
//         setContador(contador - 1);
//       }
//     };



//   return (
//     <>
//         <div className="contadorProducto">
//             <button onClick={restar}> - </button>
//             <p>Cantidad: {contador}</p>
//             <button onClick={sumar}> + </button>
//         </div>
//             <button onClick={()=> funcionAgregar(contador) } className="btnAgregarAlCarrito">Agregar al carrito</button>    
//     </>
//   )
// }

// export default ItemCount
import './ItemCount.css';
import { useState } from "react"

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="contador-producto">
        <button className="btn-sumar-restar" onClick={restar} disabled={contador <= inicial}>-</button>
        <p>Cantidad: {contador}</p>
        <button className="btn-sumar-restar" onClick={sumar} disabled={contador >= stock}>+</button>
      </div>
      <button onClick={() => funcionAgregar(contador)} className="btn-agregar-al-carrito">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;
