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
  

return (
  
  <Button className="boton-listin"  type="button" id="botonListin" name="botonListin" onClick={this.onClick}>
       <Image className="ajuste-boton" src={iconoListin} fluid />
  </Button>

);             
}