//to co w counter-view.js

import React from 'react';
import SearchRowResult from './search-view-row-result'
import { connect } from 'react-redux'
import { fetchConcerts } from '../state/concerts'

import {Grid} from 'react-bootstrap'


class SearchView extends React.Component {


  componentWillMount() {
    this.props.fetchConcerts()
  }

  render() {
    const {
      concerts
    } = this.props

    console.log( 'Props', this.props )

    return (
      <div>
        <div>Tu bedzie wyszukiwarka</div>



        <div>
          <h1>Wyniki Wyszukania</h1>

        <div className="search-result">

            <div>
          {
            concerts ? concerts
              .map(concert => <SearchRowResult key={concert.id} concert={concert} />
              ) : <p>Czekamy na dane</p>
          }
            </div>
        </div>

        </div>

      </div>
    )
  }
}

export default connect(
  state => ({
    concerts: state.search.data
  }),
  dispatch => ({
    fetchConcerts: () => dispatch( fetchConcerts() )
  })
)(SearchView)


