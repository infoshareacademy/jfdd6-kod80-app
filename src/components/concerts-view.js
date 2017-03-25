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
      } = this.props;

      return (
        <div className="page-body">
          <Grid>
            <div className="info-about-page">
              <p>
                <span> Witaj w  SoundTrip! </span>
              </p>

              <p> Wyszukaj koncert wpisując w wyszukiwarce rodzaj interesującej Cię muzyki, nazwę zespołu lub datę koncertu</p>
            </div>

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
                  .filter(filter_concert(concertsSearchValues))
                  .sort(sortConcertByDate)
                  .map(
                    (concert, index) => (
              <Link to={'/koncerty/' + concert.id}
                    key={concert.id}
                    className="top-link-to-concert-card">

                  <div className="concerts-view"
                     key={concert.id}>

                      <div className="band-images">
                        <Image src={"data/images/" + concert.bandImages}
                               alt="zdjęcie zespołu"/>
                      </div>

                      <div className="about-concert">
                        <h1> {concert.band} </h1>

                        <span>{concert.typeOfMusic}</span>

                        <p>{concert.date} </p>

                        <p>{concert.place}{' / '}{concert.city}</p>
                      </div>

                      <Link to={'/koncerty/' + concert.id} className="link-to-concert-card" key={concert.id}> zobacz szczegóły</Link>

                  </div>
              </Link>
                )
              ) : null
            }
            </div>
          </Grid>
        </div>
      )
    }
  }
)