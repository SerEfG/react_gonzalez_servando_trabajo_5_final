//import React, {Component} from "react";
import { Link } from "react-router-dom";
import './login.css';
import { useForm } from "react-hook-form";
//import { Alert } from "bootstrap";
//import Swal from 'sweetalert2';

function Login() {
    //state = {Usuario: '', Contraseña: ''};
    
    ///valueToState = ({name, value}) => {
    ///    this.setState(() => {
    ///        return { [name]: value}; 
    ///    });
    ///};
    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (data) => {
        
        console.log('Aquí está sus datos:', data);
        window.alert('Usted se ha registado correctamente');
    }

    
        return (
              <>   
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    <button type="submit" value="Enviar" className="button" >Login</button>
                </form>
                <Link to='/'><button className="salida">Regreso</button></Link>
                </>
        )
    }




export default Login;