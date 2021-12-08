//importamos el compoente Link desde react-router-dom
// import { Link } from "react-router-dom";
// import { useState } from "react";
import logo from "../assets/logocasino.png";
import "./index.css";
import { Container, Row, Col, ThemeProvider } from "react-bootstrap";
import React from "react";
import DesplegableIT from "../components/desplegableIT";
import DesplegableRRHH from "../components/desplegableRRHH";
import Calendario from "../calendario";
import 'bootstrap/dist/css/bootstrap.min.css';
import MostrarTablon from "../components/mostrarTablon"; 
import Button from "@restart/ui/esm/Button";

// import { Dimensions } from "react-native";

// var width = Dimensions.get('window').width; //full width
// var height = Dimensions.get('window').height; //full height



function Directorio() {
  return (
    <Container fluid className="fondo-imagen">
      <Row>
        <Col md lg={9} xs={12} className="columna-izquierda"  >
               <Row className="logotipo-superior">
                 <img
                    src={logo}
                    alt="logotipo">
                  </img>
                </Row>  

                <Row className="tablon">
                  <Col md lg={8} xs={12}><MostrarTablon/></Col>
                  
                </Row>

                <Row >
                    <p> <h1>El tiempo, calendario, etc</h1></p>
                </Row>
        </Col>


        <Col className="columna-derecha-directorio" md lg={3} xs={12
        } >
               <Row>
               <Button className="boton-listin d-md-table-row" ></Button>

                </Row>

               <Row className="desplegable" >
                  <DesplegableIT/>
                  <DesplegableRRHH/>
               </Row> 
               <Row className="calendario">  
                  <Calendario/>
                </Row>
        </Col>

      </Row>

    </Container>
  );
}

export default Directorio;
