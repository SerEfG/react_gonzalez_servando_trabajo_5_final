import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
//import NavBar from "./navbar/NavBar";
import './ListaProductos.css';

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <Link to='/'><button className="salida">Regreso</button></Link>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ul className="productos-lista">
          {productos.map(producto => (
            <li key={producto.id} className="producto-item">
              <h3>{producto.title}</h3>
              <p>Precio: ${producto.price}</p>
              <Link to={`/DetalleProducto/${producto.id}`}>Ver Detalle</Link>
            </li>
          ))}
        </ul>
      )}
      <Link to='/'><button className="salida">Regreso</button></Link>
    </div>
  );
}

export default ListaProductos;
