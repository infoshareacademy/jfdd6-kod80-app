import React from 'react';
import {Grid, Table} from 'react-bootstrap';


import concerts_gdansk from '../data/concerts-gdansk.json'


class SearchRowResult extends React.Component {

  render() {

    return (
      <Grid>
        <h1>Koncerty w Gdańsku</h1>
        <div className="row">
          <Table striped>
            <thead>
            <tr>
              <th>Id</th>
              <th>Concert</th>
            </tr>
            </thead>

            <tbody>
            {
              concerts_gdansk.map(
                concert_gdansk => (
                  <tr key={concert_gdansk.id}>
                    <td>{concert_gdansk.id}</td>
                    <td>{concert_gdansk.band}</td>
                    <td>{concert_gdansk.typeOfMusic}</td>
                    <td>{concert_gdansk.date}</td>
                  </tr>
                )
              )
            }
            </tbody>
          </Table>
        </div>
      </Grid>
    )
  }
}


export default SearchRowResult