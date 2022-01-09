// import { url } from "../../environment/index";
const empleados = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    fechaNacimiento: "01/01/2000",
    genero: "Masculino",
    pais: "Argentina",
    calle: "Calle 1",
    cp: "5000",
    telefono: "11-1111-1111",
    email: "email@email.com",
    localidad: "La Plata",
    porcentaje: "10",
    puesto: "Gerente",
    dni: "12345678",
    fechaEntrada: "01/01/2020",
    fechaSalida: "01/01/2021",
    departamento: [
      {
        idDepartamento: 1,
        nombreDepartamento: "Departamento 1",
      },
    ],
  },
  {
    id: 2,
    nombre: "Juan",
    apellido: "Perez",
    fechaNacimiento: "01/01/2000",
    genero: "Masculino",
    pais: "Argentina",
    calle: "Calle 1",
    cp: "5000",
    telefono: "11-1111-1111",
    email: "email@email.com",
    localidad: "La Plata",
    porcentaje: "10",
    puesto: "Gerente",
    dni: "12345678",
    fechaEntrada: "01/01/2020",
    fechaSalida: "01/01/2021",
    departamento: [
      {
        idDepartamento: 1,
        nombreDepartamento: "Departamento 1",
      },
    ],
  },
];
function getEmpleados() {
  //create an array of empleados

  // const response = await fetch(`/empleados`).catch((error) => error.response);
  // if (response.status !== 200) {
  //   const error = await response.json();
  //   return Promise.reject(error.error);
  // }
  // const data = await response.json();
  return empleados;
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

function getEmpleado(id) {
  // const response = await fetch(`/empleados/${id}`).catch(
  //   (error) => error.response
  // );
  // if (response.status !== 200) {
  //   const error = await response.json();
  //   return Promise.reject(error.error);
  // }
  // const data = await response.json();
  // return data;
  return empleados.find((empleado) => empleado.id === parseInt(id));
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

export { getEmpleados, createEmployee, getDepartamentos, getEmpleado };
