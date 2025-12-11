const Tecnologias = ({img,tecnologia}) => {
    return(
        <div>
            <div className='img-tec-contenedor'>
                <img src={img} alt={tecnologia} className='img-tec' />
            </div>
            <p className='text-center text-white'>{tecnologia}</p>
        </div>
    );
}

export default Tecnologias;