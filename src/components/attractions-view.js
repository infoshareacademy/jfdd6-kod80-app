import React from 'react';
// import {connect} from 'react-redux'
import {Grid, Table} from 'react-bootstrap'
import attractions from '../data/attractions.json'
import hotels from '../data/hotels.json'
import restaurants from '../data/restaurants.json'
import taxis from '../data/taxis.json'

const AttractionsView = () => (
  <Grid>
    <h1>Explore Gdańsk</h1>

    <div className="row">
      <div className="col-xs-3" >
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
                      <li>{attraction.website !== 'no website' ? <a href={attraction.website}>Website</a> : 'no website'}</li>
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
                      <li>{restaurant.website !== 'no website' ? <a href={restaurant.website}>Website</a> : 'no website'}</li>
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
export default AttractionsView;






