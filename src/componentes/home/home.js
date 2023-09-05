import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import icon from './joyeria.png';
//import NavBar from "./navbar/NavBar";

function Home(){
    return(
        <div className="menu"> 
            <h1>Sitio de compras y tienda de variedades "El diamante"</h1>
            <img src={icon} className="joyeria" alt="foto frente de página"/>
            <div>
                <Link to='/listaproductos'><button className="menu-boton">Listado de Productos</button></Link>
                <Link to='/registro'><button className="menu-boton">Registro</button></Link>
                <Link to='/login'><button className="menu-boton">Login</button></Link>
                <Link to='/qsomos/qsomos'><button className="menu-boton">Quienes somos</button></Link>
            </div>
        </div>
    )

}

export default Home;