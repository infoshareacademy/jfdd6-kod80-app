import React from 'react';
import {connect} from 'react-redux'
import {Grid, Table, Alert, Button, ProgressBar} from 'react-bootstrap'
import {ReactBootstrapSlider} from 'react-bootstrap-slider'

import {changeDistance, resetDistance} from '../state/distance-changer'


//============== wzór na obliczenie odległości od punktu do punktu po współrzędnych ============================
const calculateDistance = (latA, lonA, latB, lonB) => {
  return (Math.sqrt((Math.pow((parseFloat(latB) - parseFloat(latA)), 2))
      + (Math.pow((Math.cos((parseFloat(latA) * Math.PI) / 180) * (parseFloat(lonB) - parseFloat(lonA))), 2))))
    * (40075.704 / 360);
}
  // http://vbest.com.pl/gps/?lat=54.4099607&lng=18.5604337&zom=17&mt=ROADMAP#przesun
  // Klub B90 "latitude": "54.3641295", "longitude": "18.6478889"
  // Gdański Teatr Szekspirowski "latitude": "54.3477652", "longitude": "18.6489656"
  // Stadion ENERGA Gdańsk "latitude": "54.3907065", "longitude": "18.6385357"
  // Ergo Arena "latitude": "54.42559", "longitude": "18.5840682"
//============== wzór na obliczenie odległości od punktu do punktu po współrzędnych ============================


