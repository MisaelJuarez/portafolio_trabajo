import '../styles/Hero.css';
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa6";
import perfil from '../img/perfil.jpeg';
const Hero = () => {
    return (
        <div className='contenedor-principal d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column justify-content-center flex-wrap principal'>
                <p className='mb-1 titulo-nombre'>
                    Hola, <span className='frase'>soy Misael</span> 
                </p>
                <p className='mb-1 descripcion-1'>
                    Desarrollador Web Full Stack 
                </p>
                <p className='mb-1 text-white mt-4'>
                    Programador apasionado y <span className='frase-4'>orientado a resultados </span>, <br/>
                    con un fuerte enfoque en el desarrollo de <span className='frase-4'>soluciones eficientes</span>. <br/>
                    Me caracteriza la <span className='frase-1'>responsabilidad, la constancia y el interés <br/> 
                    por seguir aprendiendo</span> para mejorar continuamente mis habilidades <br/>
                    y aportar valor en cada proyecto.
                </p>
                <div className='mt-3 contenedor-btns'>
                    <a href="https://github.com/MisaelJuarez" className='botones me-2'><FaGithub size={20} color='white'/> GitHub</a>
                    <a className='botones me-2'><MdEmail size={20} color='white'/> misael2745@gmail.com</a>
                    <a href="#proyectos" className='botones me-2'><BsCodeSlash size={20} color='white'/> proyectos</a>
                    <a href="#contactame" className='botones me-2'><FaLocationArrow size={20} color='white'/> Contratame</a>
                </div>
            </div>
            <div className='secundario'>
                <div className='contenedor-img'>
                    <img src={perfil} alt="" className='perfil-hero' />
                </div>
            </div>
        </div>
    )
}

export default Hero;
