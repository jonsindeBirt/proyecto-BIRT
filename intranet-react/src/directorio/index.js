import fondodirectorio from "../assets/fondo.jpg";
//importamos el compoente Link desde react-router-dom
import { Link } from "react-router-dom";
import React from "react";
import Desple from "./components/desplegable";


function Directorio() {
  return (
  
      <div className="row">
          {/* usamos el componente Link como si fuera un <a> de HTML. En el 'to' ponemos la ruta a donde queremos que nos lleve */}
        <Desple/>

      </div>
  );
}

export default Directorio;
