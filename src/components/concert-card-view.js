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
                          this.props.database ? this.props.database.map(
                                  (concert, index) => <li key={index}>{concert.band}</li>
                              ) : <p>Wczytywanie bazy danych...</p>
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


//
// import React from 'react';
// import Attractions from './attractions-view'
// import {Button, Grid} from 'react-bootstrap'
// import {LinkContainer} from 'react-router-bootstrap'
// import { connect } from 'react-redux'
//
// import database from '../../public/data/concerts-gdansk.json'
//
//
// class ConcertCard extends React.Component {
//
//
//
//
// }
//
// const ConcertCard = props => {
//     const concertId = props.params.concertId;
//     const concert = database.filter( concert => concert.id == concertId)[0];
//
//     return (
//         <Grid key={concertId}>
//
//             <h1 >{concert.band}</h1>
//             <h2> {concert.city} {concert.date} </h2>
//             <LinkContainer to={{ pathname: '/buy-ticket/3' }}>
//                 <Button  bsStyle="danger" bsSize="large">Kup Bilet !</Button>
//             </LinkContainer>
//
//             <Attractions />
//         </Grid>
//     )
// };
//
//
// export default ConcertCard

