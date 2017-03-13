import React from 'react';
import { connect } from 'react-redux'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'

// import '../styles/App.css';

import {fetchAttractions} from '../state/attractions-gdansk'
import {fetchHotels} from '../state/hotels-gdansk'
import {fetchRestaurants} from '../state/restaurants-gdansk'
import {fetchTaxis} from '../state/taxis-gdansk'

class App extends React.Component {

  componentWillMount() {
   fetchAttractions()
    fetchHotels()
    fetchRestaurants()
    fetchTaxis()
  }

  render() {

    const {props, children} = this.props

    return (
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {children}
      </div>
    )
  }
}


export default App;
