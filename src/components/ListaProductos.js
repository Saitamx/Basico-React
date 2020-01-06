import React, { Component, Fragment } from "react";
import Producto from "./Producto";

class ListaProductos extends Component {
  state = {
    productos: [
      { id: 1, nombre: "Camisa ReactJs", precio: 30 },
      { id: 2, nombre: "Camisa NodeJs", precio: 30 },
      { id: 3, nombre: "Camisa VueJs", precio: 30 },
      { id: 4, nombre: "Camisa Angular", precio: 30 }
    ]
    // totalCarrito : 500,
    // cliente : "Matías Troncoso"
  };

  // Métodos del ciclo de vida
  componentDidMount() {
    console.log(1);

    this.setState({
      productos : [        
      { id: 1, nombre: "Camisa ReactJs", precio: 30 },
      { id: 2, nombre: "Camisa NodeJs", precio: 30 },
      { id: 3, nombre: "Camisa VueJs", precio: 30 },
      { id: 4, nombre: "Camisa Angular", precio: 30 }
    
      ]
    })
  }
  componentWillMount() {
    console.log(2);
  }

  componentWillUpdate() {
    console.log(3);
  }

  componentWillUnmount() {
    console.log(4);
  }

  render() {
    console.log(5);

    const { productos } = this.state;

    return (
      <Fragment>
        <h1>Lista de Productos</h1>
        {productos.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </Fragment>
    );
  }
}

export default ListaProductos;
