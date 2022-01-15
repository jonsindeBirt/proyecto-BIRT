import React from "react-bootstrap";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import GestionEmpleados from "../../rrhh/ventanaGestionEmpleados";


function DesplegableRRHH() {
  const [dropdown, setDropdown] = useState(false);
  const abrirCerrarDropDown = () => {
    setDropdown(!dropdown);
  };

  /**
   * creamos un array con los items que queremos que aparezcan en el desplegable
   */

  const departamentoRRHH = ["Gesti�n de empleados", "Lista empleados", "Calendario festivos"];
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
  const itemsDropdownReact = departamentoRRHH.map(function (item, index) {
    return <DropdownItem key={item}>
      <DropdownItem className="links" to={"/gestion"}>{item}</DropdownItem>
      <DropdownItem className="links" to={"/gestion/empleados"}>{item}</DropdownItem>
      <DropdownItem className="links" to={"/calendario"}>{item}</DropdownItem>

    </DropdownItem>;
      
  });


  return (
    <div>
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropDown}>
        <DropdownToggle ><p className="estilo-desplegable"> Recursos humanos</p></DropdownToggle>
        {/* dentro del <DropDownMenu> indicamos que queremos pintar el array de elementos JSX que hemos creado anteriormente */}
        {/* 
        OJO NO ESTOY UTILIZANDO LA FUNCI�N
        <DropdownMenu>{itemsDropdownReact} */}
        <DropdownMenu>
        <DropdownItem tag="a" href="/gestion">Gesti�n empleados</DropdownItem>
        <DropdownItem tag="a" href="/gestion/empleados">Lista empleados</DropdownItem>
        <DropdownItem tag="a" href="/calendario">Calendario festivos</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
export default DesplegableRRHH;