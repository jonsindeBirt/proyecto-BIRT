//importamos el compoente Link desde react-router-dom
// import { Link } from "react-router-dom";
// import { useState } from "react";
import logo from "../assets/logocasinopeq.png";
import iconoListin from "../assets/telefonopeq.png";
import "./index.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import React from "react";
import DesplegableIT from "../components/desplegableIT";
import DesplegableRRHH from "../components/desplegableRecursos";
import CalendarioFestivos from "../components/calendarioDirectorio";
import "bootstrap/dist/css/bootstrap.min.css";
import Tablon from "../components/tablonDirectorio";
import Button from "@restart/ui/esm/Button";
import MysteryJackpot from "../components/figureMysteryJackpot";
import ZeJackpot from "../components/figureZejackpot";
import ElTiempo from "../components/figureElTiempo";
import BotonListin from "../components/botonListin";
import FooterGeneral from "../components/footer";

function Directorio({ setAuthState }) {
  return (
    <Container fluid className="fondo-imagen">
      <Row className="linea-contenedor">
        <Row>
          <Col className="linea-uno" md lg="auto">
            <img src={logo} alt="logotipo" className="columna-logotipo"></img>
            <Tablon lg md="8" className="tablon" />
          </Col>

          <Col className="columna-tablon"></Col>

          <Col md="3" className="columna-derecha">
            <Row className="lineaListin">
              <Button
                className="boton-listin"
                type="button"
                id="botonListin"
                name="botonListin"
                href="/listin"
              >
                <Image className="ajuste-boton" src={iconoListin} fluid />
              </Button>
            </Row>

            <Row className="desplegable"></Row>

            <Row className="desplegable">
              <DesplegableRRHH />
            </Row>
          </Col>
        </Row>
        <Row className="linea-dos">
          <Col className="columnaCentrada">
            <MysteryJackpot />
          </Col>
          <Col className="columnaCentrada">
            <ZeJackpot />
          </Col>
          <Col className="columnaCentrada">
            <ElTiempo />
          </Col>
          <Col className="columnaCentrada">
            <Row>
              <CalendarioFestivos />
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Directorio;
