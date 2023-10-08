import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className="item-detail-container">
      <img className="item-image" src={img} alt={nombre} />
      <div className="item-info">
        <div className='info__Base__Detail'>
          <h2>Nombre: {nombre}</h2>
          <h3>Precio: $ {precio}</h3>
          <p>Stock: {stock}</p>
          <p>Descripción: Descripción en Curso...</p>
        </div>
        {
          agregarCantidad > 0 ? (
            <div className='opcion__Compra'>
              <Link to="/cart" className="finish-purchase">Terminar Compra</Link>
              <Link to="/" className="continue-shopping">Seguir Comprando</Link>
            </div>
          ) : (
            <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          )
        }
      </div>
    </div>
  );
};

export default ItemDetail;


