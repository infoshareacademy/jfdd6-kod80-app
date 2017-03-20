import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Grid, Alert, Image} from 'react-bootstrap'
import SearchInputCreator from './search-input'

import filter_concert from '../search/concert-filter'
import sortConcertByDate from '../date/sort-concert-by-date'

import '../styles/style-concerts-view.css'

export default connect(
  state => ({
    concerts: state.concerts,
    concertsSearchValues: state.concert_filter.concertsSearchValues
  })
)(
  class Concerts extends React.Component {
    render() {
      const {
        concerts,
        concertsSearchValues
        } = this.props

      return (
        <Grid>
          <SearchInputCreator/>
            <div className="concerts-result-view">

            <h1>Dostępne koncerty</h1>


          {
            concerts.fetching ?
              <Alert bsStyle="warning">
                <strong>Fetching concerts!</strong>
              </Alert> : null
          }
          {
            concerts.error ?
              <Alert bsStyle="danger">
                <strong>{concerts.error}</strong>
              </Alert> : null
          }






            {
              concerts.data ?
                concerts.data
                  .filter( filter_concert(concertsSearchValues) )
                  .sort( sortConcertByDate )
                  .map(
                    (concert, index) => (

                <Link to={'/koncerty/' + concert.id} className="link-concerts-view" key={concert.id}>
                  <div className="concerts-view" data-title="zobacz szczegóły"
                       key={concert.id}>

                      <div className="band-images">
                          <Image src={"data/images/" + concert.bandImages}
                                 alt="zdjęcie zespołu"/>
                      </div>

                      <div className="about-concert">
                          <h1> {concert.band} </h1>
                          <span>{concert.typeOfMusic}</span>
                          <p>{concert.date} </p>
                          <p>{concert.place}{'/'}{concert.city}</p>
                      </div>
                   </div>
                </Link>
                  )
                ) : null
            }

          </div>



        </Grid>
      )
    }
  }
)



// <ul key={concert.id}>
//
//
// <li>{index+1} aaa</li>
// <li>
// <Link to={'/koncerty/' + concert.id}>{concert.band}</Link>
// </li>
// <li>{concert.typeOfMusic}</li>
// <li>{concert.city}</li>
// <li>{concert.date} </li>
//
//
// </ul>





// <Table striped>
// <thead>
// <tr>
// <th>Lp.</th>
// <th>Zespół</th>
// <th>Typ muzyki</th>
// <th>Miasto</th>
// <th>Data</th>
// </tr>
// </thead>
// <tbody>
// {
//     concerts.data ?
//     concerts.data
//         .filter( filter_concert(concertsSearchValues) )
//         .sort( sortConcertByDate )
//         .map(
//             (concert, index) => (
//                 <tr key={concert.id}>
//                     <td>{index+1}</td>
//                     <td>
//                         <Link to={'/koncerty/' + concert.id}>{concert.band}</Link>
//                     </td>
//                     <td>{concert.typeOfMusic}</td>
//                     <td>{concert.city}</td>
//                     <td>{concert.date} </td>
//                 </tr>
//             )
//         ) : null
// }
// </tbody>
// </Table>
