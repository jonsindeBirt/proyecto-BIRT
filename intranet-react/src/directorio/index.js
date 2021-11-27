// import fondodirectorio from "../assets/fondo.jpg";
//importamos el compoente Link desde react-router-dom
// import { Link } from "react-router-dom";


// import { useState } from "react";
// import fondoimagen from "../assets/fondo.jpg";
import "./index.css";
import { Container, Row } from "react-bootstrap";
import React from "react";
import Desple from "../components/desplegable";
import 'bootstrap/dist/css/bootstrap.min.css';


function Directorio() {
  return (
    <Container fluid >
    
  <Row >
          {/* usamos el componente Link como si fuera un <a> de HTML. En el 'to' ponemos la ruta a donde queremos que nos lleve */}
        <Desple/>

  </Row>
  </Container>
  );
}

export default Directorio;
