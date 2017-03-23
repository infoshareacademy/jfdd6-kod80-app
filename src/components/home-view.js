import React from 'react'
import {Grid} from 'react-bootstrap'
import Concerts from './concerts-view'


const Home = () => (
  <Grid>
    <h1>
      Witamy w SOUNDTRIP!
    </h1>
    <h2>
      Znajdź swój koncert i odwiedź wspaniałe miejsca w pobliżu...
    </h2>
<div>
    <Concerts/>
  </div>

  </Grid>
);

export default Home