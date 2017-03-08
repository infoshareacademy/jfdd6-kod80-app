import React from 'react';
import { connect } from 'react-redux'
import { Grid, Table } from 'react-bootstrap'
import attractionsDb from '../../public/data/data-attractions.json'

const Attractions = () => (
  <Grid>This is sooo much attractions

    <Table striped>
      <thead>
      <tr>
        <th>Id</th>
        <th>City</th>
        <th>Restaurant 1</th>
        <th>Restaurant 1 hours</th>
        <th>Restaurant 1 webpage</th>
        <th>Restaurant 2</th>
        <th>Restaurant 2 hours</th>
        <th>Restaurant 2 webpage</th>
        <th>Restaurant 3</th>
        <th>Restaurant 3 hours</th>
        <th>Restaurant 3 webpage</th>
        <th>Sight 1</th>
        <th>Sight 1 hours</th>
        <th>Sight 1 webpage</th>
        <th>Sight 2</th>
        <th>Sight 2 hours</th>
        <th>Sight 2 webpage</th>
        <th>Overnight 1</th>
        <th>Overnight 1 webpage</th>
        <th>Overnight 2</th>
        <th>Overnight 2 webpage</th>
        <th>Commute</th>
        <th>Commute Webpage</th>
        <th>Taxi</th>
        <th>Taxi Phone</th>
      </tr>
      </thead>
      <tbody>
      {
        attractionsDb.map(
          attraction => (
            <tr key={attraction.id}>
              <td>{attraction.id}</td>
              <td>{attraction.city}</td>
              <td>{attraction.rest_1}</td>
              <td>{attraction.rest_1_hours}</td>
              <td>{attraction.rest_1_webpage}</td>
              <td>{attraction.rest_2}</td>
              <td>{attraction.rest_2_hours}</td>
              <td>{attraction.rest_2_webpage}</td>
              <td>{attraction.rest_3}</td>
              <td>{attraction.rest_3_hours}</td>
              <td>{attraction.rest_3_webpage}</td>
              <td>{attraction.sight_1}</td>
              <td>{attraction.sight_1_hours}</td>
              <td>{attraction.sight_1_webpage}</td>
              <td>{attraction.sight_2}</td>
              <td>{attraction.sight_2_hours}</td>
              <td>{attraction.sight_2_webpage}</td>
              <td>{attraction.overnight_1}</td>
              <td>{attraction.overnight_1_webpage}</td>
              <td>{attraction.overnight_2}</td>
              <td>{attraction.overnight_2_webpage}</td>
              <td>{attraction.commute_1}</td>
              <td>{attraction.commute_1_webpage}</td>
              <td>{attraction.taxi_1}</td>
              <td>{attraction.taxi_1_phone}</td>
            </tr>
          )
        )
      }
      </tbody>
    </Table>
  </Grid>
)
export default Attractions;






