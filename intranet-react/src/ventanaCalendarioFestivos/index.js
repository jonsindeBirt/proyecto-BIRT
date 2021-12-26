import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Table } from "react-bootstrap";
import logo from "../../assets/logocasinopeq.png";
import { Label } from "reactstrap";
import "./index.css";


function CalendarioFestivos (){
 

return (
	<Container className="container">
    <Row className="primera-row">
      <Col className="columna-logotipo">
          <img
            src={logo}
            alt="logotipo"
            className="columna-logotipo" >
          </img>
          </Col>
          </Row>

          <Row className="linea-titulos">
            <Col><p className="texto-Titulos-Fondo"><h1>Recursos Humanos</h1></p></Col>
            <Col><p className="texto-Titulos"><h1>Listado Empleados</h1></p></Col>

          
          </Row>
	  


<Row>
  
</Row>

    <Row>

  <Table responsive="md">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>

    </Row>
    </Container>
  );
}

export default CalendarioFestivos;