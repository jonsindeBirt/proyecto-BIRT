import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Figure } from "react-bootstrap";
import logoMistery  from "../assets/logoMysteryNegro.png";
import "./figureMysteryJackpot.css";




function MysteryJackpot() {

    return (

        <Figure>
        <Figure.Image
        className="boton-mystery" 
        width={171}
        height={180}
        alt="Mystery Jackpot"
        src={logoMistery}
        />
        <Figure.Caption>
        <p>Aquí va el texto del Mystery Jackpot</p>
        </Figure.Caption>
        </Figure>
    );
}
export default MysteryJackpot;