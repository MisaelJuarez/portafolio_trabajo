import '../assets/styles/Navar.css';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navar = () => {
  return (
    <Navbar expand="md" className="contenedor-nav" collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-white links">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#sobreMi" className="text-white links">Sobre mi</Nav.Link>
            <Nav.Link href="#habilidades" className="text-white links">Habilidades</Nav.Link>
            <Nav.Link href="#proyectos" className="text-white links">Proyectos</Nav.Link>
            <Nav.Link href="#contactame" className="text-white links">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navar;