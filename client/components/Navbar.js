import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Navigationbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Shopper</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigationbar;
