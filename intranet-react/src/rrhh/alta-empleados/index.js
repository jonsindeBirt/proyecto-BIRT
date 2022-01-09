import { useState, useEffect } from "react";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { createEmployee, getDepartamentos } from "../services";
import { Form, Button, Toast } from "react-bootstrap";
import CabeceraEmpleados from "../cabecera-empleados/CabeceraEmpleados";
import FormularioEmpleado from "../components/FormularioEmpleado";

function AnyadirEmpleado({ employee, setEdit }) {
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
  const content = <FormularioEmpleado />;
  return (
    <CabeceraEmpleados
      children={content}
      titulo={"Alta empleados"}
      route={"../empleados"}
    />
  );
}

export default AnyadirEmpleado;
