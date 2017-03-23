import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {ListGroup, ListGroupItem, Media, Tabs, Tab, Grid, Alert, Table} from 'react-bootstrap'

import filter_concert from '../search/concert-filter'
import sortConcertByDate from '../date/sort-concert-by-date'
import {fetchFavoriteConcerts} from '../state/attend-concert'

const dat1 = new Date('2000', '06', '16');
const dat2 =  new Date()

const concertsSearchValues = {
  concertId: null,
  band: null,
  typeOfMusic: null,
  city: null,
  dateSince: dat1,
  dateTo: dat2
}

export default connect(
  state => ({
    concerts: state.concerts,
    favoriteConcerts: state.attendConcert,
    user: state.user,
    session: state.session
  }),
  dispatch => ({
    fetchFavoriteConcerts: (session_tokken, userId) => dispatch(fetchFavoriteConcerts(session_tokken, userId) )

  })
)(
  class UsercardView extends React.Component {

    componentWillMount() {
      const {
        user,
        session,
        fetchFavoriteConcerts
      } = this.props

      const session_tokken = session.data ? session.data.id : null
      const userId = session.data ? session.data.userId : null

      if( session_tokken !== null  && userId !== null) {
        fetchFavoriteConcerts( session_tokken, userId )
      }
    }

    render() {
      const {
        concerts,
        favoriteConcerts,
        user,
        session
      } = this.props;

      const favoriteConcertsIds =  favoriteConcerts.data ? favoriteConcerts.data.map(item => item.itemId) : []

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
            concerts.data
              .sort( sortConcertByDate )
              .filter( concert => favoriteConcertsIds ? favoriteConcertsIds.includes(concert.id) : null)
              .map(
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
              concerts.data
                .filter( concert => favoriteConcertsIds ? favoriteConcertsIds.includes(concert.id) : null)
                .filter( filter_concert(concertsSearchValues) )
                .sort( sortConcertByDate )
                .map(
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
            <img width={210} height={190} src={require('../graphics/user.jpg')} alt="soundtrip-user"/>
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
            <Tab eventKey={3} title="Historia">{pastConcerts}</Tab>
          </Tabs>
        </Grid>
      )
    }
  }
)
