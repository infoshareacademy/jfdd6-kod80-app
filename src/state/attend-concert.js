import Api from '../api'

const ATTEND_CONCERT = 'attend-concert/ATTEND_CONCERT'
const LEAVE_CONCERT = 'attend-concert/LEAVE_CONCERT'
const FETCH__BEGIN = 'attend-concert/FETCH__BEGIN'
const FETCH__SUCCESS = 'attend-concert/FETCH__SUCCESS'
const FETCH__FAIL = 'attend-concertFETCH__FAILED'

export const attendConcert = (concertId, userId, accessToken) => dispatch => fetch(
  Api.url + '/users/' + userId + '/favoriteItems?access_token=' + accessToken, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      itemId: concertId,
      itemType: 'concert',
    })
  }
).then(
  response => response.json()
).then(
  data => dispatch({
    type: ATTEND_CONCERT,
    concertId,
    favId: data.id
  })
)

const deleteConcert = (favId, userId, accessToken) => fetch(
  Api.url + '/users/' + userId + '/favoriteItems?access_token=' + accessToken
).then(
  response => {
    if (response.ok) {
      return response.json().then(
        data => {
          console.log(data.filter(favItem => favItem.itemId === favId).map(item => item.id))
          return data.filter(favItem => favItem.itemId === favId).map(item => item.id)
        }
      ).then(
        idsTable => idsTable.forEach(
          favId => {
            console.log(favId)
            return fetch(
              Api.url + '/users/' + userId + '/favoriteItems/' + favId + '?access_token=' + accessToken, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            )
          }
        )
      )
    }
  })






export const fetchFavoriteConcerts = (accessToken, userId) => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    Api.url + '/users/' + userId + '/favoriteItems?access_token=' + accessToken
  ).then(
    response => {
      if (response.ok) {
        return response.json().then(
          data =>  {
            dispatch({
            type: FETCH__SUCCESS,
            data
          })
          data.forEach( concert => dispatch({
            type: ATTEND_CONCERT,
            concertId: concert.itemId
          }) )

      }
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

export const leaveConcert = (favId, userId, accessToken, injectedFetch = fetch) => dispatch =>  injectedFetch(
  deleteConcert(favId,  userId, accessToken)
).then(
  response => {
    dispatch(fetchFavoriteConcerts(accessToken, userId))
    dispatch({
      type: LEAVE_CONCERT,
      concertId: favId
    })
  }
)

const initialState = {
  attendConcertId: [],
  data: null,
  fetching: false,
  error: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ATTEND_CONCERT:
      return {
        ...state,
        attendConcertId: state.attendConcertId.filter(
          concertId => concertId !== action.concertId
        ).concat(action.concertId)
      }
    case LEAVE_CONCERT:
      return {
        ...state,
        attendConcertId: state.attendConcertId.filter(
          concertId => concertId !== action.concertId
        )
      }
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
