import React from 'react';
import Attractions from './Attractions-View'


const ConcertCard = (props) => (
  <div>
    <h1>Concert id: {props.params.concertId}</h1>
    <Attractions concertId={parseInt(props.params.concertId)} />
  </div>
)

export default ConcertCard;
