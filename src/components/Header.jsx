import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <div>
    <Navbar className="bg-body-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://img.freepik.com/free-vector/gradient-instagram-shop-logo-template_23-2149704603.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <span style={{color:'white'}}>
              Smile Shop 
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
