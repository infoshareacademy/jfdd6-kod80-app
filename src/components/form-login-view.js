import React from 'react'
import {connect} from 'react-redux'
import {checkUsers} from '../state/form-login'
import '../styles/style-form-login-view.css'

export default connect (
  null,
  dispatch => ({
    save: (login, password) => dispatch(checkUsers(login, password))
  })
)(
  class FormLogin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        login: '',
        password: ''
      }
    }
    render() {
      return (
        <form className="form-login" onSubmit={(event) => {
          console.log(this.state);
          event.preventDefault();
          this.props.save(this.state.login, this.state.password)
        }}>
          <input
            type="text"
            placeholder="Podaj swój login"
            value={this.state.login}
            onChange={(event) => this.setState({ login: event.target.value })}
          />
          <input
            placeholder="Podaj swoje hasło"
            type="password"
            value={this.state.password}
            onChange={(event) => this.setState({ password: event.target.value })}
          />
          <button>Zaloguj się</button>
        </form>
      )
    }
  }
)