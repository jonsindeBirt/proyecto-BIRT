import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Table, Toast, Button } from "react-bootstrap";
import logo from "../assets/logocasinopeq.png";
import { Label } from "reactstrap";
import "./index.css";
import { useQuery } from "react-query";
import { getDirectorio } from "../rrhh/services";
import { useNavigate } from "react-router-dom";
import FooterGeneral from "../components/footer";

function ListinTelefonico({ setAuthState }) {
  const [show, setShow] = useState(false);
  const { status, data, error, isFetching } = useQuery(
    "listin",
    getDirectorio,
    {
      onError: (error) => {
        console.log(error);
        setShow(true);
      },
      refetchOnWindowFocus: false,
    }
  );

  const navigate = useNavigate();

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
            <h1>&nbsp;&nbsp;Agenda</h1>
          </p>
        </Col>
        <Col>
          <p className="texto-Titulos">
            <h1>Listín empleados</h1>
          </p>
        </Col>
      </Row>

      <Row></Row>

      <Row>
        <Table responsive="md">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {status === "success" && data && !error
              ? data.map((empleado) => {
                  return (
                    <tr
                      key={empleado.id}
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`./${empleado.id}`)}
                    >
                      <td>{empleado.nombreDirectorio}</td>
                      <td>{empleado.telefono}</td>
                      <td>{empleado.email}</td>
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

export default ListinTelefonico;
