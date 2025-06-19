import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import './NavBar.css'; // Optional custom styles
import logo from '../../assets/Logo.jpg'; // Your image path

function NavBar() {
  return (
    <Navbar expand="lg" bg="white" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="School Logo"
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto gap-4 fw-bold align-items-center">
           <Nav.Link as={Link} to={"/"}>HOME</Nav.Link>
            <Nav.Link href="#">ADMISSION</Nav.Link>
            <NavDropdown
              title={<span className="text-white fw-bold">ACADMICS</span>}
              id="basic-nav-dropdown"
              className="academics-dropdown text-white"
            >
              <NavDropdown.Item href="#">Curriculum</NavDropdown.Item>
              <NavDropdown.Item href="#">Subjects</NavDropdown.Item>
              <NavDropdown.Item href="#">Time Table</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">TOPPERS</Nav.Link>
            <Nav.Link href="#">GALLERY</Nav.Link>
            <Nav.Link as={Link} to={"/Infrastructure"}>INFRASTRUCTURE</Nav.Link>
            <Nav.Link href="http://192.168.1.31:3000/AboutUs">ABOUT US</Nav.Link>
            <Nav.Link href="#">CONTACT US</Nav.Link>
          </Nav>

          <div className="search-circle">
            <FaSearch color="white" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
