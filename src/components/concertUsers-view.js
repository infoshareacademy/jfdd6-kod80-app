import React from 'react';
import {connect} from 'react-redux'

import {Grid, Table, Alert, Image} from 'react-bootstrap'

class UsersView extends React.Component {

  render() {

    const {users}= this.props
console.log('sdf');
    return (
      <Grid>

        <div>
          {
            users.fetching ?
              <Alert bsStyle="warning">
                <strong>Fetching users!</strong>
              </Alert> : null
          }
          {
            users.error ?
              <Alert bsStyle="danger">
                <strong>{users.error}</strong>
              </Alert> : null
          }
        </div>

        <div className="row">
          <div className="col-xs-12">
            <h2>Uczestnicy wydarzenia</h2>
            <Table striped>
              <tbody>
              {
                users.data ?
                  users.data.map(
                    user => (
                      <tr key={user.id}>
                        <td>
                          <dl>
                            <dd><Image src={user.avatar} circle alt={user.band}/></dd>
                            <dd>{user.name}</dd>
                          </dl>
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
}

export default connect(
  state => ({
    users: state.users
  })
)(UsersView)

