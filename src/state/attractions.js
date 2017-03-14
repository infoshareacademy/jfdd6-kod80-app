// ACTION TYPES (there may be more than one)
const FETCH__BEGIN = 'attractions/FETCH__BEGIN'
const FETCH__SUCCESS = 'attractions/FETCH__SUCCESS'
const FETCH__FAIL = 'attractions/FETCH__FAILED'

// ACTION CREATOR - in this file it is a THUNK
export const fetchAttractions = () => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    process.env.PUBLIC_URL + '/data/attractions.json'
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
            error: 'Malformed JSON response ATTRACTIONS'
          })
        )
      }
      throw new Error('Connection error ATTRACTIONS')
    }
  ).catch(
    error => dispatch({
      type: FETCH__FAIL,
      error: error.message
    })
  )
}

// INITIAL VALUE
const initialState = {
  data: null,
  fetching: false,
  error: null
}

// REDUCER
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