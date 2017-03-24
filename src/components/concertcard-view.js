import React from 'react';
import {connect} from 'react-redux'
import {Grid, Table, Button, ProgressBar, Tabs, Tab, Image} from 'react-bootstrap'

import {changeDistance} from '../state/distance-changer'
import AttractionsView from './attractions-view'
import ConcertUsersView from './concertUsers-view'
import {attendConcert, leaveConcert} from '../state/attend-concert'
import HorizontalSlider from './slider-view'


export default connect(
  state => ({
    concerts: state.concerts,
    distanceFromGoal: state.distanceChanger.distanceFromGoal,
    maxValue: state.distanceChanger.maxValue,
    minValue: state.distanceChanger.minValue,
    attendConcertId: state.attendConcert.attendConcertId,
    session: state.session,
  }),
  dispatch => ({
    changeDistance: (value) => dispatch(changeDistance(value)),
    attendConcert: (concertId, userId, accessToken) => dispatch(attendConcert(concertId, userId, accessToken)),
    leaveConcert: (concertId, userId, accessToken) => dispatch(leaveConcert(concertId, userId, accessToken))
  })
)(
  function ConcertCard(props) {



    const concertAttractionsTab = (
      <div>
        <h2>W promieniu {props.distanceFromGoal} km możesz znaleźć...</h2>

        <HorizontalSlider
          initialValue={props.distanceFromGoal}
          max={props.maxValue}
          min={props.minValue}
          onChangeValue={props.changeDistance}
        />

        <AttractionsView concertId={parseInt(props.params.concertId, 10)}/>
      </div>
    )
    const concertUsersTab = (
      <ConcertUsersView />
    )

    const { session } = props

    return (
      <Grid>
        <div className="row">
          {
            props.concerts.data ?
              props.concerts.data.filter(
                concert =>
                concert.id === parseInt(props.params.concertId, 10)
              ).map(
                concert => (
                  <div>
                    <h1>Koncert: {concert.band}</h1>
                    <div className="col-xs-12 col-md-4">
                      <Image src={"/data/images/" + concert.bandImages} rounded alt={concert.band}/>
                      <div>
                        <Button className="btn-info" style={{margin: '3px'}}>Zaproś znajomych</Button>

                        {
                          (props.attendConcertId.includes(concert.id)) ?
                          <Button
                            bsStyle="primary"
                            bsSize="medium"
                            onClick={() => props.leaveConcert(concert.id, session.data.userId, session.data.id)}>
                            Nie idę na koncert
                          </Button> :
                          <Button
                            bsStyle="success"
                            bsSize="medium"
                            onClick={() => props.attendConcert(concert.id, session.data.userId, session.data.id)}>
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
)