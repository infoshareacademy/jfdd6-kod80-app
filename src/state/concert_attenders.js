const FETCH__BEGIN = 'concert_attenders/FETCH__BEGIN'
const FETCH__SUCCESS = 'concert_attenders/FETCH__SUCCESS'
const FETCH__FAIL = 'concert_attenders/FETCH__FAILED'

import Api from '../api'

export const fetchConcertAttenders = (accessToken, itemId ) => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  console.log("FETCH ATTENDERS!!!!!!!!!!!!!!!!!!!!")
  return fetch(
    Api.url + '/favoriteItems?filter[where][itemId]=' + itemId +'&access_token=' + accessToken
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

const initialState = {
  data: null,
  fetching: false,
  error: null
}

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