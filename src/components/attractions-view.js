import React from 'react';
import {connect} from 'react-redux'
import {Grid, Table, Button, ProgressBar} from 'react-bootstrap'
import attractions from '../data/attractions.json'
import hotels from '../data/hotels.json'
import restaurants from '../data/restaurants.json'
import taxis from '../data/taxis.json'
import {changeDistance, resetDistance} from '../state/distance-changer'

const calculateDistance = (latA, lonA, latB, lonB) => {
  return (Math.sqrt((Math.pow((parseFloat(latB) - parseFloat(latA)), 2))
      + (Math.pow((Math.cos((parseFloat(latA) * Math.PI) / 180) * (parseFloat(lonB) - parseFloat(lonA))), 2))))
    * (40075.704 / 360);
  // http://vbest.com.pl/gps/?lat=54.4099607&lng=18.5604337&zom=17&mt=ROADMAP#przesun
  // Klub B90 "latitude": "54.3641295", "longitude": "18.6478889"
  // Gdański Teatr Szekspirowski "latitude": "54.3477652", "longitude": "18.6489656"
  // Stadion ENERGA Gdańsk "latitude": "54.3907065", "longitude": "18.6385357"
  // Ergo Arena "latitude": "54.42559", "longitude": "18.5840682"
}

class Attractions extends React.Component {



  render() {
    const {concerts, attractions, hotels, restaurants, taxis, changeDistance, resetDistance, distanceFromGoal} = this.props

    console.log('****************************************88')
    console.log(props.concertId)
    console.log(attractions)
    console.log(concerts)


    return (
      <Grid>

        <h2>Within {props.distanceFromGoal} km you will find near...</h2>

        <ProgressBar
          now={props.distanceFromGoal}
          max={props.maxValue}
          min={props.minValue}
        />

        <Button onClick={() => resetDistance()}>Reset distance</Button>
        <Button onClick={() => changeDistance(1)}>Increase distance</Button>

        <div className="row">
          <div className="col-xs-3">
            <h2>Attractions</h2>
            <Table striped>
              <thead>
              <tr>
                <th>Id</th>
                <th>Attraction</th>
              </tr>
              </thead>
              <tbody>
              {
                props.attractions.data ?
                  props.attractions.data.map(
                    attraction => ({
                      ...attraction,
                      distance: parseFloat(calculateDistance(
                        attraction.latitude,
                        attraction.longitude,
                        props.concerts ?
                          props.concerts.filter(
                            concert =>
                            concert.id === parseInt(props.concertId, 10)
                          ).map(
                            concert => concert.latitude
                          )
                          : 'problem z concert lati',
                        props.concerts.data ?
                          props.concerts.filter(
                            concert =>
                            concert.id === parseInt(props.concertId, 10)
                          ).map(
                            concert => concert.longitude
                          )
                          : 'problem z concert longi'
                      ).toFixed(2))
                    })
                  ).filter(
                    attraction => {
                      console.log(attraction, distanceFromGoal)
                      return attraction.distance < distanceFromGoal
                    }
                  ).map(
                    attraction => (
                      <tr key={attraction.id}>
                        <td>{attraction.id}</td>
                        <td>
                          <ul>
                            <li>{attraction.name}</li>
                            <li>{attraction.address}</li>
                            <li>{attraction.hours}</li>
                            <li>{attraction.website !== 'no website' ?
                              <a href={attraction.website}>Website</a> : 'no website'}
                            </li>
                            <li key={attraction.id}>distance: {attraction.distance}
                              km
                            </li>
                          </ul>
                        </td>
                      </tr>
                    )
                  ) : null
              }
              </tbody>
            </Table>
          </div>

          <div className="col-xs-3">
            <h2>Restaurants</h2>
            <Table striped>
              <thead>
              <tr>
                <th>Id</th>
                <th>Restaurant</th>
              </tr>
              </thead>

              <tbody>
              {
                props.restaurants.data ?
                  props.restaurants.data.map(
                    restaurant => ({
                      ...restaurant,
                      distance: parseFloat(calculateDistance(
                        restaurant.latitude,
                        restaurant.longitude,
                        props.concerts.data ?
                          props.concerts.data.filter(
                            concert =>
                            concert.id === parseInt(props.concertId, 10)
                          ).map(
                            concert => concert.latitude
                          )
                          : 'problem z rest lati',
                        props.concerts.data ?
                          props.concerts.data.filter(
                            concert =>
                            concert.id === parseInt(props.concertId, 10)
                          ).map(
                            concert => concert.longitude
                          )
                          : 'problem z rest longi'
                      ).toFixed(2))
                    })
                  ).filter(
                    restaurant => {
                      console.log(restaurant, distanceFromGoal)
                      return restaurant.distance < distanceFromGoal
                    }
                  ).map(
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
                              <a href={restaurant.website}>Website</a> : 'no website'}
                            </li>
                            <li key={restaurant.id}>distance: {restaurant.distance}
                              km
                            </li>
                          </ul>
                        </td>
                      </tr>
                    )
                  ) : null
              }
              </tbody>


