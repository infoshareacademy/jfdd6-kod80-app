// ACTION TYPES (there may be more than one)
const FETCH__BEGIN = 'concerts/FETCH__BEGIN'
const FETCH__SUCCESS = 'concerts/FETCH__SUCCESS'
const FETCH__FAIL = 'concerts/FETCH__FAILED'

// const SAVE_STUDENT = 'concerts/SAVE_STUDENT'

// ACTION CREATOR - in this file it is a THUNK
export const fetchConcerts = () => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    process.env.PUBLIC_URL + '/data/concerts.json'
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
            error: 'Malformed JSON response CONCERTS'
          })
        )
      }
      throw new Error('Connection error CONCERTS')
    }
  ).catch(
    error => dispatch({
      type: FETCH__FAIL,
      error: error.message
    })
  )
}

// export const saveStudent = (name, surname) => ({
//   type: SAVE_STUDENT,
//   name, surname
// })

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