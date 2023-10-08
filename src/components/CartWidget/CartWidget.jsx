import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext)
    const imgCarrito = <ion-icon name="cart-outline"></ion-icon>;
    return(
        <div>
            <Link to="/cart">
                <div className='imgCarrito'> {imgCarrito}
                {
                    cantidadTotal> 0 && <strong>{cantidadTotal} </strong>
                }
                    
                </div>
            </Link>
        
        </div>
    )
}
export default CartWidget

//<img src= {cart} alt ="cart-widget"/>
            //0