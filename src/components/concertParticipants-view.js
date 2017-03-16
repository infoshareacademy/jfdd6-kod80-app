import React from 'react';
import {connect} from 'react-redux'
import {Grid, Table, Alert, Image} from 'react-bootstrap'


export default connect(
  state => ({
    users: state.users
  })
)(
  function ConcertParticipantsView(props) {

    const {users} = props

    return (
      <Grid>

        <div>
          {
            props.users.fetching ?
              <Alert bsStyle="warning">
                <strong>Fetching users!</strong>
              </Alert> : null
          }
          {
            props.users.error ?
              <Alert bsStyle="danger">
                <strong>{users.error}</strong>
              </Alert> : null
          }
        </div>

        <div className="row">
          <div className="col-xs-12">
            <h2>Uczestnicy</h2>
            <Table striped>
              <tbody>
              {
                props.users.data ?
                  props.users.data.sort(
                    (user1, user2) => user1.name - user2.name
                  ).map(
                    user => (
                      <tr key={user.id}>
                        <td>
                          <img width={64} height={64} src= {user.avatar} alt={user.name}/>
                          <strong>{user.name}</strong>
                        </td>
                      </tr>
                    )
                  ) : null
              }
              </tbody>
            </Table>
          </div>
        </div>
      </Grid>
    )
  }
)
