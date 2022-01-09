import { useEffect, useState } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { createEmployee, getDepartamentos } from "../services";

function FormularioEmpleado({ employee = null, setEdit = null }) {
  const [empleado, setEmpleado] = useState({
    nombre: "",
    foto: null,
    dni: null,
    isActif: 1,
    isDelete: 0,
    fechaSalida: null,
    departamento: [],
  });

  useEffect(() => {
    if (employee) {
      setEmpleado(employee);
    }
  }, [employee]);

  const [createError, setCreateError] = useState(null);
  const [show, setShow] = useState(false);
  const [createErrorMessage, setCreateErrorMessage] = useState(null);
  const queryClient = useQueryClient();

  const { departments } = useQuery("departamentos", getDepartamentos, {
    onError: () => {},
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(createEmployee, {
    onSuccess: () => {
      setCreateError(false);
      createErrorMessage("");
    },
    onError: ({ error }) => {
      setCreateError(true);
      setCreateErrorMessage(error.message);
      setShow(true);
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  function sendEmployee() {
    // const departamento = empleado.departamento.map((departamento) => {
    //   return { idDepartamento: departamento };
    // });
    // const nuevoEmpleado = { ...empleado, departamento };
    // console.log(nuevoEmpleado);
    mutate(empleado);
  }

  function getFecha(fecha) {
    const fechaFormateada = new Date(fecha);

    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    return `${fechaFormateada.getFullYear()}-${pad(
      fechaFormateada.getMonth() + 1
    )}-${pad(fechaFormateada.getDate())}`;
  }

  function getGenero(genero) {
    if (genero === empleado.genero) {
      return true;
    }
    return false;
  }
  return (
    <div>
      <h1>{employee ? "Editar empleado" : "Alta de empleados"}</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          sendEmployee();
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
            value={empleado?.nombre}
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
            value={empleado?.apellido}
          />
        </Form.Group>
        <Form.Group controlId="formFechaNacimiento">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control
            type="date"
            placeholder="Fecha de nacimiento"
            onChange={(e) => {
              console.log(e.target.value);
              setEmpleado({ ...empleado, fechaNacimiento: e.target.value });
            }}
            value={
              empleado?.fechaNacimiento
                ? getFecha(empleado?.fechaNacimiento)
                : ""
            }
          />
        </Form.Group>
        <Form.Group controlId="formGeneroControl">
          <Form.Label>Género </Form.Label>
          <br />
          <Form.Check
            type="radio"
            label="F"
            id="F"
            name="genero"
            inline
            onChange={(e) => {
              setEmpleado({ ...empleado, genero: "Femenino" });
            }}
            checked={getGenero("Femenino")}
          />
          <Form.Check
            type="radio"
            label="M"
            id="M"
            name="genero"
            inline
            onChange={(e) => {
              setEmpleado({ ...empleado, genero: e.target.value });
            }}
            checked={getGenero("Masculino")}
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
            value={empleado?.pais}
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
            value={empleado?.calle}
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
            value={empleado?.cp}
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
            value={empleado?.telefono}
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
            value={empleado?.email}
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
            value={empleado?.localidad}
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
            value={empleado?.porcentaje}
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
            value={empleado?.puesto}
          />
        </Form.Group>
        {employee ? null : (
          <>
            <Form.Group controlId="formLoginControl">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="text"
                placeholder="Login"
                onChange={(e) => {
                  setEmpleado({ ...empleado, login: e.target.value });
                }}
                value={empleado?.login}
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
                value={empleado?.password}
              />
            </Form.Group>
          </>
        )}
        <Form.Group controlId="formFechaEntrada">
          <Form.Label>Fecha de entrada</Form.Label>
          <Form.Control
            type="date"
            placeholder="Fecha de entrada"
            onChange={(e) => {
              setEmpleado({ ...empleado, fechaEntrada: e.target.value });
            }}
            value={empleado?.fechaEntrada}
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
            {departments
              ? departments.map((departamento) => (
                  <option
                    key={departamento.idDepartamento}
                    value={departamento.idDepartamento}
                  >
                    {departamento.idDepartamento}
                  </option>
                ))
              : null}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          {employee ? "Editar empleado" : "Crear empleado"}
        </Button>
        {employee ? (
          <Button variant="danger" onClick={() => setEdit()}>
            Cancelar
          </Button>
        ) : null}
      </Form>

      <Toast
        bg="Warning"
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
      >
        Ha habido un error
      </Toast>
    </div>
  );
}

export default FormularioEmpleado;
