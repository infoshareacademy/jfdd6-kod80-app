import React from 'react'
import {connect} from 'react-redux'
import {checkUsers} from '../state/form-login'
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
        <form onSubmit={(event) => {
          console.log(this.state);
          event.preventDefault();
          this.props.save(this.state.login, this.state.password)
        }}>
          <input
            value={this.state.login}
            onChange={(event) => this.setState({ login: event.target.value })}
          />
          <input
            value={this.state.password}
            onChange={(event) => this.setState({ password: event.target.value })}
          />
          <button>Zaloguj się</button>
        </form>
      )
    }
  }
)