            </Table>
          </div>

          <div className="col-xs-3">
            <h2>Hotels</h2>
            <Table striped>
              <thead>
              <tr>
                <th>Id</th>
                <th>Hotel</th>
              </tr>
              </thead>
              <tbody>
              {
                props.hotels.data ?
                  props.hotels.data.map(
                    hotel => ({
                      ...hotel,
                      distance: parseFloat(calculateDistance(
                        hotel.latitude,
                        hotel.longitude,
                        props.concerts.data ?
                          props.concerts.data.filter(
                            concert =>
                            concert.id === parseInt(props.concertId, 10)
                          ).map(
                            concert => concert.latitude
                          )
                          : 'problem z concert lati',
                        props.concerts.data ?
                          props.concerts.data.filter(
                            concert =>
                            concert.id === parseInt(props.concertId, 10)
                          ).map(
                            concert => concert.longitude
                          )
                          : 'problem z concert longi'
                      ).toFixed(2))
                    })
                  ).filter(
                    hotel => {
                      console.log(hotel, distanceFromGoal)
                      return hotel.distance < distanceFromGoal
                    }
                  ).map(
                    hotel => (
                      <tr key={hotel.id}>
                        <td>{hotel.id}</td>
                        <td>
                          <ul>
                            <li>{hotel.name}</li>
                            <li>{hotel.address}</li>
                            <li>{hotel.phone}</li>
                            <li>{hotel.website !== 'no website' ?
                              <a href={hotel.website}>Website</a> : 'no website'}
                            </li>
                            <li key={hotel.id}>distance: {hotel.distance}
                              km
                            </li>
                          </ul>
                        </td>
                      </tr>
                    )
                  ) : null
              }
              </tbody>
            </Table>
          </div>

          <div className="col-xs-3">
            <h2>Taxis</h2>
            <Table striped>
              <thead>
              <tr>
                <th>Id</th>
                <th>Taxi</th>
              </tr>
              </thead>
              <tbody>
              {
                props.taxis.data ?
                  props.taxis.data.map(
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
                  ) : null
              }
              </tbody>
            </Table>
          </div>
        </div>
      </Grid>
    )
  }
}
export default connect(
  state => ({
     concerts: state.concerts.data,
    attractions: state.attractions,
    hotels: state.hotels,
    restaurants: state.restaurants,
    taxis: state.taxis,
    distanceFromGoal: state.distanceChanger.distanceFromGoal,
    maxValue: state.distanceChanger.maxValue,
    minValue: state.distanceChanger.minValue
  }),
  dispatch => ({
    changeDistance: (value) => dispatch(changeDistance(value)),
    resetDistance: (value) => dispatch(resetDistance(value))
  })
) (Attractions)






