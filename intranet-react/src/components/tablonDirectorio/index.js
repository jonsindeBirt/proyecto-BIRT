import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import "./index.css";

function Tablon() {

  return (
<Card className="tablon-estilos"  >
  <Card.Body >
    <Card.Title ><h1>Tablón de anuncios</h1></Card.Title>
    <Card.Subtitle className="card-title"><h1>Anuncio 1</h1></Card.Subtitle>
    <Card.Subtitle>Creado</Card.Subtitle>
    <Card.Text  >
      Aquí va el contenido del anuncio número uno Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in diam ultrices, interdum ligula dignissim, volutpat ipsum. Nulla dictum suscipit semper. Fusce fringilla, arcu eu porttitor commodo, erat nibh sagittis magna, nec mattis mauris enim in arcu. Sed venenatis nisl in dui ornare dapibus. Etiam augue odio, dignissim eu metus eu, rutrum pellentesque leo. Ut sollicitudin, ipsum vel dapibus fermentum, risus tortor congue mi, eget accumsan magna lorem et eros. Donec tristique vulputate purus, id tincidunt mi varius quis. Phasellus molestie arcu id sagittis tristique. Suspendisse potenti. Nulla tincidunt odio quis diam vulputate, ut aliquam dui molestie. In libero dolor, sodales eget est ac, dictum hendrerit quam. Suspendisse in posuere enim. Nam vel mattis enim. Praesent finibus, enim ac malesuada interdum, massa purus tempus tellus, in sodales lacus dolor vel sem. Nunc mattis in ipsum a porttitor. Mauris vel tellus nunc. semper. Fusce fringilla, arcu eu porttitor commodo, erat nibh sagittis magna, nec mattis mauris enim in arcu. Sed venenatis nisl in dui ornare dapibus. Etiam augue odio, dignissim eu metus eu, rutrum pellentesque leo. Ut sollicitudin, tellus nunc.
    </Card.Text>
    <Card.Link href="#">Ver más</Card.Link>
  </Card.Body>
</Card>
 );
}
export default Tablon;