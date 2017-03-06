import React from 'react';
import Attractions from './attractions-view'
import search from '../search/search'
import SearchRowResult from './search-view-row-result'

import database from '../data/data-testowa-baza-danych.json'

const ConcertCard = props => {
  const concertId = props.params.concertId
  console.log(concertId)
  const searchValues = {
    concert_id: concertId,
    date: "",
    places: "",
    music: "",
    concert: ""
  }

  const searchResult = search(database, searchValues);
  return (
    <div>
      <h1>props.</h1>
      <ul>
        {
          searchResult
            .map( concert => <SearchRowResult key={concert.id} concert={concert} /> )
        }
      </ul>

      <Attractions />
    </div>
  )
}

export default ConcertCard;
