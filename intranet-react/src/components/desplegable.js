import React from 'react-bootstrap';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { useState } from "react";

function Desple() {

const [dropdown, setDropdown]=useState(false);
const abrirCerrarDropDown=()=>{
  setDropdown(!dropdown);

}
    return (
  <div>
    <Dropdown isOpen={dropdown} toggle={abrirCerrarDropDown}>
      <DropdownToggle> Departamento inform�tica</DropdownToggle>
        <DropdownMenu>
            <DropdownItem>Ayuda</DropdownItem>
            <DropdownItem>T�cnicos</DropdownItem>
            <DropdownItem>Preguntas m�s frecuentes</DropdownItem>
        </DropdownMenu>
    </Dropdown>

  </div>   

    );
  }
  export default Desple;
