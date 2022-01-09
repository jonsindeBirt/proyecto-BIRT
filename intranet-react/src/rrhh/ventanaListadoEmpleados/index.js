import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Col, Container, Row, Table, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logocasinopeq.png";
import CabeceraEmpleados from "../cabecera-empleados/CabeceraEmpleados";
import { getEmpleados } from "../services";
import "./index.css";
function ListadoEmpleados() {
  const [show, setShow] = useState(false);
  const { status, data, error, isFetching } = useQuery(
    "empleados",
    getEmpleados,
    {
      onError: (error) => {
        setShow(true);
      },
      refetchOnWindowFocus: false,
    }
  );
  const navigate = useNavigate();
  const content = (
    <>
      <Row>
        <Col className="d-flex justify-content-end">
          <Button onClick={() => navigate("./nuevo")}>Nuevo Empleado</Button>
        </Col>
      </Row>

      <Row>
        <Table responsive="md">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Fecha de Nacimiento</th>
              <th>Genero</th>
              <th>Pais</th>
              <th>Calle</th>
              <th>CP</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Localidad</th>
              <th>Porcentaje</th>
              <th>Puesto</th>
              <th>DNI</th>
              <th>Fecha de Entrada</th>
              <th>Fecha de Salida</th>
              <th>Departamento</th>
            </tr>
          </thead>
          <tbody>
            {status === "success" && data && !error ? (
              data.map((empleado) => {
                return (
                  <tr
                    key={empleado.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`./${empleado.id}`)}
                  >
                    <td>{empleado.nombre}</td>
                    <td>{empleado.apellido}</td>
                    <td>{empleado.fechaNacimiento}</td>
                    <td>{empleado.genero}</td>
                    <td>{empleado.pais}</td>
                    <td>{empleado.calle}</td>
                    <td>{empleado.cp}</td>
                    <td>{empleado.telefono}</td>
                    <td>
                      <a href={`mailTo:${empleado.email}`}>{empleado.email}</a>
                    </td>
                    <td>{empleado.localidad}</td>
                    <td>{empleado.porcentaje}</td>
                    <td>{empleado.puesto}</td>
                    <td>{empleado.dni}</td>
                    <td>{empleado.fechaEntrada}</td>
                    <td>{empleado.fechaSalida}</td>
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
            ) : status === "loading" ? (
              <tr>
                <td>
                  <Spinner animation="border" role="status" />
                </td>
              </tr>
            ) : null}
          </tbody>
        </Table>
      </Row>
    </>
  );
  return (
    <CabeceraEmpleados
      children={content}
      titulo="Listado Empleados"
      route={"/"}
    />
  );
}

export default ListadoEmpleados;
