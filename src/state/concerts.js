//to co w counter.js


const FETCH__BEGIN = 'concerts/FETCH__BEGIN'
const FETCH__SUCCESS = 'concerts/FETCH__SUCCESS'
const FETCH__FAIL = 'concerts/FETCH__FAILED'



export const fetchConcerts = () => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    process.env.PUBLIC_URL + '/data/concerts-gdansk.json'
  ).then(
    response => {
      if (response.ok) {
        return response.json().then(
          data => dispatch({
            type: FETCH__SUCCESS,
            data
          })
        ).catch(
          error => dispatch({
            type: FETCH__FAIL,
            error: 'Malformed JSON response'
          })
        )
      }
      throw new Error('Connection error')
    }
  ).catch(
    error => dispatch({
      type: FETCH__FAIL,
      error: error.message
    })
  )
}


const testConcerts = [
  {
    "id": 1,
    "band": "Radiohead",
    "type-of-music": "Pop",
    "city": "Warszawa",
    "date": "23/08/2017"
  },
  {
    "id": 2,
    "band": "Bon Jovi",
    "type-of-music": "Metal",
    "city": "Kraków",
    "date": "05/08/2017"
  }
  ]

const initialState = {
  data: null,
  fetching: false,
  error: null
}

// const reducer = ( state = initialState, action = {}) => {
//   switch (action.type) {
//     case 'FETCH_CONCERTS':
//       return {
//         ...state,
//         concerts: testConcerts
//       }
//     default: return state
//   }
// }
//
// export default reducer

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH__BEGIN:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case FETCH__SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false
      }
    case FETCH__FAIL:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    default:
      return state
  }
}
