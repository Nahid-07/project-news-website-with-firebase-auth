import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContex/UserContext";
import Leftside from "../Leftside/Leftside";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const hanleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <Navbar
      className="mb-5"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="">
          <Link to="/">Dragon-News</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {user?.uid ? (
                <>
                  <span>{user.displayName}</span>
                  <Button variant="outline-danger ms-3" onClick={hanleLogOut}>
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <>
                    <Link to="login">
                      <Button variant="outline-primary me-3">Log in</Button>
                    </Link>
                    <Link to="register">
                      <Button variant="outline-primary">Register</Button>
                    </Link>
                  </>
                </>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? (
                <Image
                  src={user.photoURL}
                  roundedCircle
                  style={{ height: "40px" }}
                ></Image>
              ) : (
                <FaUserAlt></FaUserAlt>
              )}
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <Leftside></Leftside>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
