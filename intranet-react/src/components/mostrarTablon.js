import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { CardColumns, CardHeader } from "reactstrap";



function MostrarTablon() {

  return (
<Card style={{ width: "58rem", textAlign: "justify", borderBlockColor: "#646362", boxShadow: "#646362" }}>
  <Card.Body>
    <Card.Title>Tablón de anuncios</Card.Title>
    <Card.Subtitle className="lg-9 mb-9 text-muted">Anuncio 1</Card.Subtitle>
    <Card.Text className="align-items-lg-baseline" >
      Aquí va el contenido del anuncio número uno Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in diam ultrices, interdum ligula dignissim, volutpat ipsum. Nulla dictum suscipit semper. Fusce fringilla, arcu eu porttitor commodo, erat nibh sagittis magna, nec mattis mauris enim in arcu. Sed venenatis nisl in dui ornare dapibus. Etiam augue odio, dignissim eu metus eu, rutrum pellentesque leo. Ut sollicitudin, ipsum vel dapibus fermentum, risus tortor congue mi, eget accumsan magna lorem et eros. Donec tristique vulputate purus, id tincidunt mi varius quis. Phasellus molestie arcu id sagittis tristique. Suspendisse potenti. Nulla tincidunt odio quis diam vulputate, ut aliquam dui molestie. In libero dolor, sodales eget est ac, dictum hendrerit quam. Suspendisse in posuere enim. Nam vel mattis enim. Praesent finibus, enim ac malesuada interdum, massa purus tempus tellus, in sodales lacus dolor vel sem. Nunc mattis in ipsum a porttitor. Mauris vel tellus nunc.
    </Card.Text>
    <CardColumns />
    <Card.Link href="#">Ver más</Card.Link>
  </Card.Body>
</Card>
 );
}
export default MostrarTablon;