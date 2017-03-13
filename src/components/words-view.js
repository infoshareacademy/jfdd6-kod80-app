import React from 'react'
import { connect } from 'react-redux'
import { fetchSuccess } from '../state/words'

export default connect(
  state => ({
    words: state.words.values
  }),
  dispatch => ({
    fetchWords: () => dispatch(fetchSuccess())
  })
)(
  class WordsView extends React.Component {

    componentWillMount() {
      this.props.fetchWords()
    }

    render() {
      return (
        <div>
          <h1>Words</h1>
          {
            this.props.words ? this.props.words.map(
                (word, index) => <p key={index}>{word}</p>
              ) : <p>Waiting for data...</p>
          }
        </div>
      )
    }
  }
)
