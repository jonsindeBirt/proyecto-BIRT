import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import { Row } from "react-bootstrap";
import "./App.css";
import Login from "./login";
import Directorio from "./directorio";

function App() {
  const [value, onChange] = useState(new Date());

  return (
    <Row className="row">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Login />
    </Row>
  );
}

/**

 * Esto es un componente que recibe informaciïż½n o propiedades del componente padre. Esa informaciïż½n serïż½ un objeto de Javascript, asïż½ que tendremos que acceder mediante la notaciïż½n de punto, es decir, propiedades.`nombreDeLaPropiedad`. Este `nombreDeLaPropiedad`serïż½ el nombre que le damos en el componente padre
 
function CabeceraConNombre(propiedades) {
  return (
    <h1>
      Hola {propiedades.nombre} {propiedades.nombre2}
    </h1>
  );
}
CALENDARIO no es funciïż½n, si lo queremos, solo hay que aïż½adirlo en la funcion App de arriba
 <Calendar
        onChange={onChange}
        value={value} 
        />   
*/

export default App;
