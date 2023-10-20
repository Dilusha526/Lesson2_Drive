import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../assets/logo.png"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Services from './Services';
import { BrowserRouter as Router, Link, Route, Routes, RouterProvider } from 'react-router-dom';

function MyHeader() {
  return (
  <Router>
    <div>
      <Navbar bg="body-tertiary" expand="lg">
      <div className="container">
        <Navbar.Brand>
          <img src={logo} alt="Logo" width="180" height="70" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup" className="justify-content-end">
          <Nav>
            <Nav.Link href="#" className="active" style={{fontWeight:'bolder'}}>HOME</Nav.Link>
            <Nav.Link as={Link} to="/services" style={{fontWeight:'bolder'}}>SERVICES</Nav.Link>
            <Nav.Link href="#" style={{fontWeight:'bolder'}}>ABOUT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    <Routes>
    <Route path="/services" component={Services} />
    </Routes>
    

    </div>
    </Router>
  )
}

export default MyHeader