import React from 'react';
import Attractions from './attractions-view'

const ConcertCard = props => (
  <div>
    <h1>props.</h1> {props.params.concertId}

    <Attractions />
  </div>
)

export default ConcertCard;
