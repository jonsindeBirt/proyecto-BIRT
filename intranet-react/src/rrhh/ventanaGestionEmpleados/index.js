import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Table, Toast, Button, Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import logo from "../../assets/logocasinopeq.png";
import { Label } from "reactstrap";
import "./index.css";
import { useQuery } from "react-query";
// import { getEmpleados } from "../services";
import { useNavigate } from "react-router-dom";
import NavBarGeneral from "../../components/NavBar/navBar";
import triangulop from "../../assets/triangulopeq.png";



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
          <p  className="texto-Titulos">
            <h1>Gestión Empleados</h1>
          </p>
        </Col>
      </Row>




      <Row h-10>
          <Col> </Col>
          <Col className="apartados-gestion">
          
             <p className="texto-Titulos-Apartados" className="texto-Titulos-Apartados">
            <Button type="Input" href="/altaEmpleados" img src={triangulop} className="triangulo"></Button> Alta </p> </Col>
          <Col> </Col>
      </Row>

      <Row h-10>
          <Col> </Col>
          <Col className="apartados-gestion"> <p className="texto-Titulos-Apartados">
            <Button type="Input" href="/altaEmpleados" img src={triangulop} className="triangulo"></Button> Baja </p> </Col>
          <Col> </Col>
      </Row>

      <Row h-10>
          <Col> </Col>
          <Col className="apartados-gestion"> <p className="texto-Titulos-Apartados">
          <Button type="Input" href="/altaEmpleados" img src={triangulop} className="triangulo"></Button> Modificación
          </p> </Col>
          <Col> </Col>
      </Row>

      <Row>
      <NavBarGeneral />
      </Row>
    </Container>
  );
}

export default GestionEmpleados;