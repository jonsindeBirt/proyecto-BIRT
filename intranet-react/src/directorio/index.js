import fondodirectorio from "../assets/fondo.jpg";
//importamos el compoente Link desde react-router-dom
import { Link } from "react-router-dom";

function Directorio() {
  return (
    <div>
      {/* usamos el componente Link como si fuera un <a> de HTML. En el 'to' ponemos la ruta a donde queremos que nos lleve */}
      <Link to="calendario">Calendario</Link>
      <img
        className="imagenfondodirectorio"
        src={fondodirectorio}
        alt="fondodirectorio"
      ></img>
    </div>
  );
}

export default Directorio;
