import { Col, Container, Row, Button } from "react-bootstrap";
import logo from "../../assets/logocasinopeq.png";
import "./index.css";
import { useNavigate } from "react-router-dom";

function CabeceraEmpleados({ children, titulo, route, showBackButton = true }) {
  const navigate = useNavigate();
  return (
    <Container className="table-container">
      <Row className="primera-row">
        <Col className="columna-logotipo">
          <img src={logo} alt="logotipo" className="columna-logotipo"></img>
        </Col>
        {showBackButton ? (
          <Col>
            <Button onClick={() => navigate(route)}>Atrás</Button>
          </Col>
        ) : null}
      </Row>

      <Row className="linea-titulos">
        <Col>
          <div className="texto-Titulos-Fondo">
            <h1>Recursos Humanos</h1>
          </div>
        </Col>
        <Col>
          <div className="texto-Titulos">
            <h1>{titulo}</h1>
          </div>
        </Col>
      </Row>

      <>{children}</>
    </Container>
  );
}

export default CabeceraEmpleados;