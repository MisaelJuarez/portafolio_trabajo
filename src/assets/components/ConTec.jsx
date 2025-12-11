import Tecnologias from "./Tecnologias";

const ConTec = ({tecnologias}) => {    
    return(
        <div className='contenedor-tec d-flex justify-content-center mt-4'>
            <div className='tecnologias d-flex flex-wrap'>
                {
                    tecnologias.map(t => {
                        return(
                            <Tecnologias key={t.tecnologia} img={t.img} tecnologia={t.tecnologia} />
                        ); 
                    })
                }
            </div>
        </div>
    );
}

export default ConTec;