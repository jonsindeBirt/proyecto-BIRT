import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useMutation, useQuery, useQueryClient } from "react-query";
import logo from "../../assets/logocasinopeq.png";
import { createEmployee, getDepartamentos } from "../services";
import "./index.css";
import FooterGeneral from "../../components/footer";

function AnyadirEmpleado({ employee, setAuthState }) {
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
      setCreateError(true);
      setCreateErrorMessage(error.message);
      setShow(true);
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  function sendEmployee() {
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

  // const content = <FormularioEmpleado />;
  return (
    <div className="fondo-color">
      <Row className="primera-row">
        <Col className="columna-logotipo">
          <img src={logo} alt="logotipo" className="columna-logotipo"></img>
        </Col>
      </Row>
      <Row className="linea-titulos">
        <Col>
          <p className="texto-Titulos-Fondo">
            <h1>&nbsp;&nbsp;&nbsp;Recursos Humanos</h1>
          </p>
        </Col>
        <Col>
          <p className="texto-Titulos">
            <h1>Nuevo Empleado</h1>
          </p>
        </Col>
      </Row>
      <Form
        className="formulario"
        onSubmit={(e) => {
          e.preventDefault();
          mutate(empleado);
        }}
      >
        <Form.Group controlId="formNameControl">
          <Form.Label className="estilo-label">Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            onChange={(e) => {
              setEmpleado({ ...empleado, nombre: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formApellidoControl">
          <Form.Label className="estilo-label">Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apellido"
            onChange={(e) => {
              setEmpleado({ ...empleado, apellido: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formFechaNacimiento">
          <Form.Label className="estilo-label">Fecha de nacimiento</Form.Label>
          <Form.Control
            type="date"
            placeholder="Fecha de nacimiento"
            onChange={(e) => {
              setEmpleado({ ...empleado, fechaNacimiento: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formGeneroControl">
          <Form.Label className="estilo-label">Género </Form.Label>&nbsp;&nbsp;
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
          <Form.Label className="estilo-label">País</Form.Label>
          <Form.Control
            type="text"
            placeholder="País"
            onChange={(e) => {
              setEmpleado({ ...empleado, pais: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formCalleControl">
          <Form.Label className="estilo-label">Calle</Form.Label>
          <Form.Control
            type="text"
            placeholder="Calle"
            onChange={(e) => {
              setEmpleado({ ...empleado, calle: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formCpControl">
          <Form.Label className="estilo-label">Código Postal</Form.Label>
          <Form.Control
            type="number"
            placeholder="Código Postal"
            onChange={(e) => {
              setEmpleado({ ...empleado, cp: parseInt(e.target.value, 10) });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formCpControl">
          <Form.Label className="estilo-label">Teléfono</Form.Label>
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
          <Form.Label className="estilo-label">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmpleado({ ...empleado, email: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formLocalidadControl">
          <Form.Label className="estilo-label">Localidad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Localidad"
            onChange={(e) => {
              setEmpleado({ ...empleado, localidad: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formPorcentajeControl">
          <Form.Label className="estilo-label">Porcentaje</Form.Label>
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
          <Form.Label className="estilo-label">Puesto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Puesto"
            onChange={(e) => {
              setEmpleado({ ...empleado, puesto: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formLoginControl">
          <Form.Label className="estilo-label">Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Login"
            onChange={(e) => {
              setEmpleado({ ...empleado, login: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formPasswordControl">
          <Form.Label className="estilo-label">Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            onChange={(e) => {
              setEmpleado({ ...empleado, password: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formFechaEntrada">
          <Form.Label className="estilo-label">Fecha de entrada</Form.Label>
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
          <Form.Label className="estilo-label">Departamento</Form.Label>
          <Form.Select
            onChange={(e) => {
              const departamento = { idDepartamento: e.target.value };
              setEmpleado({
                ...empleado,
                departamento: [...empleado.departamento, departamento],
              });
            }}
          >
            {data?.map((departamento) => (
              <option
                key={departamento.idDepartamento}
                value={departamento.idDepartamento}
              >
                {departamento.nombreDepartamento}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <br />
        <br />
        <Row className="situacion-boton">
          <Button className="boton-sombra" type="submit">
            GUARDAR
          </Button>
        </Row>

        <br />
        <br />
      </Form>
      )
      <Row>
        <FooterGeneral setAuthState={setAuthState} />
      </Row>
    </div>
  );
}

export default AnyadirEmpleado;
