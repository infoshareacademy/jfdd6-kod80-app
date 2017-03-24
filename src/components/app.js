import React from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'

import {fetchConcerts} from '../state/concerts'
import {fetchAttractions} from '../state/attractions'
import {fetchHotels} from '../state/hotels'
import {fetchRestaurants} from '../state/restaurants'
import {fetchTaxis} from '../state/taxis'
import {fetchSession} from '../state/session'
import {fetchUsers} from '../state/users'
import {logOut} from '../state/logout'

import '../styles/style-form-login-view.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  componentWillMount() {
    this.props.fetchConcerts()
    this.props.fetchAttractions()
    this.props.fetchHotels()
    this.props.fetchRestaurants()
    this.props.fetchTaxis()
    this.props.fetchUsers()

  }

  render() {
    const {children} = this.props;

    return (this.props.session.data === null ?
        (<div className="section-with-form-login">
            <h1>Witaj w SoundTrip</h1>

            <p>Zaloguj się, aby móc wyszukać interesujący Cię koncert oraz sprawdzić atrakcje znajdujące się w jego
              okolicy.</p>

            <div className="form-login">
              <form onSubmit={(event) => {
                event.preventDefault();
                this.props.fetchSessionLogin(this.state.username, this.state.password);
                this.setState({username: '', password: ''})
              }}>

                <input type="text"
                       placeholder="nazwa użytkownika"
                       value={this.state.username}
                       onChange={(event) => this.setState({username: event.target.value})}
                />

                <input type="password"
                       placeholder="hasło"
                       value={this.state.password}
                       onChange={(event) => this.setState({password: event.target.value})}
                />

                <input type="submit"
                       value="Zaloguj się"
                       className="button"
                />
              </form>

              <span> { this.props.session.error === null ? '' : this.props.session.error }  </span>

            </div>
          </div>
        ) :
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
              <Nav pullRight>
                <LinkContainer to="/moje-konto">
                  <NavItem href="#">Moje konto</NavItem>
                </LinkContainer>
                <Button
                  bsStyle="default"
                  bsSize="medium"
                  onClick={() => this.props.logOut()}>
                  Wyloguj
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {children}
        </div>
    );
  }
}

export default connect(
  state => ({
    session: state.session,
    user: state.user
  }),
  dispatch => ({
    fetchConcerts: () => dispatch(fetchConcerts()),
    fetchAttractions: () => dispatch(fetchAttractions()),
    fetchHotels: () => dispatch(fetchHotels()),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchTaxis: () => dispatch(fetchTaxis()),
    fetchSessionLogin: (username, password) => dispatch(fetchSession(username, password)),
    fetchUsers: () => dispatch(fetchUsers()),
    logOut: () => dispatch(logOut())
  })
)(App)
