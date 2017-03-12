

import React from 'react';
// import Attractions from './attractions-view'
// import {Button, Grid} from 'react-bootstrap'
// import {LinkContainer} from 'react-router-bootstrap'
// import { connect } from 'react-redux'

import database from "../../public/data/concerts-gdansk.json"
import { connect } from 'react-redux'
import {fetchSuccess} from '../state/concertCardViewReducer'

export default connect (
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

    render () {
        return(
            <div>
                <h1>cos</h1>
                {
                this.props.database ? this.props.database.map(
                    (zespol, index)=> <li key={index}>{zespol.band}</li>
                ) : <p>czekaj...</p>
                }
            </div>
        )
    }
}
)




//
//
// class ConcertCard extends React.Component {
//     render () {
//         return(
//             <div>
//                 <h1>cos</h1>
//                 {
//                     database.map(
//                         (zespol, index)=> <li key={index}>{zespol.band}</li>
//                     )
//                 }
//             </div>
//         )
//     }
// }
// export default ConcertCard






// import React from 'react';

// import base from '../data/attractions.json'

//
//
// const base = [
//     {name: '1'},
//     {name: '2'},
//     {name: '3'},
//     {name: '4'},
//     {name: '5'}
// ]
//
// const ConcertCard = () => (
//     <div>
//         <h1>test</h1>
//         <ul>
//         {
//           base.map(
//                 (name, index) => <li key={index}>{base.name}</li>
//           )
//         }
//         </ul>
//      </div>
// )
//
// export default ConcertCard




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
//
//
//

//
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
//

