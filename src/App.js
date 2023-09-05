import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaProductos from "./componentes/ListaProductos";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componentes/home/home';
//import Tablas from './componentes/tablas/tablas';
import Registro from './componentes/Registro/Registro';
import DetalleProducto from "./componentes/DetalleProducto";
import Login from './componentes/Login/Login';
import Qsomos from './componentes/qsomos/qsomos';


function App() {
    return (

    <div className="App">
      <h1 className='titulo'>Mi web con React Trabajo Práctico Final</h1>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/listaProductos" element={<ListaProductos />} />
          <Route path="/DetalleProducto/:id" element={<DetalleProducto />} />
          <Route path='/registro' element={<Registro/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/qsomos/qsomos' element={<Qsomos/>}></Route>
        </Routes>
      </Router>
      
    </div>
    

  );
}

export default App;