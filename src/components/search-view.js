//to co w counter-view.js

import React from 'react';
import SearchRowResult from './search-view-row-result'
import { connect } from 'react-redux'
import { fetchConcerts } from '../state/concerts'


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

        <div>Wyniki Wyszukania</div>

        <ul>
          {
            concerts ? concerts
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
    concerts: state.concerts.data
  }),
  dispatch => ({
    fetchConcerts: () => dispatch( fetchConcerts() )
  })
)(SearchView)


