import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Grid, Button, Tabs, Tab, Image} from 'react-bootstrap'

import {changeDistance} from '../state/distance-changer'
import AttractionsView from './attractions-view'
import ConcertUsersView from './concertUsers-view'
import {attendConcert, leaveConcert} from '../state/attend-concert'
import HorizontalSlider from './slider-view'

import '../styles/concert-card-view.css'

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
            <div className="container-fluid"></div>
          <div className="row page-concert-card">
            {
              this.props.concerts.data ?
                this.props.concerts.data.filter(
                  concert =>
                  concert.id === parseInt(this.props.params.concertId, 10)
                ).map(
                  concert => (


                    <div className="concert-card">

                        <div className="col-sm-6 col-md-3">

                            <Image src={"/data/images/" + concert.bandImages}/>


                        </div>



                        <div className="col-sm-6 col-md-5 col-md-offset-1 info-about-band" >
                            <h1>{concert.band}</h1>
                            <p>{concert.bandInfo}</p>
                        </div>


                        <div className="col-sm-12 col-md-3 info-about-concert">

                            <div>
                               <p>Data: {concert.date}</p>
                               <p>Miejsce: {concert.place}</p>
                               <p>{concert.city}</p>
                            </div>

                            <div>
                                <div>
                                    <Link href="https://www.facebook.com" style={{color: 'white'}} target="_blank"><Button >Zaproś znajomego</Button></Link>
                                </div>
                                <div>
                                {
                                    (this.props.attendConcertId.includes(concert.id)) ?
                                        <Button className="no-go-concert"
                                            onClick={() => this.props.leaveConcert(concert.id, session.data.userId, session.data.id)}>
                                            Rezygnuję
                                        </Button> :
                                        <Button className="go-concert"
                                            onClick={() => this.props.attendConcert(concert.id, session.data.userId, session.data.id)}>
                                            Idę na koncert
                                        </Button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                  )
                )
                : null
            }

          </div>

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