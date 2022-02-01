import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./index.css";

function Tablon() {
  const cards = [
    {
      title: "Anuncio 1",
      subtitle: "Subtitulo 1",
      content: "Contenido del anuncio 1",
    },
    {
      title: "Anuncio 2",
      subtitle: "Subtitulo 2",
      content: "Contenido del anuncio 2",
    },
    {
      title: "Anuncio 3",
      subtitle: "Subtitulo 3",
      content: "Contenido del anuncio 3",
    },
  ];
  return (
    <div>
      {cards.map((card) => (
        <Card>
          <Card.Body>
            <Card.Title className="card-title">{card.title}</Card.Title>
            <Card.Subtitle>{card.subtitle}</Card.Subtitle>
            <Card.Text>{card.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
export default Tablon;
