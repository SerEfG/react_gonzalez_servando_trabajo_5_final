import './qsomos.css';
import { Link } from "react-router-dom";


function Qsomos() {
    return (

    <div className="quienes_somos">
      
      <h1>¿Quienes somos?</h1>
      <div>
        <p className='texto1'>Nuestro comercio está dirigido a aquellas personas que quieren disfrutar joyas y otros elementos de un nivel nunca visto.</p>
        <p className='texto1'>Por todo ello, nuestra filosofía de empresa puede resumirse en estos tres pilares: COMPROMISO, SERVICIO y TRATO PERSONALIZADO. Compromiso que garantiza la buena marcha de la relación comercial. Buen servicio como resultado de la misma…y trato personalizado, puesto que entendemos a la persona y sus necesidades, sus dudas, inquietudes y experiencias… y su satisfacción es lo que nos interesa. 
        Como empresa joven y dinámica que somos, nuestro proyecto es llegar a todas las personas que quieren contar con los más diversos objetos como complemento, y si se quiere, hasta como una inversión con la que cada uno de nuestros clientes puede identificarse. Somos fundamentales para todos ustedes y eso nos hace mantener vivo el espíritu de trabajo y superación, ampliando día a día nuestra oferta en relación a su demanda y siendo conscientes de que mantenernos en continua evolución nos ayuda a ir a la cabeza del sector tan versátil como lo son las tiendas de variedades.</p>
        <p className='texto1'>Contamos con un amplio servicio de E-commerce (con todas las formas de pago), seguimiento de envíos, pronta entrega y dependiendo del monto comprado el envío es sin costo alguno, a los que se agrega al final del recorrido una llamada desde nuestra empresa para evaluar cada entrega.</p>
      </div>
      <Link to='/'><button className="salida">Regreso</button></Link>  
    </div>
    

  );
}

export default Qsomos;