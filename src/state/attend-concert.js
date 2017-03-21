const ATTEND_CONCERT = 'attend-concert/ATTEND_CONCERT'
const LEAVE_CONCERT = 'leave-concert/LEAVE_CONCERT'

export const attendConcert = concertId => ({
  type: ATTEND_CONCERT,
  concertId
})

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
