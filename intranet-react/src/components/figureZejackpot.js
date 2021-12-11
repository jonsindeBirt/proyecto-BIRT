import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Figure } from "react-bootstrap";
import botonListin  from "../assets/telefonopeq.png";
import "./figureZejackpot.css";


function ZeJackpot() {

    return (

        <Figure>
        <Figure.Image
        className="boton-mystery" 
        width={171}
        height={180}
        alt="Mystery Jackpot"
        src={botonListin}
        />
        <Figure.Caption>
        Aquí va el texto del ZeJackpot
        </Figure.Caption>
        </Figure>
    );
}
export default ZeJackpot;