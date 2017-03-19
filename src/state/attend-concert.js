const ATTEND_CONCERT = 'join-concert/ATTEND_CONCERT'
const LEAVE_CONCERT = 'join-concert/LEAVE_CONCERT'

export const attendConcert = concertId => ({
  type: ATTEND_CONCERT,
  concertId
})

export const leaveConcert = concertId => ({
  type: LEAVE_CONCERT,
  concertId
})

const initialState = {
  attendConcertIds: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ATTEND_CONCERT:
      return {
        ...state,
        attendConcertIds: state.attendConcertIds.filter(
          concertId => concertId !== action.concertId
        ).concat(action.concertId)
      }
    case UNFAV_GROUP:
      return {
        ...state,
        attendConcertIds: state.attendConcertIds.filter(
          concertId => concertId !== action.concertId
        )
      }
    default:
      return state
  }
}
