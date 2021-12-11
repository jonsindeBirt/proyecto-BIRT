import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Figure } from "react-bootstrap";
import nube  from "../assets/nube.svg";
import "./figureElTiempo.css";





function ElTiempo() {


    return (

        <Figure>
        <Figure.Image
        width={171}
        height={180}
        alt="El tiempo"
        src={nube}
        />
        <Figure.Caption>
        {/* <Link className="links" to="tiempo">{item}</Link> */}
        </Figure.Caption>
        </Figure>
    );
}

export default ElTiempo;