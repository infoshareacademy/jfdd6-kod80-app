import React from 'react'
import {connect} from 'react-redux'

import {FormGroup, FormControl, ControlLabel, Grid} from 'react-bootstrap'
import '../styles/search-input.css'
import DatePicker from './datepicker'

import {setTypeOfMusicSearch, setBandNameSearch, setDateSinceSearch, setDateToSearch} from '../state/concert-filter.js'

export default connect (
    state => ({
    }),
    dispatch => ( {
        filterTypeOfMusic: (typeOfMusic) => dispatch( setTypeOfMusicSearch(typeOfMusic) ),
        setBandNameSearch: (band) => dispatch( setBandNameSearch(band) ),
        setDateSinceSearch : (dateSince) => dispatch( setDateSinceSearch(dateSince) ),
        setDateToSearch: (dateTo) => dispatch( setDateToSearch(dateTo) )
    })
)(
    class SearchInputCreator extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                typeOfMusic: "",
                band: "",
                dateSince: new Date('2000'),
                dateTo: ""
            }
        }
        render() {
            const {
              filterTypeOfMusic,
              setBandNameSearch,
              setDateSinceSearch,
              setDateToSearch
              } = this.props

            return(

              <div>

                <form
                  onSubmit={(event) => {
                    event.preventDefault()
                    filterTypeOfMusic(this.state.typeOfMusic)
                    setBandNameSearch(this.state.band)
                    setDateSinceSearch(this.state.dateSince)
                    setDateToSearch(this.state.dateTo)
                }
                }>


                  <FormGroup className="col-lg-3">
                    <ControlLabel>Rodzaj muzyki</ControlLabel>
                      <FormControl
                        placeholder='Rodzaj muzyki np.: Rock'
                        value={this.state.typeOfMusic}
                        onChange={(event) => this.setState({typeOfMusic: event.target.value})}/>
                    </FormGroup>
                  <FormGroup className="col-lg-3">
                    <ControlLabel>nazwa zespołu/koncertu</ControlLabel>
                      <FormControl placeholder='Nazwa koncertu/zespołu'
                                   value={this.state.band}
                                   onChange={(event) => this.setState({band: event.target.value})}/>
                    </FormGroup>
                  <FormGroup className="col-lg-3">
                    <ControlLabel>Data Koncertu</ControlLabel>
                    <DatePicker
                        setDateSinceSearch={(date) => this.setState({dateSince: date})}
                        setDateToSearch={(date) => this.setState({dateTo: date})}
                        />
                  </FormGroup>
                  <FormGroup className="col-lg-3 ">
                    <button className="szukaj-button">Szukaj</button>
                </FormGroup>


              </form>

              </div>
              )
        }
    }
)



