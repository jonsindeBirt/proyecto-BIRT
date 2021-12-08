import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Figure } from "react-bootstrap";
import botonListin  from "../assets/telefonopeq.png";



function MysteryJackpot() {

    return (

        <Figure>
        <Figure.Image
        width={171}
        height={180}
        alt="Mystery Jackpot"
        src={botonListin}
        />
        <Figure.Caption>
        Aquí va el texto del Mystery Jackpot
        </Figure.Caption>
        </Figure>
    );
}
export default MysteryJackpot;