import React from 'react'
import {Grid} from 'react-bootstrap'
import Concerts from './concerts-view'
import '../styles/style-home-view.css'


const Home = () => (
  <Grid>
    <div className="home-view-top">
    <h1>
      Witamy w SOUNDTRIP!
    </h1>

    <h2>
      Znajdź swój koncert i odwiedź wspaniałe miejsca w pobliżu...
    </h2>

    </div>


    <Concerts/>


  </Grid>
);

export default Home