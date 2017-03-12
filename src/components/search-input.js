//lookFor to nazwa dispatcha, ktory ma sprawdzać czy wpisana w inpucie fraza znajduje sie w bazie
import React from 'react'
import {connect} from 'react-redux'

import {setTypeOfMusicSearch} from '../state/concert-filter.js'

const refreshTable = () => {
}

export default connect (
    state => ({
    }),
    dispatch => ( {
       //lookFor:(typeOfMusic, band) => dispatch({type: 'LOOK_FOR', typeOfMusic, band})
        filterTypeOfMusic: (typeOfMusic) => dispatch( setTypeOfMusicSearch(typeOfMusic) )
    })
)(
    class SearchInputCreator extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                typeOfMusic: '',
                band: ''
            }
        }
        render() {
            const {
              filterTypeOfMusic
              } = this.props

            return(
                <form onSubmit={(event) => {
                    event.preventDefault()
                    filterTypeOfMusic(this.state.typeOfMusic)
                }

                }>
                    <input placeholder='Rodzaj muzyki' value={this.state.typeOfMusic}
                           onChange={(event) => this.setState({typeOfMusic: event.target.value})}/>
                    <input placeholder='Nazwa koncertu' value={this.state.band}
                           onChange={(event) => this.setState({band: event.target.value})}/>

                    <button onClick={() => refreshTable()}>Szukaj</button>
                </form> )


        }
    }


)



