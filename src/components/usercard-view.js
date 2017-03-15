import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Tabs, Tab, Grid, Alert, Table} from 'react-bootstrap'


export default connect(
  state => ({
    concerts: state.concerts
  })
)(
  class UsercardView extends React.Component {
    render() {
      const {concerts} = this.props
      const firstTab = (
      <Table striped>
        <thead>
        <tr>
          <th>Zespół</th>
          <th>Typ muzyki</th>
          <th>Data</th>
        </tr>
        </thead>
        <tbody>
        {
          concerts.data ?
            concerts.data.map(
              concert => (
                <tr key={concert.id}>
                  <td>
                    <Link to={'/koncerty/' + concert.id}>{concert.band}</Link>
                  </td>
                  <td>{concert.typeOfMusic}</td>
                  <td>{concert.date}</td>
                </tr>
              )
            ) : null
        }
        </tbody>
      </Table>
      )

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

          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Moje koncerty"> {firstTab}</Tab>
            <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
            <Tab eventKey={3} title="Tab 3" >Tab 3 content</Tab>
          </Tabs>


        </Grid>
      )
    }
  }
)