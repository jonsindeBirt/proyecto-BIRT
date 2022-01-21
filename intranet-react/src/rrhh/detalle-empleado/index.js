import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CabeceraEmpleados from "../cabecera-empleados/CabeceraEmpleados";
import FormularioEmpleado from "../components/FormularioEmpleado";
import { getEmpleado } from "../services";
import "./index.css";

function DetalleEmpleado() {
  const [isEdit, setIsEdit] = useState(false);
  //get the params from the url
  const { id } = useParams();

  //get the employee info from the API
  const { data, isFetching, error } = useQuery(
    "empleado",
    (key) => getEmpleado(id),
    {
      onError: (error) => {
        console.log(error);
      },
      refetchOnWindowFocus: false,
    }
  );

  const content = data ? (
    !isEdit ? (
      <Card style={{ width: "18rem" }}>
        <Card.Header className="justify">
          <Button variant="light" onClick={() => setIsEdit(true)}>
            Edit
          </Button>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {data?.nombre} {data?.apellido}
          </Card.Title>
          <p>{data?.puesto}</p>
          {data?.departamento?.map((departamento) => {
            return (
              <span key={departamento.idDepartamento}>
                <p>{departamento.abreviatura}</p>
                <p>{departamento.nombreDepartamento}</p>
                <a href={`mailto:${departamento.email}`}>
                  {departamento.email}
                </a>
              </span>
            );
          })}

          <h6>Datos personales:</h6>
          <p>{data.calle}</p>
          {/* <p>{data.localidad}</p> */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    ) : (
      <FormularioEmpleado employee={data} setEdit={() => setIsEdit(false)} />
    )
  ) : null;
  return (
    <>
      <CabeceraEmpleados
        children={content}
        titulo="Detalle empleado"
        route="../empleados"
      />
    </>
  );
}

export default DetalleEmpleado;
