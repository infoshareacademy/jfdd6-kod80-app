import React from 'react';

import Attractions from './attractions-view'
// import concerts_gdansk from '../data/concerts-gdansk.json'

const ConcertCard = () => (
  <div>
    <div>Concert Card</div>
    <p> "id": 1,
      "band": "Piotr Rubik",
      "typeOfMusic": "Rock",
      "city": "Gdańsk",
      "date": "16/06/2017",
      "latitude": "54.3641295",
      "longitude": "18.6478889"
    </p>
    <Attractions />
  </div>
)

export default ConcertCard;
