import React from 'react';
import {connect} from 'react-redux'
import {Grid, Button, Tabs, Tab, Image} from 'react-bootstrap'

import {changeDistance} from '../state/distance-changer'
import AttractionsView from './attractions-view'
import ConcertUsersView from './concertUsers-view'
import {attendConcert, leaveConcert} from '../state/attend-concert'
import HorizontalSlider from './slider-view'

import '../styles/concert-card-view.css'

import {fetchFavoriteConcerts} from '../state/attend-concert'

export default connect(
  state => ({
    concerts: state.concerts,
    distanceFromGoal: state.distanceChanger.distanceFromGoal,
    maxValue: state.distanceChanger.maxValue,
    minValue: state.distanceChanger.minValue,
    attendConcertId: state.attendConcert.attendConcertId,
    session: state.session,
    favoriteConcerts: state.attendConcert.data
  }),
  dispatch => ({
    changeDistance: (value) => dispatch(changeDistance(value)),
    attendConcert: (concertId, userId, accessToken) => dispatch(attendConcert(concertId, userId, accessToken)),
    leaveConcert: (concertId, userId, accessToken) => dispatch(leaveConcert(concertId, userId, accessToken)),
    fetchFavoriteConcerts: (accessToken, userId) => dispatch(fetchFavoriteConcerts(accessToken, userId))
  })
)(

  class ConcertCard extends React.Component {


    componentWillMount() {
      const {session} = this.props;
      this.props.fetchFavoriteConcerts(session.data.id, session.data.userId)
    }


render() {

      const concertAttractionsTab = (
        <div>
          <h2>W promieniu {this.props.distanceFromGoal} km możesz znaleźć...</h2>

        <HorizontalSlider
          initialValue={this.props.distanceFromGoal}
          max={this.props.maxValue}
          min={this.props.minValue}
          onChangeValue={this.props.changeDistance}
        />

          <AttractionsView concertId={parseInt(this.props.params.concertId, 10)}/>
        </div>
      );
      const concertUsersTab = (
        <ConcertUsersView />
      );


      const {
        session,
        // favoriteConcerts
      } = this.props;

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
                                    <Button>Zaproś znajomych</Button>
                                </div>
                                <div>
                                {
                                    (this.props.attendConcertId.includes(concert.id)) ?
                                        <Button className="no-go-concert"
                                            onClick={() => this.props.leaveConcert(concert.id, session.data.userId, session.data.id)}>
                                            Nie idę na koncert
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