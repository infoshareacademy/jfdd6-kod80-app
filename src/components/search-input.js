import React from 'react'
import {connect} from 'react-redux'

import {FormGroup, FormControl, ControlLabel, Grid} from 'react-bootstrap'
import styles from '../styles/search-input.css'

import {setTypeOfMusicSearch, setBandNameSearch} from '../state/concert-filter.js'

export default connect (
    state => ({
    }),
    dispatch => ( {
        filterTypeOfMusic: (typeOfMusic) => dispatch( setTypeOfMusicSearch(typeOfMusic) ),
        setBandNameSearch: (band) => dispatch( setBandNameSearch(band) )
    })
)(
    class SearchInputCreator extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                typeOfMusic: "",
                band: ""
            }
        }
        render() {
            const {
              filterTypeOfMusic,
              setBandNameSearch
              } = this.props

            return(
            <form  onSubmit={(event) => {
              event.preventDefault()
              filterTypeOfMusic(this.state.typeOfMusic)
              setBandNameSearch(this.state.band)
            }

            }>
                <Grid>
                  <FormGroup className="col-sm-5 col-md-3">
                    <ControlLabel>Rodzaj muzyki</ControlLabel>
                      <FormControl
                        placeholder='Rodzaj muzyki np.: Rock'
                        value={this.state.typeOfMusic}
                        bsSize="lg"
                        onChange={(event) => this.setState({typeOfMusic: event.target.value})}/>
                    </FormGroup>
                  <FormGroup className="col-sm-5 col-md-3">
                    <ControlLabel>nazwa zespołu/koncertu</ControlLabel>
                      <FormControl placeholder='Nazwa koncertu/zespołu'

                                   value={this.state.band}
                                   onChange={(event) => this.setState({band: event.target.value})}/>
                    </FormGroup>
                  <FormGroup className="col-sm-2 col-md-3">
                    <button className="szukaj-button">Szukaj</button>
                </FormGroup>
                </Grid>
              </form>
              )
        }
    }
)



