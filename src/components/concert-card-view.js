import React from 'react';
import Attractions from './attractions-view'


import {Button, Grid} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchSuccess} from '../state/concertCardViewReducer'

export default connect(
  state => ({
    database: state.database
  }),
  dispatch => ({
    fetchDatabase: () => dispatch(fetchSuccess())
  })
)(
  class ConcertCard extends React.Component {
    componentWillMount() {
      this.props.fetchDatabase()
    }
    render() {
      return (
        <Grid>
          <div>
            <h1>karta wybranego koncertu</h1>
            {
              this.props.database.data !== null ?
                this.props.database.data.filter(concert => concert.id === parseInt(this.props.params.concertId)
                )
                  .map(
                    (concert, index) =>
                      <div key={index}>
                        <h1>{concert.band}</h1>
                        <h4>{concert.city} </h4>
                        <h4> {concert.date}</h4>
                        <h4> {concert.ticketPrice}</h4>
                      </div>
                  )
                : <p>Wczytywanie bazy danych...</p>
            }
          </div>
          <div>
            <a href="https://www.ebilet.pl">
              <Button bsStyle="danger" bsSize="large">Kup Bilet !</Button>
            </a>
            <Attractions />
          </div>
        </Grid>
      )
    }
  }
)
