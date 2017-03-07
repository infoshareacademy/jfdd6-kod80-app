import React from 'react';
import Attractions from './attractions-view'
import search from '../search/search'
import SearchRowResult from './search-view-row-result'

import database from '../data/data-testowa-baza-danych.json'

const ConcertCard = props => {
  const concertId = props.params.concertId

  return (
      <div>
        <h1>Stronaaaaaaaaaaaaaaaaaa Koncertu Do Zrobienia</h1>
      <Attractions />
    </div>
  )
}

export default ConcertCard;