export default connect(
  state => ({
    concerts: state.concerts,
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
)(
  function ConcertCard(props) {

    const { attractions, hotels, restaurants, taxis, distanceFromGoal, maxValue, minValue } = props
//https://www.npmjs.com/package/react-bootstrap-slider

    return (
      <Grid>
        <h1>Koncert {props.params.koncertId}</h1>

        <ReactBootstrapSlider
          value={distanceFromGoal}
          step={changeDistance}
          max={maxValue}
          min={minValue}/>

        <input
          type="range"
          value={distanceFromGoal}
          min={minValue}
          max={maxValue}
          onInput={this.props.handleChange}
          step={1} />

        <Table striped>
          <thead>
          <tr>
            <th>Zespół</th>
            <th>Typ muzyki</th>
            <th>Miejsce</th>
            <th>Data</th>
          </tr>
          </thead>
          <tbody>
          {
            props.concerts.data ?
              props.concerts.data.filter(
                concert =>
                concert.id === parseInt(props.params.koncertId, 10)
              ).map(
                concert => (
                  <tr key={concert.id}>
                    <td>{concert.band}</td>
                    <td>{concert.typeOfMusic}</td>
                    <td>{concert.place}</td>
                    <td>{concert.date}</td>
                  </tr>
                )
              )
              : null
          }
          </tbody>
        </Table>
        <hr/>


        <div>
          {
            props.attractions.fetching ?
              <Alert bsStyle="warning">
                <strong>Fetching attractions!</strong>
              </Alert> : null
          }
          {
            props.attractions.error ?
              <Alert bsStyle="danger">
                <strong>{attractions.error}</strong>
              </Alert> : null
          }
          {
            props.restaurants.fetching ?
              <Alert bsStyle="warning">
                <strong>Fetching restaurants!</strong>
              </Alert> : null
          }
          {
            props.restaurants.error ?
              <Alert bsStyle="danger">
                <strong>{restaurants.error}</strong>
              </Alert> : null
          }
          {
            props.hotels.fetching ?
              <Alert bsStyle="warning">
                <strong>Fetching hotels!</strong>
              </Alert> : null
          }
          {
            props.hotels.error ?
              <Alert bsStyle="danger">
                <strong>{hotels.error}</strong>
              </Alert> : null
          }
          {
            props.taxis.fetching ?
              <Alert bsStyle="warning">
                <strong>Fetching taxis!</strong>
              </Alert> : null
          }
          {
            props.taxis.error ?
              <Alert bsStyle="danger">
                <strong>{taxis.error}</strong>
              </Alert> : null
          }
        </div>

        <h2>W promieniu {props.distanceFromGoal} km możesz znaleźć...</h2>

        <ProgressBar
          now={props.distanceFromGoal}
          max={props.maxValue}
          min={props.minValue}
        />

        <Button onClick={() => props.resetDistance()}>Wróć na początek</Button>
        <Button onClick={() => props.changeDistance(1)}>Zwiększ odległość</Button>

        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <h2>Atrakcje</h2>
            <Table striped>
              <tbody>
              {
                props.attractions.data ?
                  props.attractions.data.map(
                    attraction => ({
                      ...attraction,
                      distance: parseFloat(calculateDistance(
                        attraction.latitude,
                        attraction.longitude,
                        props.concerts.data ?
                          props.concerts.data.filter(
                            concert =>
                            concert.id === parseInt(props.params.koncertId, 10)
                          ).map(
                            concert => concert.latitude
                          )
                          : 'problem z szerokością geograficzną koncertu',
                        props.concerts.data ?
                          props.concerts.data.filter(
                            concert =>
                            concert.id === parseInt(props.params.koncertId, 10)
                          ).map(
                            concert => concert.longitude
                          )
                          : 'problem z długością geograficzną koncertu'
                      ).toFixed(2))
                    })
                  ).filter(
                    attraction => {
                      console.log(attraction, distanceFromGoal)
                      return attraction.distance < distanceFromGoal
                    }
                  ).sort(
                    (attraction1, attraction2) => attraction1.distance - attraction2.distance
                  ).map(
                    attraction => (
                      <tr key={attraction.id}>
                        <td>
                          <dl>
                            <dd><strong>{attraction.name}</strong></dd>
                            <dd>{attraction.address}</dd>
                            <dd>{attraction.hours}</dd>
                            <dd>{attraction.website !== 'no website' ?
                              <a href={attraction.website} target="_blank">Strona WWW</a> : 'Brak strony WWW'}
                            </dd>
                            <dd key={attraction.id}>odległość: {attraction.distance}
                              km
                            </dd>
                          </dl>
                        </td>
                      </tr>
                    )
                  ) : null
              }
              </tbody>
            </Table>
          </div>

          <div className="col-xs-12 col-sm-3">
            <h2>Restauracje</h2>
            <Table striped>
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
                            concert.id === parseInt(props.params.koncertId, 10)
                          ).map(
                            concert => concert.latitude
                          )
                          : 'problem z szerokością geograficzną restauracji',
                        props.concerts.data ?
                          props.concerts.data.filter(
                            concert =>
                            concert.id === parseInt(props.params.koncertId, 10)
                          ).map(
                            concert => concert.longitude
                          )
                          : 'problem z długością geograficzną restauracji'
                    ).toFixed(2))
                    })
                  ).filter(
                    restaurant => {
                      console.log(restaurant, distanceFromGoal)
                      return restaurant.distance  < distanceFromGoal
                    }
                  ).sort(
                    (restaurant1, restaurant2) => restaurant1.distance - restaurant2.distance
                  ).map(
                    restaurant => (
                      <tr key={restaurant.id}>
                        <td>
                          <dl>
                            <dd><strong>{restaurant.name}</strong></dd>
                            <dd>{restaurant.address}</dd>
                            <dd>{restaurant.hours}</dd>
                            <dd>{restaurant.phone}</dd>
                            <dd>{restaurant.website !== 'no website' ?
                              <a href={restaurant.website} target="_blank">Strona WWW</a> : 'Brak strony WWW'}
                            </dd>
                            <dd key={restaurant.id}>odległość: {restaurant.distance}
                              km
                            </dd>
                          </dl>
                        </td>
                      </tr>
                    )
                  ) : null
              }
              </tbody>
            </Table>
          </div>

          <div className="col-xs-12 col-sm-3">
            <h2>Hotele</h2>
            <Table striped>
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
                          concert.id === parseInt(props.params.koncertId, 10)
                        ).map(
                          concert => concert.latitude
                        )
                        : 0,
                      props.concerts.data ?
                        props.concerts.data.filter(
                          concert =>
                          concert.id === parseInt(props.params.koncertId, 10)
                        ).map(
                          concert => concert.longitude
                        )
                        : 0,).toFixed(2))
                    })
                  ).filter(
                    hotel => {
                      console.log(hotel.distanceFromGoal)
                      return hotel.distance < distanceFromGoal
                    }
                  ).sort(
                    (hotel1, hotel2) => hotel1.distance - hotel2.distance
                  ).map(
                    hotel => (
                      <tr key={hotel.id}>
                        <td>
                          <dl>
                            <dd><strong>{hotel.name}</strong></dd>
                            <dd>{hotel.address}</dd>
                            <dd>{hotel.phone}</dd>
                            <dd>{hotel.website !== 'no website' ?
                              <a href={hotel.website} target="_blank">Strona WWW</a> : 'Brak strony WWW'}
                            </dd>
                            <dd key={hotel.id}>odległość: {hotel.distance}
                              km
                            </dd>
                          </dl>
                        </td>
                      </tr>
                    )
                  ) : null
              }
              </tbody>
            </Table>
          </div>

          <div className="col-xs-12 col-sm-3">
            <h2>Komunikacja</h2>
            <Table striped>
              <tbody>
              {
                props.taxis.data ?
                  props.taxis.data.map(
                    taxi => (
                      <tr key={taxi.id}>
                        <td>
                          <dl>
                            <dd><strong>{taxi.name}</strong></dd>
                            <dd>{taxi.phone}</dd>
                          </dl>
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
)