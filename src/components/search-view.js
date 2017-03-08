//to co w counter-view.js

import React from 'react';
import search from '../search/search'
import SearchRowResult from './search-view-row-result'
import MainSearch from './search-input'

//parametry do wyszukiwania koncertow
let searchValues = {
  date: "",
  places: "",
  music: "",
  concert: ""
}

class SearchView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    concerts: null
    }
  }

  componentWillMount() {
    fetch(
      process.env.PUBLIC_URL + '/data/data-testowa-baza-danych.json'
    ).then(
      response => response.json()
    ).then(
      concerts => this.setState({ concerts })
    )
  }

  render() {
    return (
      <div>
        <div>Tu bedzie wyszukiwarka</div>
        <div>Wyniki Wyszukania</div>
        <ul>
          {
            this.state.concerts ?this.state.concerts
              .map(concert => <SearchRowResult key={concert.id} concert={concert} />
              ) : <p>Czekamy na dane</p>
          }
        </ul>
      </div>
    )
  }
}

export default SearchView


