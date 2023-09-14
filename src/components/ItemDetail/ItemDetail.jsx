import React, { useState } from 'react';
import './ItemDetail.css';


const ItemDetail = ({ id, nombre, precio, img }) => {
  const [contador, setContador] = useState(1);

  const stock = 10;

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  

  return (
<div className="cardProductoSolo">
  <div className="infoProductoSolo">
    <h2>Nombre: {nombre}</h2>
    <h3>Precio: {precio}</h3>
    <h3>Id: {id}</h3>
    <p>Descripción: Descripción en Curso...</p>
  </div>
  <img className="imgProductoSolo" src={img} alt={nombre} />
  <div className="contadorProducto">
    <button onClick={restar}> - </button>
    <p>Cantidad: {contador}</p>
    <button onClick={sumar}> + </button>
  </div>
  <button className="btnAgregarAlCarrito">Agregar al carrito</button>
</div>

  );
};

export default ItemDetail;

