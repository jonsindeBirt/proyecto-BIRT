
import { Container, Row, Col, Table, Toast, Button, Navbar, NavDropdown, Nav } from "react-bootstrap";


function NavBarGeneral() {

    return (

<Navbar bg="dark" variant="dark">
<Container className="fondoNavBar">
<Navbar.Brand href="/directorio">Directorio</Navbar.Brand>
<Nav className="me-auto">
  <Nav.Link href="/login">Login</Nav.Link>
  <Nav.Link href="/directorio">Directorio</Nav.Link>
  <Nav.Link href="/gestion">Gestion empleados</Nav.Link>
</Nav>
</Container>
</Navbar>
 );
}
export default NavBarGeneral;