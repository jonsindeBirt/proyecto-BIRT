// import { url } from "../../environment/index";

async function getEmpleados() {
  //create an array of empleados

  const response = await fetch(`http://10.2.10.43:8080/empleados`).catch(
    (error) => error.response
  );
  if (response.status !== 200) {
    const error = await response.json();
    return Promise.reject(error.error);
  }
  const data = await response.json();
  return data;
}

async function createEmployee(empleado) {
  console.log(empleado);
  const response = await fetch(`http://10.2.10.43:8080/empleados`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify(empleado),
  }).catch((error) => error.response);
  if (response.status !== 201) {
    const error = await response.json();
    return Promise.reject(error.error);
  }
  const data = await response.json();
  return data;
}

async function getEmpleado(id) {
  const response = await fetch(`http://10.2.10.43:8080/empleados/${id}`).catch(
    (error) => error.response
  );
  if (response.status !== 200) {
    const error = await response.json();
    return Promise.reject(error.error);
  }
  const data = await response.json();
  return data;
  // return empleados.find((empleado) => empleado.id === parseInt(id));
}

async function getDepartamentos() {
  const response = await fetch(`http://10.2.10.43:8080/departamentos`).catch(
    (error) => error.response
  );
  if (response.status !== 200) {
    const error = await response.json();
    return Promise.reject(error.error);
  }
  const data = await response.json();
  return data;
}

export { getEmpleados, createEmployee, getDepartamentos, getEmpleado };
