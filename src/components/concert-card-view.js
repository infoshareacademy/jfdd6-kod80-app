import React from 'react';
import Attractions from './attractions-view'
import search from '../search/search'
import SearchRowResult from './search-view-row-result'

import {Button} from 'react-bootstrap'

import database from '../data/data-testowa-baza-danych.json'

const ConcertCard = props => {
  const concertId = props.params.concertId
  const concert = database.filter( concert => concert.id == concertId)[0]

  console.log(concert)

  return (
      <div key={concertId}>

        <h1 >{concert.Band}</h1>
        <h2> {concert.City} {concert.Date} </h2>

        <Button  bsStyle="danger" bsSize="large">Kup</Button>

      <Attractions />
    </div>
  )
}

export default ConcertCard;




