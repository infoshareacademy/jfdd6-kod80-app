import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {ListGroup, ListGroupItem, Media, Tabs, Tab, Grid, Alert, Table, Image} from 'react-bootstrap'

import filter_concert from '../search/concert-filter'
import sortConcertByDate from '../date/sort-concert-by-date'
import {fetchFavoriteConcerts} from '../state/attend-concert'
import '../styles/style-user-view.css'

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
        // user,
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

        <div className="tabel-background">
        <Table stripped className="table-view">
        <thead className="table-head">
        <tr>

          <th>Nazwa koncertu</th>
          <th>Miejscowość</th>
          <th>Data</th>
          <th></th>
        </tr>
        </thead>


        <tbody className="table-body">

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
                  <td className ="td-img">
                    <Image width={150} height={110} src={"data/images/" + concert.bandImages}
                           alt="zdjęcie zespołu"/> </td>
                </tr>


              )
            ) : null
        }
        </tbody>


      </Table>
        </div>

      );

      const pastConcerts = (
        <div className="tabel-background">

        <Table stripped className="table-view">
          <thead className="table-head">
          <tr>
            <th>Nazwa koncertu</th>
            <th>Miejscowość</th>
            <th>Data</th>
            <th> </th>
          </tr>
          </thead>
          <tbody className ="table-body">
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
                    <td className="td-img">
                      <Image width={150} height={110} src={"data/images/" + concert.bandImages}
                             alt="zdjęcie zespołu"/> </td>
                  </tr>
                )
              ) : null
          }
          </tbody>
        </Table>
        </div>
      );
      const userName = user.data ? user.data.username : null
      const userEmail = user.data ? user.data.email : null
      const userId = session.data ? session.data.userId : null

      const myAccountTab = (  <div className="table-view">
        <Media>
          <Media.Left>
            <img width={210} height={190} src={require('../images/soundtrip-user.jpg')} alt="soundtrip-user"/>
          </Media.Left>
          <Media.Body>
            <ListGroup>
              <ListGroupItem header="Imię">{userName}</ListGroupItem>
              <ListGroupItem header="E-mail">{userEmail}</ListGroupItem>
              <ListGroupItem header="Powrót do strony głownej"><Link to={'/'}> Wróc </Link> </ListGroupItem>

            </ListGroup>
          </Media.Body>
        </Media>
      </div>);

      return (
        <Grid className ="body-background" >
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
