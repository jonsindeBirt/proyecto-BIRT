
import { Container, Row, Col, Table, Toast, Button, Navbar, NavDropdown, Nav } from "react-bootstrap";
import "./index.css";


function NavBarGeneral() {

    return (

<Navbar className="navColor" >
<Container >
<Nav >
  <Nav.Link href="#" className="color-me">Logout</Nav.Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Nav.Link href="/directorio" className="color-me">Directorio</Nav.Link>
</Nav>
</Container>
</Navbar >
 );
}
export default NavBarGeneral;