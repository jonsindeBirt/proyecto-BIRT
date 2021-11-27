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
      <DropdownToggle> Departamento informática</DropdownToggle>
        <DropdownMenu>
            <DropdownItem>Ayuda</DropdownItem>
            <DropdownItem>Técnicos</DropdownItem>
            <DropdownItem>Preguntas más frecuentes</DropdownItem>
        </DropdownMenu>
    </Dropdown>

  </div>   

    );
  }
  export default Desple;
