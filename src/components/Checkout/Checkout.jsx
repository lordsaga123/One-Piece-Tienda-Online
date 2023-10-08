// import { useState, useContext } from "react"
// import { CarritoContext } from "../../context/CarritoContext";
// import { db } from "../../services/config";
// import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
// import './Checkout.css'

// const Checkout = () => {
//     const [nombre, setNombre] = useState("");
//     const [apellido, setApellido] = useState("");
//     const [telefono, setTelefono] = useState("");
//     const [email, setEmail] = useState("");
//     const [emailConfirmacion, setEmailConfirmacion] = useState("");
//     const [error, setError] = useState("");
//     const [orderId, setOrderId] = useState("");

//     const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

//     const manejadorFormulario = ( event)=> {
//         event.preventDefault();

    

//     //Validación de formulario:
//     if(!nombre || !apellido|| !telefono|| !email|| !emailConfirmacion) {
//         setError("Nakama, olvidaste completar un campo. Resuélvelo e intenta nuevamente!")
//         return; 
//     }

//     // Validación de Email
//     if(email !== emailConfirmacion){
//         setError("El Email no coincide Nakama!! Vuelve a intentarlo!")
//         return;
//     }

//     const vaciarFormulario = () => {
//         setNombre("");
//         setApellido("");
//         setTelefono("");
//         setEmail("");
//         setEmailConfirmacion("");
//         setError("");
//       };
      

//     const orden = {
//         items: carrito.map(producto => ({
//             id: producto.item.id,
//             nombre: producto.item.nombre,
//             cantidad: producto.cantidad,
//         })),
//         total: total,
//         fecha: new Date(),
//         nombre,
//         apellido,
//         telefono,
//         email,
//     };

//     Promise.all(
//         orden.items.map(async(productoOrden)=> {
//             const productoRef = doc(db, "productos", productoOrden.id);
//             const productoDoc = await getDoc(productoRef);
//             const stockActual = productoDoc.data().stock;
//             await updateDoc(productoRef, {
//                 stock: stockActual - productoOrden.cantidad,
//         })
//     })
//     )
//     .then(()=> {
//         addDoc(collection(db, "ordenes"), orden)
//         .then((docRef) => {
//             setOrderId(docRef.id);
//             vaciarCarrito();
//             vaciarFormulario();
//           })
          
//             .catch((error)=>{
//                 console.log("Nakama... Hubo un Error al crear la orden.", error);
//                 setError("Error al crear la orden Nakama.")
//             });
//     })
//     .catch((error)=> {
//         console.log("Nakama... No es posible actualizar el Stock de provisiones.", error);
//         setError("Tenemos problemas Nakama!! La orden no se grabó");
//     } )


//     }
//   return (
//     <div>
//       <h2> CheckOut </h2>
//       <form onSubmit={manejadorFormulario}>
//       {
//     carrito.map(producto => (

//         <div key={producto.item.id}>
//             <p>{producto.item.nombre} x {producto.cantidad} </p>
//             <p> {producto.item.precio} </p>
//             <hr />
//         </div>
//     ))
// }   <h4>Total unidades: {cantidadTotal} </h4>
//     <h4>Total a pagar: $ {total} </h4>
//     <hr />
    

//             <div className="form__Group">
//             <label htmlFor=""> Nombre </label>
//             <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} />
//         </div>
//         <div className="form__Group">
//             <label htmlFor=""> Apellido</label>
//             <input type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)} />
//         </div>
//         <div className="form__Group">
//             <label htmlFor=""> Trléfono </label>
//             <input type="text"  value={telefono} onChange={(e)=> setTelefono(e.target.value)} />
//         </div>
//         <div className="form__Group">
//             <label htmlFor=""> Email </label>
//             <input type="email"  value={email} onChange={(e)=> setEmail(e.target.value)}/>
//         </div>
//         <div className="form__Group">
//             <label htmlFor=""> Email Confirmación </label>
//             <input type="email"  value={emailConfirmacion} onChange={(e)=> setEmailConfirmacion(e.target.value)} />
//         </div>

//         {
//             error && <p style = {{color: "red"}}> {error} </p>
//         }

//         <button type="submit"> Finalizar Compra</button>
//       </form>
//         {
//             orderId && (
//                 <strong tyle = {{color: "green"}}> Gracias por la compra Nakama!! Tú número de orden es {orderId} </strong>
//             )
//         }
//     </div>
//   )
// }

// export default Checkout
import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  const manejadorFormulario = (event) => {
    event.preventDefault();

    // Validación de formulario:
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Nakama, olvidaste completar un campo. Resuélvelo e intenta nuevamente!");
      return;
    }

    // Validación de Email
    if (email !== emailConfirmacion) {
      setError("El Email no coincide Nakama!! Vuelve a intentarlo!");
      return;
    }

    const vaciarFormulario = () => {
      setNombre("");
      setApellido("");
      setTelefono("");
      setEmail("");
      setEmailConfirmacion("");
      setError("");
    };

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "productos", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;
        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrderId(docRef.id);
            vaciarCarrito();
            vaciarFormulario();
          })
          .catch((error) => {
            console.log("Nakama... Hubo un Error al crear la orden.", error);
            setError("Error al crear la orden Nakama.");
          });
      })
      .catch((error) => {
        console.log("Nakama... No es posible actualizar el Stock de provisiones.", error);
        setError("Tenemos problemas Nakama!! La orden no se grabó");
      });
  };

  return (
    <div className="container">
      <h2 className="estilos__Checkout">CheckOut</h2>
      <form onSubmit={manejadorFormulario}>
        {carrito.map((producto) => (
          <div className="cart-item" key={producto.item.id}>
            <p>{producto.item.nombre} x {producto.cantidad}</p>
            <p>Precio: ${producto.item.precio}</p>
          </div>
        ))}
        <div className="total-label">Total unidades: {cantidadTotal}</div>
        <div className="total-label">Total a pagar: ${total}</div>
        <div className="form__Group">
          <label htmlFor="">Nombre</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="form__Group">
          <label htmlFor="">Apellido</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div className="form__Group">
          <label htmlFor="">Teléfono</label>
          <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div className="form__Group">
          <label htmlFor="">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form__Group">
          <label htmlFor="">Email Confirmación</label>
          <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Finalizar Compra</button>
      </form>
      {orderId && <strong className="confirmation-message">Gracias por la compra Nakama!! Tu número de orden es: {orderId}</strong>}
    </div>
  );
};

export default Checkout;
