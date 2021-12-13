import { useState } from "react";
import { Table, Toast, Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { getEmpleados } from "../services";
import { useNavigate } from "react-router-dom";

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
    <>
      <Button onClick={() => navigate(`./nuevo`)}>Añadir un empleado</Button>
      <Table>
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
      {isFetching ? <div>Cargando...</div> : null}
      {error ? (
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
          bg="warning"
        >
          <Toast.Body>{error}</Toast.Body>
        </Toast>
      ) : null}
    </>
  );
}

export default ListadoEmpleados;
