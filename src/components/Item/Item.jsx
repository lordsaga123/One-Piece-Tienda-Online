// Item.js
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className='cardProducto'>
      <img className='imgProducto' src={`../img/${img}`} alt={nombre} />
      <div className='infoProducto'>
        <div className='info__Base'>
          <h3>Nombre: {nombre}</h3>
          <p>Precio: {precio}</p>
          <p>Stock: {stock}</p>
        </div>
        <Link to={`/item/${id}`}>Ver Detalles</Link>
      </div>
    </div>
  );
};

export default Item;
