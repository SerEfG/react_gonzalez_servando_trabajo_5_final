import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
//import NavBar from "./navbar/NavBar"; <NavBar />

function DetalleProducto() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  //Declaramos el estado 'nombre' con el valor inicial ''
  const [nombre, SetNombre] = useState('');
  //Esta función es la que cambia el valor del nombre a Gracias por su compra
  const CambiaNombre = () => {
    SetNombre (<h2>¡¡Gracias por la compra!!</h2>);
    setTimeout(function() {
        window.location.reload();
    }, 10000);
}

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div>
        <h1>Detalle Producto</h1>
        <p className="detalle-producto">{producto.title}</p>
        <p className="detalle-producto">Precio: ${producto.price}</p>
        <p className="detalle-producto">Stock: {producto.rating.count}</p>
        <p className="detalle-producto">ID: {producto.id}</p>
        <img className="imagen-producto" src={producto.image} alt="" />
        <h3>¿Compra el artículo que figura en pantalla?</h3>
        <h4>{nombre}</h4>
        <button className='button' onClick={CambiaNombre}>Comprar</button>
        <br></br>
        <Link to='/'><button className="salida">Regreso</button></Link>
      </div>
    );
  }
}

export default DetalleProducto;
