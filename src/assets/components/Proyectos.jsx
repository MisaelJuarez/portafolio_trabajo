import '../styles/Proyectos.css';
import pro1_1 from '../img/pro1.png';
import pro1_2 from '../img/pro1-2.png';
import pro1_3 from '../img/pro1-3.png';
import pro1_4 from '../img/pro1-4.png';
import pro1_5 from '../img/pro1-5.png';
import pro2_1 from '../img/pro2-1.png';
import pro2_2 from '../img/pro2-2.png';
import pro3_1 from '../img/pro3_1.png';
import pro3_2 from '../img/pro3_2.png';
import pro3_3 from '../img/pro3_3.png';
import pro3_4 from '../img/pro3_4.png';
import pro3_5 from '../img/pro3_5.png';
import pro4_1 from '../img/pro4_1.png';
import pro4_2 from '../img/pro4_2.png';
import pro4_3 from '../img/pro4_3.png';
import pro4_4 from '../img/pro4_4.png';

import CardProyectos from './CardProyectos';
import { useState } from 'react';

const Proyectos = () => {
    const [proyecto1,setProyecto1] = useState([
        {img:pro1_1},{img:pro1_2},{img:pro1_3},{img:pro1_4},{img:pro1_5},
    ]);
    const [proyecto2,setProyecto2] = useState([
        {img:pro2_1},{img:pro2_2},
    ]);
    const [proyecto3,setProyecto3] = useState([
        {img:pro3_1},{img:pro3_2},{img:pro3_3},{img:pro3_4},{img:pro3_5},
    ]);
    const [proyecto4,setProyecto4] = useState([
        {img:pro4_1},{img:pro4_2},{img:pro4_3},{img:pro4_4},
    ]);

    return(
        <div id='proyectos'>
            <h3 className='text-white text-center mt-5 fs-1'>Proyectos</h3>
            <div className="d-flex justify-content-center align-items-center flex-wrap p-5 contenedor-proyectos">
                <CardProyectos 
                    imagenes={proyecto1} 
                    titulo="Punto de venta" 
                    descripcion="Desarrollo de un sistema web para la venta y control de inventario de productos, 
                    registro de ventas y administración básica de usuarios y diferentes roles." />
                
                <CardProyectos 
                    imagenes={proyecto2} 
                    titulo="API REST con Autenticación JWT" 
                    descripcion="Diseño y desarrollo de una API REST creada con Node.js y Express, con
                    funcionalidades de consulta y autenticación de usuarios mediante tokens JWT." />
                
                <CardProyectos 
                    imagenes={proyecto3} 
                    titulo="Sistema Administrador de Recursos Técnicos (SAT)" 
                    descripcion="aplicación web para la gestión de usuarios, equipos de cómputo e impresoras 
                    pertenecientes a distintas áreas del SAT. Incluye el control de direcciones IP disponibles y en uso, 
                    con interfazinteractiva y filtrado de datos." />

                <CardProyectos 
                    imagenes={proyecto4} 
                    titulo="Juego de roles" 
                    descripcion="Proyecto desarrollado en React que simula un juego de roles donde los usuarios 
                    pueden seleccionar personajes y enfrentarlos en combates dinámicos. 
                    Incluye manejo de estados, componentes reutilizables e interacción fluida 
                    para ofrecer una experiencia entretenida e intuitiva." />

            </div>
        </div>
    );
}

export default Proyectos;