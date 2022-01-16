import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Table, Toast, Button } from "react-bootstrap";
import logo from "../assets/logocasinopeq.png";
import { Label } from "reactstrap";
import "./index.css";
import { useQuery } from "react-query";
import { getEmpleados } from "../rrhh/services";
import { useNavigate } from "react-router-dom";

function ListinTelefonico() {
  const [show, setShow] = useState(false);
  const { status, data, error, isFetching } = useQuery(
    "listin",
    getEmpleados,
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
            <h1>Agenda</h1>
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
              <th>Apellido</th>
              <th>Fecha de Nacimiento</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Departamento</th>
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
                      <td>{empleado.nombre}</td>
                      <td>{empleado.apellido}</td>
                      <td>{empleado.fechaNacimiento}</td>
                      <td>{empleado.telefono}</td>
                      <td>{empleado.email}</td>
                      <td>{empleado.nombreDepartamento}</td>
                      <td>
                        <ul>
                          {empleado.departamento.map((departamento) => {
                            return (
                              <li key={departamento.idDepartamento}>
                                <a href={`mailto:${departamento.email}`}>
                                  {departamento.nombreDepartamento}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default ListinTelefonico;
