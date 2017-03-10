import React from 'react';
import Attractions from './attractions-view'
import search from '../search/search'
import SearchRowResult from './search-view-row-result'

import {Button, Grid} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'

import database from '../../public/data/concerts-gdansk.json'

const ConcertCard = props => {
  const concertId = props.params.concertId
  const concert = database.filter( concert => concert.id == concertId)[0]

  return (
      <Grid key={concertId}>

        <h1 >{concert.band}</h1>
        <h2> {concert.city} {concert.date} </h2>
          <LinkContainer to={{ pathname: '/buy-ticket/3' }}>
            <Button  bsStyle="danger" bsSize="large">Kup Bilet !</Button>
          </LinkContainer>

      <Attractions />
    </Grid>
  )
}

export default ConcertCard;




