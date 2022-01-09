import React from "react-bootstrap";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Button,
  Image,
} from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import iconoListin from "../assets/telefonopeq.png";




function BotonListin() {

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }


return (
  
  <Button className="boton-listin"  type="button" id="botonListin" name="botonListin" href="/listin" onClick={handleClick}>
       <Image className="ajuste-boton" src={iconoListin} fluid />
  </Button>

);             
}
export default BotonListin;