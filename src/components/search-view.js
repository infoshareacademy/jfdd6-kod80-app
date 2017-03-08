//to co w counter-view.js

import React from 'react';
import SearchRowResult from './search-view-row-result'
import { connect } from 'react-redux'


//parametry do wyszukiwania koncertow
let searchValues = {
  date: "",
  places: "",
  music: "",
  concert: ""
}

class SearchView extends React.Component {



  render() {
    return (
      <div>
        <div>Tu bedzie wyszukiwarka</div>
        <div>Wyniki Wyszukania</div>
        <ul>
          {
            this.props.concerts ?this.props.concerts
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
    concerts: state.concerts.concerts


  })
)(SearchView)


