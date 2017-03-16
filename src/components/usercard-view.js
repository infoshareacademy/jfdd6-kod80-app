import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {ListGroup, ListGroupItem, Media, Tabs, Tab, Grid, Alert, Table} from 'react-bootstrap'


export default connect(
  state => ({
    concerts: state.concerts
  })
)(
  class UsercardView extends React.Component {
    render() {
      const {concerts} = this.props;
      const myConcertsTab = (
      <Table striped>
        <thead>
        <tr>
          <th>Zespół</th>
          <th>Miejscowość</th>
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
                  <td>{concert.city}</td>
                  <td>{concert.date}</td>
                </tr>
              )
            ) : null
        }
        </tbody>
      </Table>
      );

      const pastConcerts = (
        <Table striped>
          <thead>
          <tr>
            <th>Zespół</th>
            <th>Miejscowość</th>
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
                    <td>{concert.city}</td>
                    <td>{concert.date}</td>
                  </tr>
                )
              ) : null
          }
          </tbody>
        </Table>
      );

      const myAccountTab = (  <div>
        <Media>
          <Media.Left>
            <img width={210} height={190} src= {require('../graphics/user.jpg')} alt="soundtrip-user"/>
          </Media.Left>
          <Media.Body>
            <ListGroup>
              <ListGroupItem header="Imię i nazwisko">Anna Muza</ListGroupItem>
              <ListGroupItem header="Login">MyMamaDontLikeYou</ListGroupItem>
              <ListGroupItem header="E-mail">4ever@sound.trip</ListGroupItem>

            </ListGroup>          </Media.Body>
        </Media>
      </div>);

      return (
        <Grid>
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
            <Tab eventKey={1} title="Moje koncerty"> {myConcertsTab}</Tab>
            <Tab eventKey={2} title="Moje dane">{myAccountTab}</Tab>
            <Tab eventKey={3} title="Historia">{myConcertsTab}</Tab>
          </Tabs>
        </Grid>
      )
    }
  }
)
