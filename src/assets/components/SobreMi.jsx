import '../styles/SobreMi.css';
import perfil2 from '../img/perfil2.JPG';

const SobreMi = () => {
    return (
        <div className="contenedor-sobremi p-5" id='sobreMi'>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='mt-4 mb-4 text-start'>
                    <h3 className='text-white'>SOBRE MI</h3>
                </div>
                
                <div className='d-flex justify-content-center'>
                    <div className='contenedor-img'>
                        <img src={perfil2} alt="foto-perfil" className='perfil-hero' />
                    </div>
                </div>
                
                <div className='mt-5 text-start'>
                    <p className='text-white'>
                        Mi nombre es Misael Juarez Aguilar <span className='frase-4'>desarrollador full-stack</span> <br/>  
                        con experiencia en <span className='frase-1'> frontend y backend</span>. <br/>
                        Me especializo en crear aplicaciones web modernas, responsivas y seguras <br/><br/>

                        Me apasiona construir <span className='frase-4'>soluciones completas</span>.<br/> 
                        Desde la interfaz hasta la lógica del servidor, optimizando rendimiento y experiencia de usuario.<br/> 
                        Busco siempre aprender <span className='frase-1'>nuevas herramientas y mejorar la calidad de mis proyectos</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SobreMi;