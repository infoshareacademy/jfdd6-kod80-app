import React from 'react';
import Attractions from './attractions-view'
import search from '../search/search'
import SearchRowResult from './search-view-row-result'

import database from '../data/data-testowa-baza-danych.json'

const ConcertCard = props => {
  const concertId = props.params.concertId
  const concert = database.filter( concert => concert.id == concertId)

  return (
      <div key={concertId}>

        <h1 >concert</h1>
        <h2> koncertId: {concertId} </h2>

      <Attractions />
    </div>
  )
}

export default ConcertCard;




