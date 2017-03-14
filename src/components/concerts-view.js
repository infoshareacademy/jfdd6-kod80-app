import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Grid, Alert, Table} from 'react-bootstrap'


export default connect(
  state => ({
    concerts: state.concerts
  })
)(
  class Concerts extends React.Component {
    render() {
      const {concerts} = this.props

      return (
        <Grid>
          <h1>Dostępne koncerty</h1>
          {
            concerts.fetching ?
              <Alert bsStyle="warning">
                <strong>Fetching concerts!</strong>
              </Alert> : null
          }
          {
            concerts.error ?
              <Alert bsStyle="danger">
                <strong>{concerts.error}</strong>
              </Alert> : null
          }

          <Table striped>
            <thead>
            <tr>
              <th>Id</th>
              <th>Zespół</th>
              <th>Typ muzyki</th>
              <th>Miasto</th>
              <th>Data</th>
            </tr>
            </thead>
            <tbody>
            {
              concerts.data ?
                concerts.data
                  .map(
                  concert => (
                    <tr key={concert.id}>
                      <td>{concert.id}</td>
                      <td>
                        <Link to={'/koncerty/' + concert.id}>{concert.band}</Link>
                      </td>
                      <td>{concert.typeOfMusic}</td>
                      <td>{concert.city}</td>
                      <td>{concert.date}</td>
                    </tr>
                  )
                ) : null
            }
            </tbody>
          </Table>
        </Grid>
      )
    }
  }
)
