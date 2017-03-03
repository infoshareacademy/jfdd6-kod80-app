import React from 'react';
import { connect } from 'react-redux'
import { Grid, Table } from 'react-bootstrap'
import attractionsDb from '../data/data-attractions.json'

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
            </tr>
          )
        )
      }
      </tbody>
    </Table>
  </Grid>
)
export default Attractions;






