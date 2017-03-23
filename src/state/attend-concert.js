import Api from '../api'

import {fetchFavoriteConcerts} from './favorite-concerts'

const ATTEND_CONCERT = 'attend-concert/ATTEND_CONCERT'
const LEAVE_CONCERT = 'leave-concert/LEAVE_CONCERT'

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
          console.log(data.filter(favItem => favItem.itemId == favId).map(item => item.id))
          return data.filter(favItem => favItem.itemId == favId).map(item => item.id)
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
  attendConcertId: []
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
    default:
      return state
  }
}
