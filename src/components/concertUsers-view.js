import React from 'react';

import {Grid, Table, Alert, Image, Jumbotron} from 'react-bootstrap'

class UsersView extends React.Component {

  render() {

    const {
      users,
      concertAttenders
      }= this.props

    const concertAttendersNapis =  concertAttenders
      ? concertAttenders.length > 0
        ? concertAttenders.length == 1
          ? <h2>Na koncert zapisała się <strong> {concertAttenders.length} </strong> osoba!</h2>
          :<h2>Na koncert zapisały się już <strong> {concertAttenders.length} </strong> osoby!</h2>
        : <h2>Bądź pierwszy. Zapisz się na koncert</h2>
      : null

    return (
      <Grid>
      <Jumbotron>
        {concertAttendersNapis}
      </Jumbotron>
      </Grid>
    )
  };
}

export default UsersView

