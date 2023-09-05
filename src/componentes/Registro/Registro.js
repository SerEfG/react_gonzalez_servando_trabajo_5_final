import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import './registro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useEffect } from "react";
//import Swal from 'sweetalert2';

//const { value: nombre } = await Swal.fire({
//    title: 'Ingrese Nombre',
//    input: 'nombre',
//    inputLabel: 'Your email address',
//    inputPlaceholder: 'Enter your email address'
//  })
  
//  if (nombre) {
//    Swal.fire(`Ingrese Nombre: ${nombre}`)
//  }

function Registro(){
    

    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (data) => {
        
        console.log('Aquí está sus datos:', data);
        window.alert('Usted se ha registado correctamente');
    }
    
    

    //const mostrarAlerta=(data)=>{
        
    //    Swal.fire('Registro guardado correctamente');
    //setTimeout(() => {
        //window.location.reload()
    //}, 10000)
    //}
    

    return(
        <> 
        <h1>Registro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="general">
                <label >Nombre:</label>
                <input className="campo" type="text" {...register("nombre", {required: true, maxLenght:15})} placeholder="Ingrese su nombre"/>
                {errors.nombre?.type === 'required' && <p className="error">El campo nombre es requerido!!</p>}
            </div>
            <div className="general">
                <label>Apellido:</label>
                <input className="campo" type="text" {...register("apellido", {required: true})} placeholder="Ingrese su apellido"/>
                {errors.apellido?.type === 'required' && <p className="error">El campo apellido es requerido!!</p>}
            </div>
            <div className="general">
                <label>Email:</label>
                <input className="campo" type="email" {...register("email", {required: true})} placeholder="Ingrese su email: ejemplo@servidor.com"/>
                {errors.email?.type === 'required' && <p p className="error">El campo email es requerido!!</p>}
            </div>
            <div className="general">
                <label>Contraseña:</label>
                <input className="campo" type="password" {...register("contrasenia", {required: true})} placeholder="Ingrese su contraseña"/>
                {errors.contrasenia?.type === 'required' && <p className="error">El campo contraseña es requerido!!</p>}
            </div>
            <input type="submit" value="Enviar" className="button" ></input>
        </form>
        <Link to='/'><button className="salida">Regreso</button></Link>
        </>
    )

}

export default Registro;