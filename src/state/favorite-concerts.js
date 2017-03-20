const FETCH__BEGIN = 'user/FETCH__BEGIN'
const FETCH__SUCCESS = 'user/FETCH__SUCCESS'
const FETCH__FAIL = 'user/FETCH__FAILED'

export const fetchFavoriteConcerts = (accessToken=0, userId = '1') => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  console.log('FETCH***************************************')
  return fetch(
    'https://radiant-mountain-66074.herokuapp.com/api/users/1/favoriteItems?access_token=ABC1'
    //'https://radiant-mountain-66074.herokuapp.com/api/users/' + userId + '/favoriteItems?access_token=' + 'ABC1'// accessToken
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