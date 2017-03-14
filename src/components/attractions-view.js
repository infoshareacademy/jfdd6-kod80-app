import React from 'react';
import {connect} from 'react-redux'

import {Grid, Table, Alert} from 'react-bootstrap'

class AttractionsView extends React.Component {

  render() {

    const {attractions, hotels, restaurants, taxis}= this.props
// ============= WIDOK TAK NAPRWDE DO USUNIECIA WIEC NIE ZMIENIALEM NA POLSKI JEZYK ========================
    return (
      <Grid>
        <h1>Atrakcje w Gdańsku</h1>

        <div>
          {
            attractions.fetching ?
              <Alert bsStyle="warning">
                <strong>Fetching attractions!</strong>
              </Alert> : null
          }
          {
            attractions.error ?
              <Alert bsStyle="danger">
                <strong>{attractions.error}</strong>
              </Alert> : null
          }
          {
            restaurants.fetching ?
              <Alert bsStyle="warning">
                <strong>Fetching restaurants!</strong>
              </Alert> : null
          }
          {
            restaurants.error ?
              <Alert bsStyle="danger">
                <strong>{restaurants.error}</strong>
              </Alert> : null
          }
          {
            hotels.fetching ?
              <Alert bsStyle="warning">
                <strong>Fetching hotels!</strong>
              </Alert> : null
          }
          {
            hotels.error ?
              <Alert bsStyle="danger">
                <strong>{hotels.error}</strong>
              </Alert> : null
          }
          {
            taxis.fetching ?
              <Alert bsStyle="warning">
                <strong>Fetching taxis!</strong>
              </Alert> : null
          }
          {
            taxis.error ?
              <Alert bsStyle="danger">
                <strong>{taxis.error}</strong>
              </Alert> : null
          }
        </div>

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
                attractions.data ?
                  attractions.data.map(
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
                restaurants.data ?
                  restaurants.data.map(
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
                hotels.data ?
                  hotels.data.map(
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
                taxis.data ?
                  taxis.data.map(
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
    attractions: state.attractions,
    hotels: state.hotels,
    restaurants: state.restaurants,
    taxis: state.taxis
  })
)(AttractionsView)

