import React from 'react';
import { connect } from 'react-redux'
// import {connect} from 'react-redux'
import {Grid, Table, Button} from 'react-bootstrap'
import attractions from '../data/attractions.json'
import hotels from '../data/hotels.json'
import restaurants from '../data/restaurants.json'
import taxis from '../data/taxis.json'
// import concerts from '../data/concerts-gdansk.json'

import {changeDistance} from '../state/distance-filter'

const concertX = "54.3641295";
const concertY = "18.6478889";

const calculateDistance = (latA, lonA, latB, lonB) => {

  return (Math.sqrt((Math.pow((parseFloat(latB) - parseFloat(latA)), 2))
      + (Math.pow((Math.cos((parseFloat(latA) * Math.PI) / 180) * (parseFloat(lonB) - parseFloat(lonA))), 2))))
    * (40075.704 / 360);
  // http://vbest.com.pl/gps/?lat=54.4099607&lng=18.5604337&zom=17&mt=ROADMAP#przesun
  // Klub B90 "latitude": "54.3641295", "longitude": "18.6478889"
  // Gdański Teatr Szekspirowski "latitude": "54.3477652", "longitude": "18.6489656"
  // Stadion energa Gdańsk "latitude": "54.3907065", "longitude": "18.6385357"
  // Ergo Arena "latitude": "54.42559", "longitude": "18.5840682"

}

class AttractionsView extends React.Component {

  render () {
    const {changeDistance} = this.props

    return (
      <Grid>
        <h1>Explore Gdańsk</h1>

        <Button onClick={() => changeDistance(1)}>Increase limit</Button>
        <Button onClick={() => changeDistance(-1)}>Decrease limit</Button>

        <div className="row">
          <div className="col-xs-3">
            <h1>Attractions</h1>
            <Table striped>
              <thead>
              <tr>
                <th>Id</th>
                <th>Attraction</th>
              </tr>
              </thead>
              <tbody>
              {

                attractions.map(
                  attraction => (
                    <tr key={attraction.id}>
                      <td>{attraction.id}</td>
                      <td>
                        <ul>
                          <li>{attraction.name}</li>
                          <li>{attraction.address}</li>
                          <li>{attraction.hours}</li>
                          <li>{attraction.website !== 'no website' ?
                            <a href={attraction.website}>Website</a> : 'no website'}</li>
                          <li>{calculateDistance(attraction.latitude, attraction.longitude, concertX, concertY).toFixed(2)}
                            km
                          </li>
                        </ul>
                      </td>
                    </tr>
                  )
                )
              }
              </tbody>
            </Table>
          </div>

          <div className="col-xs-3">
            <h1>Restaurants</h1>
            <Table striped>
              <thead>
              <tr>
                <th>Id</th>
                <th>Restaurant</th>
              </tr>
              </thead>
              <tbody>
              {
                restaurants.map(
                  restaurant => (
                    <tr key={restaurant.id}>
                      <td>{restaurant.id}</td>
                      <td>
                        <ul>
                          <li>{restaurant.name}</li>
                          <li>{restaurant.address}</li>
                          <li>{restaurant.hours}</li>
                          <li>{restaurant.phone}</li>
                          <li>{restaurant.website !== 'no website' ?
                            <a href={restaurant.website}>Website</a> : 'no website'}</li>
                        </ul>
                      </td>
                    </tr>
                  )
                )
              }
              </tbody>
            </Table>
          </div>

          <div className="col-xs-3">
            <h1>Hotels</h1>
            <Table striped>
              <thead>
              <tr>
                <th>Id</th>
                <th>Hotel</th>
              </tr>
              </thead>
              <tbody>
              {
                hotels.map(
                  hotel => (
                    <tr key={hotel.id}>
                      <td>{hotel.id}</td>
                      <td>
                        <ul>
                          <li>{hotel.name}</li>
                          <li>{hotel.address}</li>
                          <li>{hotel.phone}</li>
                          <li>{hotel.website !== 'no website' ? <a href={hotel.website}>Website</a> : 'no website'}</li>
                        </ul>
                      </td>
                    </tr>
                  )
                )
              }
              </tbody>
            </Table>
          </div>

          <div className="col-xs-3">
            <h1>Taxis</h1>
            <Table striped>
              <thead>
              <tr>
                <th>Id</th>
                <th>Taxi</th>
              </tr>
              </thead>
              <tbody>
              {
                taxis.map(
                  taxi => (
                    <tr key={taxi.id}>
                      <td>{taxi.id}</td>
                      <td>
                        <ul>
                          <li>{taxi.name}</li>
                          <li>{taxi.phone}</li>
                        </ul>
                      </td>
                    </tr>
                  )
                )
              }
              </tbody>
            </Table>
          </div>


        </div>
      </Grid>
    )
  }
}

export default connect (
  state => (
    {
      distanceValue: state.distanceValue,
      distanceVal: state.distanceReducer
    }
  ),
  dispatch => (
    {
      changeDistance: (value) => dispatch(changeDistance(value))
    }
  )
)(AttractionsView)






