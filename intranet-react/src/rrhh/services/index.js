// import { url } from "../../environment/index";

async function getEmpleados() {
  const response = await fetch(`/empleados`).catch((error) => error.response);
  if (response.status !== 200) {
    const error = await response.json();
    return Promise.reject(error.error);
  }
  const data = await response.json();
  return data;
}

async function createEmployee(empleado) {
  console.log(empleado);
  const response = await fetch(`/empleados`, {
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

async function getDepartamentos() {
  const response = await fetch(`/departamentos`).catch(
    (error) => error.response
  );
  if (response.status !== 200) {
    const error = await response.json();
    return Promise.reject(error.error);
  }
  const data = await response.json();
  return data;
}

export { getEmpleados, createEmployee, getDepartamentos };
