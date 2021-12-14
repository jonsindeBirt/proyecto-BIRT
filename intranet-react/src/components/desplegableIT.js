import React from "react-bootstrap";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { useState } from "react";
import "./desplegableRecursos/index.css";


function DesplegableIT() {
  const [dropdown, setDropdown] = useState(false);
  const abrirCerrarDropDown = () => {
    setDropdown(!dropdown);
  };

  /**
   * creamos un array con los items que queremos que aparezcan en el desplegable
   */
  const departamentoIt = ["Abrir incidencias", "Incidencias en curso", "Listado incidencias"];
 
  /**
   * ejecutamos la funci�n map sobre el array itemsDropdown
   *
   * la funci�n map ejecuta una funci�n por cada elemento del array y devuelve un nuevo array con el resultado de la funci�n ejecutada por cada elemento
   * en la funci�n que ejecutamos por cada elemento del array, le pasamos como par�metro el elemento del array y el �ndice del elemento
   * podemos realizar todas las operaciones que queramos dentro de la funci�n del map.
   *
   * en este caso la funci�n devuelve una etiqueta <DropdownItem> (que es un elemento JSX) con el texto del elemento del array
   *
   * el resultado final es un array con las etiquetas <DropdownItem> con los elementos que queremos mostrar
   */
  const itemsDropdownReact = departamentoIt.map(function (item, index) {
    return <DropdownItem key={index}>{item}</DropdownItem>;  
  });


  return (
      <Dropdown style={{ width: "100-vw", textAlign: "justify", textDecorationStyle: "solid", padding: "20px",   borderRadius: "50px", borderBlockColor: "black" }} isOpen={dropdown} toggle={abrirCerrarDropDown}>
             <DropdownToggle><p className="estilo-desplegable"> IT</p></DropdownToggle>
        {/* dentro del <DropDownMenu> indicamos que queremos pintar el array de elementos JSX que hemos creado anteriormente */}
        <DropdownMenu>{itemsDropdownReact}</DropdownMenu>
      </Dropdown>
  );
}
export default DesplegableIT;