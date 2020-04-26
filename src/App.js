import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Producto from "./components/Producto.jsx";
import Carrito from "./components/Carrito.jsx";

function App() {
  // Crear State para listado de productos
  const [productos] = useState([
    { id: 1, nombre: "Camisa ReactJs", precio: 50 },
    { id: 2, nombre: "Camisa VueJs", precio: 50 },
    { id: 3, nombre: "Camisa NodeJs", precio: 50 },
  ]);

  // State para un carrito de compras
  const [carrito, setCarrito] = useState([]);

  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <>
      <Header titulo="Tienda Virtual" />
      <h1>Lista de Productos</h1>
      {productos.map((producto, index) => (
        <Producto
          key={index}
          producto={producto}
          productos={productos}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      ))}
      <Carrito 
        carrito={carrito}
        setCarrito = {setCarrito}
        />
      <Footer fecha={fecha} />
    </>
  );
}

export default App;
