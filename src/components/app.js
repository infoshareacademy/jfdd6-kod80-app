import React from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'

import {fetchConcerts} from '../state/concerts'
import {fetchAttractions} from '../state/attractions'
import {fetchHotels} from '../state/hotels'
import {fetchRestaurants} from '../state/restaurants'
import {fetchTaxis} from '../state/taxis'


class App extends React.Component {

  componentWillMount() {
    this.props.fetchConcerts()
    this.props.fetchAttractions()
    this.props.fetchHotels()
    this.props.fetchRestaurants()
    this.props.fetchTaxis()
  }

  render() {

    const {children} = this.props

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                SOUNDTRIP
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/koncerty">
                <NavItem href="#">Koncerty</NavItem>
              </LinkContainer>
              <LinkContainer to="/atrakcje">
                <NavItem href="#">Atrakcje</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        { children }
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    fetchConcerts: () => dispatch(fetchConcerts()),
    fetchAttractions: () => dispatch(fetchAttractions()),
    fetchHotels: () => dispatch(fetchHotels()),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchTaxis: () => dispatch(fetchTaxis())
  })
)(App)
