//lookFor to nazwa dispatcha, ktory ma sprawdzać czy wpisana w inpucie fraza znajduje sie w bazie
import React from 'react'
import {connect} from 'react-redux'

const refreshTable = () => {


}

export default connect (
    state => ({
        concerts: state.search.data
    }),
    dispatch => ( {
       lookFor:(typeOfMusic, band) => dispatch({type: 'LOOK_FOR', typeOfMusic, band})
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
            return(
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.lookFor(this.state.typeOfMusic, this.state.band)
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



