//to co w counter-view.js

import React from 'react';
import SearchRowResult from './search-view-row-result'
import { connect } from 'react-redux'
import { fetchConcerts } from '../state/concerts'
import SearchInputCreator from './search-input'

import filter_concert from '../search/concert-filter.js'

import {Button} from 'react-bootstrap'

class SearchView extends React.Component {

  componentWillMount() {
    this.props.fetchConcerts()
  }

  render() {
    const {
      concerts,
      concertsSearchValues,
    } = this.props

    console.log( 'Props', this.props )

    return (
      <div>
          <SearchInputCreator/>
        <h2>Wyniki Wyszukiwania:</h2>
        <ul>
          {
            concerts ? concerts
              .filter( filter_concert(concertsSearchValues) )
              .map(concert => <SearchRowResult key={concert.id} concert={concert} />
              ) : <p>Czekamy na dane</p>
          }
        </ul>

      </div>
    )
  }
}

export default connect(
  state => ({
    concerts: state.concerts.data,
    concertsSearchValues: state.concert_filter.concertsSearchValues
  }),
  dispatch => ({
    fetchConcerts: () => dispatch( fetchConcerts() ),
  })
)(SearchView)


