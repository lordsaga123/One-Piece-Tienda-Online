const productosTienda = [
  { id: "1", nombre: "Remera", precio: 300, img: "../img/remera1.jpg", idCat:"1" },
  { id: "2", nombre: "Remera", precio: 300, img: "../img/remera2.jpg", idCat:"1" },
  { id: "3", nombre: "Poster", precio: 200, img: "../img/poster1.jpg", idCat:"2" },
  { id: "4", nombre: "Poster", precio: 200, img: "../img/poster2.jpg", idCat:"2" },
  { id: "5", nombre: "Figura", precio: 800, img: "../img/figura1.jpg", idCat:"3" },
  { id: "6", nombre: "Figura", precio: 800, img: "../img/figura2.jpg", idCat:"3" },
  { id: "7", nombre: "Llavero", precio: 80, img: "../img/llavero1.jpg", idCat:"4" },
  { id: "8", nombre: "Llavero", precio: 80, img: "../img/llavero2.jpg", idCat:"4" },
  { id: "9", nombre: "Taza", precio: 400, img: "../img/taza1.jpg", idCat:"5" },
  { id: "10", nombre: "Taza", precio: 400, img: "../img/taza2.jpg", idCat:"5" },
  { id: "11", nombre: "Campera", precio: 1000, img: "../img/campera1.jpg", idCat:"6" },
  { id: "12", nombre: "Campera", precio: 1000, img: "../img/campera2.jpg", idCat:"6" },
];

export const getproducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productosTienda);
    }, 2000);
  });
};

export const getUnicoproducto = (id)=> {
    return new Promise((resolve) => {
        setTimeout(()=> {
            const producto = productosTienda.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })

} 
export const getUnicoproductoPorCategoria = (idCategoria)=> {
    return new Promise((resolve) => {
        setTimeout(()=> {
            const productoCategoria = productosTienda.find(prod => prod.idCat === idCategoria);
            resolve(productoCategoria);
        }, 2000)
    })

}

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout( () => {
      const productosCategoria =  productosTienda.filter(prod => prod.idCat === idCategoria);
      resolve(productosCategoria)
    } ,2000)

  })
}