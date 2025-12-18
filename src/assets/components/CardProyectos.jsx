import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const CardProyectos = ({imagenes,titulo,descripcion,repositorio,link}) => {
    return(
        <Card style={{ width: '18rem' }} className='contenedor-informacion'>
        <div className='p-1'>
            <Carousel>
                {
                imagenes.map((img,index) => {
                    return(
                    <Carousel.Item key={index}>
                        <Card.Img variant="top" src={img.img}/>
                    </Carousel.Item>
                    );
                })
                }
            </Carousel>

        </div>
        <Card.Body>
            <Card.Title className='cardTitulo'>{titulo}</Card.Title>
            <Card.Text>
                {descripcion} <br/>
                <a href={link} target='_blank'>{repositorio}</a>
            </Card.Text>
        </Card.Body>
        </Card>
    );
}

export default CardProyectos;