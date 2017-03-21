import Api from '../api'

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

export const leaveConcert = concertId => ({
  type: LEAVE_CONCERT,
  concertId
})

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
