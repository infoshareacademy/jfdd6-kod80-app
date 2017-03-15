import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Media, Tabs, Tab, Grid, Alert, Table} from 'react-bootstrap'


export default connect(
  state => ({
    concerts: state.concerts
  })
)(
  class UsercardView extends React.Component {
    render() {
      const {concerts} = this.props;
      const myConcertsTab = (
      <Table striped>
        <thead>
        <tr>
          <th>Zespół</th>
          <th>Miejscowość</th>
          <th>Data</th>
        </tr>
        </thead>
        <tbody>
        {
          concerts.data ?
            concerts.data.map(
              concert => (
                <tr key={concert.id}>
                  <td>
                    <Link to={'/koncerty/' + concert.id}>{concert.band}</Link>
                  </td>
                  <td>{concert.city}</td>
                  <td>{concert.date}</td>
                </tr>
              )
            ) : null
        }
        </tbody>
      </Table>
      );

      const myAccountTab = (  <div>
        <Media>
          <Media.Left>
            <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Media Heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Media.Body>
        </Media>
      </div>);

      return (
        <Grid>
          {
            concerts.fetching ?
              <Alert bsStyle="warning">
                <strong>Fetching concerts!</strong>
              </Alert> : null
          }
          {
            concerts.error ?
              <Alert bsStyle="danger">
                <strong>{concerts.error}</strong>
              </Alert> : null
          }

          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Moje koncerty"> {myConcertsTab}</Tab>
            <Tab eventKey={2} title="Moje dane">{myAccountTab}</Tab>
            <Tab eventKey={3} title="Tab 3" >Tab 3 content</Tab>
          </Tabs>


        </Grid>
      )
    }
  }
)