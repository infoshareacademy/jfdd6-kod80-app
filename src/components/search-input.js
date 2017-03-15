import React from 'react'
import {connect} from 'react-redux'

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
                <form onSubmit={(event) => {
                    event.preventDefault()
                    filterTypeOfMusic(this.state.typeOfMusic)
                    setBandNameSearch(this.state.band)
                }

                }>
                    <input placeholder='Rodzaj muzyki np.: Rock' value={this.state.typeOfMusic}
                           onChange={(event) => this.setState({typeOfMusic: event.target.value})}/>
                    <input placeholder='Nazwa koncertu/zespołu' value={this.state.band}
                           onChange={(event) => this.setState({band: event.target.value})}/>
                    <button
                    >Szukaj</button>
                </form> )


        }
    }


)



