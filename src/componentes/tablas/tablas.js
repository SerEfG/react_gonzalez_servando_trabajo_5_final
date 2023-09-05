import React, { useState } from "react";
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
import './tablas.css'


const estilosPersonalizados = {
  headRow: {
    style: {
      backgroundColor: 'blue',
      color: "white"
    }
  },
  headCells: {
    style: {
      fontSize: '16px',
      fontWeight: '600',
      textTransform: 'uppercase',
    },
  },
  cells: {
    style: {
      fontSize: '16px',
    },
  },
};
  

function Tablas() {

  const columnas = [
    {
      name: 'Orden',
      selector: (row) => row.id,
      sortable: true,
      right:true
    },
    {
      name: 'Nombre',
      selector: (row) => row.nombre,
      sortable: true
    },
    {
      name: 'Descripción',
      selector: (row) => row.descripcion,
      sortable: true
    },
    {
      name: 'Precio',
      selector: (row) => row.precio,
      sortable: true,
      right: true
    },
    {
      name: 'SKU',
      selector: (row) => row.sku,
      sortable: true,
      right: true
    },
    {
      name: 'Cantidad',
      selector: (row) => row.cantidad,
      sortable: true,
      right:true
    },
    {
      name: 'Detalle producto',
      cell: (row) => (
        <button className='btn btn-primary' onClick={() => alert('Acción en construcción, en breve estará funcional, por favor disculpe las molestias ocacionadas!!')}> Ver </button>
      ),
    }
  ];
  
  const datos = [
    {
      id: 1,
      nombre: 'Martillo',
      descripcion: 'Martillo de Pena',
      precio: '10000',
      sku: '100',
      cantidad: '1'
    },
    {
      id: 2,
      nombre: 'Destornillador',
      descripcion: 'Destornillador Philips',
      precio: '5000',
      sku: '200',
      cantidad: '3'
    },
    {
      id: 3,
      nombre: 'Mecha',
      descripcion: 'Mecha de 5mm widia',
      precio: '10000',
      sku: '100',
      cantidad: '1'
    },
    {
      id: 4,
      nombre: 'Tornillo',
      descripcion: 'Tornillo para chapa',
      precio: '500',
      sku: '1000',
      cantidad: '10'
    },
    {
      id: 5,
      nombre: 'Destornillador',
      descripcion: 'Destornillador paleta',
      precio: '4500',
      sku: '50',
      cantidad: '3'
    }
  ]

  //Declaramos el estado 'nombre' con el valor inicial ''
  const [nombre, SetNombre] = useState('');
  //Esta función es la que cambia el valor del nombre a Gracias por su compra
  const CambiaNombre = () => {
    SetNombre (<h2>¡¡Gracias por la compra!!</h2>);
    setTimeout(function() {
        window.location.reload();
    }, 10000);
}

  return(
    <div className="menu1">
      <DataTable 
        title='Detalles de productos'
        columns={columnas}
        data={datos}
        customStyles={estilosPersonalizados}
      ></DataTable>
      <div>
        <h3>¿Compra todo lo que figura en pantalla?</h3>
        <h4>{nombre}</h4>
        <button className='button' onClick={CambiaNombre}>Comprar</button>
      </div>
      <Link to='/'><button className="salida">Regreso</button></Link>
    </div>
  )

}

export default Tablas;