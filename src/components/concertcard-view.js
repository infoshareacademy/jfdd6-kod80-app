import React from 'react';
import {connect} from 'react-redux'
import {Grid, Table, Button, Tabs, Tab, Image} from 'react-bootstrap'

import {changeDistance} from '../state/distance-changer'
import AttractionsView from './attractions-view'
import ConcertUsersView from './concertUsers-view'
import {attendConcert, leaveConcert} from '../state/attend-concert'
import HorizontalSlider from './slider-view'

import {fetchFavoriteConcerts} from '../state/attend-concert'
import {fetchConcertAttenders} from '../state/concert_attenders'

export default connect(
  state => ({
    concerts: state.concerts,
    distanceFromGoal: state.distanceChanger.distanceFromGoal,
    maxValue: state.distanceChanger.maxValue,
    minValue: state.distanceChanger.minValue,
    attendConcertId: state.attendConcert.attendConcertId,
    session: state.session,
      favoriteConcerts: state.attendConcert.data,
      concertAttenders: state.concertAttenders
  }),
  dispatch => ({
    changeDistance: (value) => dispatch(changeDistance(value)),
    attendConcert: (concertId, userId, accessToken) => dispatch(attendConcert(concertId, userId, accessToken)),
    leaveConcert: (concertId, userId, accessToken) => dispatch(leaveConcert(concertId, userId, accessToken)),
    fetchFavoriteConcerts: (accessToken, userId) => dispatch(fetchFavoriteConcerts(accessToken, userId)),
    fetchConcertAttenders: (accessToken, itemId )=> dispatch( fetchConcertAttenders(accessToken, itemId))
  })
)(

  class ConcertCard extends React.Component {


    componentWillMount() {
      const {session} = this.props
      this.props.fetchConcertAttenders(session.data.id, this.props.params.concertId)
      this.props.fetchFavoriteConcerts(session.data.id, session.data.userId)
      this.props.changeDistance(1)
    }


    render() {

      const concertAttractionsTab = (
        <div>
          <h2>W promieniu do {this.props.distanceFromGoal} km możesz znaleźć...</h2>

          <HorizontalSlider
            value={this.props.distanceFromGoal}
            max={this.props.maxValue}
            min={this.props.minValue}
            onChange={this.props.changeDistance}
          />

          <AttractionsView concertId={parseInt(this.props.params.concertId, 10)}/>
        </div>
      )

      const {
        session,
        favoriteConcerts,
        concertAttenders
        } = this.props

      const concertUsersTab = (
        <ConcertUsersView concertAttenders={concertAttenders.data}/>
      )
      return (
        <Grid>
          <div className="row">
            {
              this.props.concerts.data ?
                this.props.concerts.data.filter(
                  concert =>
                  concert.id === parseInt(this.props.params.concertId, 10)
                ).map(
                  concert => (
                    <div>
                      <h1>Koncert: {concert.band}</h1>
                      <div className="col-xs-12 col-md-4">
                        <Image src={"/data/images/" + concert.bandImages} rounded alt={concert.band}/>
                        <div>
                          <Button className="btn-info" style={{margin: '3px'}}><a href="https://www.facebook.com" style={{color: 'white'}}>Powiadom znajomych</a></Button>

                          {
                            (this.props.attendConcertId.includes(concert.id)) ?
                              <Button
                                bsStyle="primary"
                                bsSize="medium"
                                onClick={() => this.props.leaveConcert(concert.id, session.data.userId, session.data.id)}>
                                Rezygnuje
                              </Button> :
                              <Button
                                bsStyle="success"
                                bsSize="medium"
                                onClick={() => this.props.attendConcert(concert.id, session.data.userId, session.data.id)}>
                                Idę na koncert
                              </Button>
                          }

                        </div>
                      </div>
                      <div className="col-xs-12 col-md-8">
                        <Table striped>
                          <thead>
                          <tr>
                            <th>Typ muzyki</th>
                            <th>Miejsce</th>
                            <th>Data</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr key={concert.id}>
                            <td>{concert.typeOfMusic}</td>
                            <td>{concert.place}</td>
                            <td>{concert.date}</td>
                          </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  )
                )
                : null
            }

          </div>

          <hr/>

          <div className="row">
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Atrakcje koncertu"> {concertAttractionsTab}</Tab>
              <Tab eventKey={2} title="Uczestnicy koncertu">{concertUsersTab}</Tab>
            </Tabs>
          </div>

        </Grid>
      )
    }
  }
)