import React from 'react'
import {connect} from 'react-redux'
import {} from '../state/form-login'

//
// funkcja checkUser


export default connect (
  null,
  dispatch => ({
    save: (login, password) => dispatch(checkUser(login, password))
  })
)(
  class FormLogin extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        login: '',
        password: ''
      }
    }


    render() {
      return (

      <form onSubmit={(event) => {
        console.log(this.state)
        event.preventDefault()
        this.props.save(this.state.login, this.state.password)
      }}>
        <input
          value={this.state.login}
          onChange={(event) => this.setState({ login: event.target.value })}
        />
        <input
          value={this.state.password}
          onChange={(event) => this.setState({ login: event.password.value })}
        />
        <button>Save</button>
      </form>


      )
    }


  }
)

