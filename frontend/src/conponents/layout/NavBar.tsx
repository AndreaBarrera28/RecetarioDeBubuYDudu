import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home">Recetario</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/ingredients/index" className="nav-link">
                            Ingredientes
                        </NavLink>
                        <NavLink to="/hola-mundo/index" className="nav-link">
                            Hola Mundo
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
