import { Container, Nav, Navbar } from "react-bootstrap";
import "./index.css";
import { useNavigate } from "react-router-dom";

function NavBarGeneral({ setAuthState }) {
  const navigate = useNavigate();

  function handleClick(e) {
    setAuthState(false);
    navigate("/");
  }

  return (
    <Navbar className="navColor">
      <Nav>
        <Navbar.Text onClick={() => handleClick()} className="color-me">
          Logout
        </Navbar.Text>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav.Link href="/" className="color-me">
          Directorio
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
export default NavBarGeneral;
