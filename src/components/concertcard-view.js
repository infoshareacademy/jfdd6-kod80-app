import React from 'react';
import {connect} from 'react-redux'
import {Grid, Table, Button, ProgressBar, Tabs, Tab} from 'react-bootstrap'

import {changeDistance} from '../state/distance-changer'
import AttractionsView from './attractions-view'
import UsersView from './users-view'

export default connect(
  state => ({
    concerts: state.concerts,
    distanceFromGoal: state.distanceChanger.distanceFromGoal,
    maxValue: state.distanceChanger.maxValue,
    minValue: state.distanceChanger.minValue
  }),
  dispatch => ({
    changeDistance: (value) => dispatch(changeDistance(value))
  })
)(
  function ConcertCard(props) {

    // const { distanceFromGoal } = props
    const concertAttractionsTab = (
      <div>
        <h2>W promieniu {props.distanceFromGoal} km możesz znaleźć...</h2>

        <ProgressBar
          now={props.distanceFromGoal}
          max={props.maxValue}
          min={props.minValue}
        />

        <Button onClick={() => props.changeDistance(-1)}>Zmniejsz dystans</Button>
        <Button onClick={() => props.changeDistance(1)}>Zwiększ dystans</Button>

        <AttractionsView concertId={parseInt(props.params.concertId, 10)}/>
      </div>
    )

    const  concertUsersTab = (
      <UsersView />
    )

    return (
      <Grid>
        <h1>Koncert {props.params.concertId}</h1>

        <Table striped>
          <thead>
          <tr>
            <th>Zespół</th>
            <th>Typ muzyki</th>
            <th>Miejsce</th>
            <th>Data</th>
          </tr>
          </thead>
          <tbody>
          {
            props.concerts.data ?
              props.concerts.data.filter(
                concert =>
                concert.id === parseInt(props.params.concertId, 10)
              ).map(
                concert => (
                  <tr key={concert.id}>
                    <td>{concert.band}</td>
                    <td>{concert.typeOfMusic}</td>
                    <td>{concert.place}</td>
                    <td>{concert.date}</td>
                  </tr>
                )
              )
              : null
          }
          </tbody>
        </Table>
        <hr/>


        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Atrakcje koncertu"> {concertAttractionsTab}</Tab>
          <Tab eventKey={2} title="Uczestnicy koncertu">{concertUsersTab}</Tab>
        </Tabs>


      </Grid>
    )
  }
)