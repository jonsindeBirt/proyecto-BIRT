import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Table, Toast, Button } from "react-bootstrap";
import logo from "../../assets/logocasinopeq.png";
import { Label } from "reactstrap";
import "./index.css";
import { useQuery } from "react-query";
import { getEmpleados } from "../services";
import "./index.css";
import FooterGeneral from "../../components/footer";


function ListadoEmpleados() {
  const [show, setShow] = useState(false);
  const { status, data, error, isFetching } = useQuery(
    "empleados",
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
            <h1>Recursos Humanos</h1>
          </p>
        </Col>
        <Col>
          <p className="texto-Titulos">
            <h1>Listado Empleados</h1>
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
                      <td>{empleado.genero}</td>
                      <td>{empleado.pais}</td>
                      <td>{empleado.calle}</td>
                      <td>{empleado.cp}</td>
                      <td>{empleado.telefono}</td>
                      <td>{empleado.email}</td>
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
              : null}
          </tbody>
        </Table>
      </Row>
      <FooterGeneral />
    </Container>
    
  );
}

export default ListadoEmpleados;
