import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Table, Toast, Button, Navbar, NavDropdown, Nav } from "react-bootstrap";
import logo from "../../assets/logocasinopeq.png";
import { Label } from "reactstrap";
import "./index.css";
import { useQuery } from "react-query";
// import { getEmpleados } from "../services";
import { useNavigate } from "react-router-dom";

function GestionEmpleados() {
 
  return (
    <Container className="container">
      <Row className="primera-row">
        <Col className="columna-logotipo">
          <img src={logo} alt="logotipo" className="columna-logotipo"></img>
        </Col>
      </Row>

      <Row className="linea-titulos">
        <Col>
          <p className="texto-Titulos-Fondo">
            <h1>Recursos Humanos</h1>
          </p>
        </Col>
        <Col>
          <p className="texto-Titulos">
            <h1>Gestión Empleados</h1>
          </p>
        </Col>
      </Row>




      <Row>
          <Col> </Col>
          <Col className="apartados-gestion"> <p className="texto-Titulos-Apartados">
            Alta
          </p> </Col>
          <Col> </Col>
      </Row>

      <Row>
          <Col> </Col>
          <Col className="apartados-gestion"> <p className="texto-Titulos-Apartados">
            Baja
          </p> </Col>
          <Col> </Col>
      </Row>

      <Row>
          <Col> </Col>
          <Col className="apartados-gestion"> <p className="texto-Titulos-Apartados">
            Modificación
          </p> </Col>
          <Col> </Col>
      </Row>

    
    


      <Row>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Directorio principal</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">RRHH</Nav.Link>
        <Nav.Link href="#link">IT</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </Row>
    </Container>
  );
}

export default GestionEmpleados;
