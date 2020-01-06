import React, { Fragment } from "react";
// import PrimerComponente from "./components/PrimerComponente";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListaProductos from "./components/ListaProductos";

function App() {
  // const empleado = {
  //   nombre: "Matías Troncoso",
  //   trabajo: "Informático"
  // };

  const fecha = new Date().getFullYear();
  return (
    // VIDEOS 39 AL
    <Fragment>
      <Header titulo="Tienda Virtual" />

      <ListaProductos />

      <Footer fecha={fecha} />
    </Fragment>

    // VIDEOS 35 AL 36
    // con jsx, fragment reemplaza a los div (para no sobrecargar el html con divs)
    // <Fragment>
    //   <h1>{empleado.nombre}</h1>
    //   <p>{empleado.trabajo}</p>
    // </Fragment>
    // sin jsx
    // React.createElement(
    //   "h1",
    //   {id: "heading", className: "heading"},
    //   "Hola Mundo",
    // React.createElement(
    //   "div",
    //   null,
    //   React.createElement(
    //     "input",
    //     {type: "text", value: "Nombre de usuario"}
    //   )
    // )
    // )
    // FIN VIDEOS 35 AL 36

    // VIDEOS 37 AL 38
    // <Fragment>
    //   <PrimerComponente />
    //   <PrimerComponente />
    // </Fragment>
    // FIN VIDEOS 37 AL 38
  );
}

export default App;
