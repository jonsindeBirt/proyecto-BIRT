import "./index.css";
import NavBarGeneral from "../NavBar";
import { Row } from "react-bootstrap";

function FooterGeneral({ setAuthState }) {
  return (
    <Row className="pie">
      <NavBarGeneral setAuthState={setAuthState} />
    </Row>
  );
}
export default FooterGeneral;
