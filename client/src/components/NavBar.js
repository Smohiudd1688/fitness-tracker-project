import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function NavBar({currentUser}) {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">The Fit Life</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/workout">Workouts</Nav.Link>
            <Nav.Link href="/account">Account</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="/account">{currentUser.username}</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;