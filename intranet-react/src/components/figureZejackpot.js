import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Figure } from "react-bootstrap";
import logoZeJackpot from "../assets/logoZeJackpotNegro.png";
import "./figureZejackpot.css";

function ZeJackpot() {
  return (
    <Figure>
      <Figure.Image
        className="boton-mystery"
        width={171}
        height={180}
        alt="Mystery Jackpot"
        src={logoZeJackpot}
      />
      <Figure.Caption>Aquí va el texto del ZeJackpot</Figure.Caption>
    </Figure>
  );
}
export default ZeJackpot;
