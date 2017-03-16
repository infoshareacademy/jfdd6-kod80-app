import React from 'react';
import {connect} from 'react-redux'
import {Grid, Table, Button, ProgressBar} from 'react-bootstrap'

import {changeDistance, resetDistance} from '../state/distance-changer'
import AttractionsView from './attractions-view'


export default connect(
  state => ({
    concerts: state.concerts,
    distanceFromGoal: state.distanceChanger.distanceFromGoal,
    maxValue: state.distanceChanger.maxValue,
    minValue: state.distanceChanger.minValue
  }),
  dispatch => ({
    changeDistance: (value) => dispatch(changeDistance(value)),
    resetDistance: (value) => dispatch(resetDistance(value))
  })
)(
  function ConcertCard(props) {

    // const { distanceFromGoal } = props

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

        <h2>W promieniu {props.distanceFromGoal} km możesz znaleźć...</h2>

        <ProgressBar
          now={props.distanceFromGoal}
          max={props.maxValue}
          min={props.minValue}
        />

        <Button onClick={() => props.resetDistance()}>Wróć na początek</Button>
        <Button onClick={() => props.changeDistance(1)}>Zwiększ odległość</Button>

        <AttractionsView concertId={parseInt(props.params.concertId, 10)}/>
      </Grid>
    )
  }
)