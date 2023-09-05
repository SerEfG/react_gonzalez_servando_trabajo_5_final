import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'; 


function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/listaProductos"><button className="menu-boton">Lista Productos</button></Link>
      <Link to="/registro"><button className="menu-boton">Registro</button></Link>
      <Link to="/login"><button className="menu-boton">Login</button></Link>
      <Link to='/qsomos/qsomos'><button className="menu-boton">Quienes somos</button></Link>
    </nav>
  );
}

export default NavBar;
