//to co w counter-view.js

import React from 'react';
import SearchRowResult from './search-view-row-result'
import { connect } from 'react-redux'
import { fetchConcerts } from '../state/concerts'
import {setTypeOfMusicSearch} from '../state/concert-filter.js'

import filter_concert from '../search/concert-filter.js'

import {Button} from 'react-bootstrap'

class SearchView extends React.Component {

  componentWillMount() {
    this.props.fetchConcerts()
  }

  render() {
    const {
      concerts,
      concertsSearchValues
    } = this.props

    console.log( 'Props', this.props )

    return (
      <div>
        <div>Tu bedzie wyszukiwarka</div>

        <Button onClick={ () => this.props.filterTypeOfMusic('Pop')}>Pop</Button>
        <Button onClick={ () => this.props.filterTypeOfMusic('Techno')}>Techno</Button>
        <Button onClick={ () => this.props.filterTypeOfMusic('Rock')}>Rock</Button>
        <Button onClick={ () => this.props.filterTypeOfMusic('Classic')}>Classic</Button>
        <Button onClick={ () => this.props.filterTypeOfMusic('Metal')}>Metal</Button>
        <div>Wyniki Wyszukania</div>
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
    filterTypeOfMusic: (typeOfMusic) => dispatch( setTypeOfMusicSearch(typeOfMusic) )
  })
)(SearchView)


