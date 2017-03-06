import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'

// import '../styles/App.css';

const App = (props) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            SoundTrip
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/concert-card">
              <NavItem href="#">Karta koncertu</NavItem>
            </LinkContainer>
            <LinkContainer to="/concerts">
              <NavItem eventKey={1} href="#">Moje koncerty</NavItem>
            </LinkContainer>
          <LinkContainer to="/usercard">
            <NavItem eventKey={2} href="#">Moje konto</NavItem>
          </LinkContainer>
              <LinkContainer to="/home">
                  <NavItem eventKey={3} href="#">Wyszukiwarka</NavItem>
              </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {props.children}
  </div>
)

export default App;
