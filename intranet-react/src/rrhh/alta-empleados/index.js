import { useState } from "react";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { createEmployee, getDepartamentos } from "../services";
import { Form, Button } from "react-bootstrap";

function AnyadirEmpleado() {
  const [empleado, setEmpleado] = useState({
    foto: null,
    dni: null,
    isActif: 1,
    isDelete: 0,
    fechaSalida: null,
    departamento: [],
  });
  const [createError, setCreateError] = useState(null);
  const [createErrorMessage, setCreateErrorMessage] = useState(null);
  const queryClient = useQueryClient();

  const { data } = useQuery("departamentos", getDepartamentos, {
    onError: () => {},
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(createEmployee, {
    onSuccess: () => {
      setCreateError(false);
      createErrorMessage("");
    },
    onError: ({ error }) => {
      console.log(error);
      setCreateError(true);
      setCreateErrorMessage(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  return (
    <div>
      <h1>Alta de empleados</h1>
      {data ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            mutate(empleado);
          }}
        >
          <Form.Group controlId="formNameControl">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              onChange={(e) => {
                setEmpleado({ ...empleado, nombre: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formApellidoControl">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apellido"
              onChange={(e) => {
                setEmpleado({ ...empleado, apellido: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formFechaNacimiento">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              type="date"
              placeholder="Fecha de nacimiento"
              onChange={(e) => {
                setEmpleado({ ...empleado, fechaNacimiento: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formGeneroControl">
            <Form.Label>Género </Form.Label>
            <br />
            <Form.Check
              type="radio"
              label="F"
              id="F"
              value="F"
              name="genero"
              inline
              onChange={(e) => {
                setEmpleado({ ...empleado, genero: e.target.value });
              }}
            />
            <Form.Check
              type="radio"
              label="M"
              id="M"
              value="M"
              name="genero"
              inline
              onChange={(e) => {
                setEmpleado({ ...empleado, genero: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formPaisControl">
            <Form.Label>País</Form.Label>
            <Form.Control
              type="text"
              placeholder="País"
              onChange={(e) => {
                setEmpleado({ ...empleado, pais: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formCalleControl">
            <Form.Label>Calle</Form.Label>
            <Form.Control
              type="text"
              placeholder="Calle"
              onChange={(e) => {
                setEmpleado({ ...empleado, calle: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formCpControl">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control
              type="number"
              placeholder="Código Postal"
              onChange={(e) => {
                setEmpleado({ ...empleado, cp: parseInt(e.target.value, 10) });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formCpControl">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="telephone"
              placeholder="Teléfono"
              onChange={(e) => {
                setEmpleado({
                  ...empleado,
                  telefono: parseInt(e.target.value, 10),
                });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formEmailControl">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmpleado({ ...empleado, email: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formLocalidadControl">
            <Form.Label>Localidad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Localidad"
              onChange={(e) => {
                setEmpleado({ ...empleado, localidad: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formPorcentajeControl">
            <Form.Label>Porcentaje</Form.Label>
            <Form.Control
              type="number"
              placeholder="Porcentaje"
              max="100"
              min="0"
              onChange={(e) => {
                setEmpleado({
                  ...empleado,
                  porcentaje: parseInt(e.target.value, 10),
                });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formPuestoControl">
            <Form.Label>Puesto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Puesto"
              onChange={(e) => {
                setEmpleado({ ...empleado, puesto: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formLoginControl">
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="text"
              placeholder="Login"
              onChange={(e) => {
                setEmpleado({ ...empleado, login: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formPasswordControl">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              onChange={(e) => {
                setEmpleado({ ...empleado, password: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formFechaEntrada">
            <Form.Label>Fecha de entrada</Form.Label>
            <Form.Control
              type="date"
              placeholder="Fecha de entrada"
              onChange={(e) => {
                setEmpleado({ ...empleado, fechaEntrada: e.target.value });
              }}
            />
          </Form.Group>
          {/* <Form.Group controlId="formFechaSalida">
            <Form.Label>Fecha de salida</Form.Label>
            <Form.Control
              type="date"
              placeholder="Fecha de salida"
              onChange={(e) => {
                setEmpleado({ ...empleado, fechaSalida: e.target.value });
              }}
            />
          </Form.Group> */}
          <Form.Group controlId="formDepartamentoControl">
            <Form.Label>Departamento</Form.Label>
            <Form.Select
              onChange={(e) => {
                const departamento = { idDepartamento: e.target.value };
                setEmpleado({
                  ...empleado,
                  departamento: [...empleado.departamento, departamento],
                });
              }}
            >
              {data.map((departamento) => (
                <option
                  key={departamento.idDepartamento}
                  value={departamento.idDepartamento}
                >
                  {departamento.idDepartamento}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Crear empleado
          </Button>
        </Form>
      ) : null}
    </div>
  );
}

export default AnyadirEmpleado;
