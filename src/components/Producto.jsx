import React from "react";

const Producto = ({ producto, carrito, setCarrito, productos }) => {
  // para evitar poner producto.nombre, etc
  const { nombre, precio, id } = producto;

  // Agregar producto al carrito
  const seleccionarProducto = (id) => {
    // filter para iterar
    const producto = productos.filter((producto) => producto.id === id)[0];
    setCarrito([...carrito, producto]);
  };

  // Elimina un producto del carrito
  const eliminarProducto = id => {
      const productos = carrito.filter(producto => producto.id !== id);
      // poner procutos en el state
      setCarrito(productos)
  }

  return (
    <>
      <h2>{nombre}</h2>
      <p>${precio}</p>

      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button"
            onClick={() => eliminarProducto(id)}
        >Eliminar</button>
      )}
    </>
  );
};

export default Producto;
