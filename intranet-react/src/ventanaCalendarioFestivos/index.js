import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar, Table } from "react-bootstrap";
import logo from "../assets/logocasinopeq.png";
import { Label } from "reactstrap";
import "./index.css";
import FooterGeneral from "../components/footer";
import { useQuery } from "react-query";
import { getCalendario } from "../rrhh/services";

function CalendarioFestivos({ setAuthState }) {
  const { status, data, error, isFetching } = useQuery(
    "listin",
    getCalendario,
    {
      onError: (error) => {
        console.log(error);
      },
      refetchOnWindowFocus: false,
    }
  );

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
            <h1>&nbsp;&nbsp;Recursos Humanos</h1>
          </p>
        </Col>
        <Col>
          <p className="texto-Titulos">
            <h1>Calendario festivos</h1>
          </p>
        </Col>
      </Row>

      <Row></Row>

      <Row>
        <Table responsive="md">
          <thead>
            <tr>
              <th>#</th>
              <th>Fecha</th>
              <th>Nombre festivo</th>
            </tr>
          </thead>
          <tbody>
            {status === "success" && data && !error
              ? data.map((diaFestivo) => {
                  return (
                    <tr>
                      <td>{diaFestivo.id}</td>
                      <td>{diaFestivo.fecha}</td>
                      <td>{diaFestivo.nombreFestivo}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
      </Row>
      <FooterGeneral setAuthState={setAuthState} />
    </Container>
  );
}

export default CalendarioFestivos;
