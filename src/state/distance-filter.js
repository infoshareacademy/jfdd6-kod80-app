// ACTION TYPES (there may be more than one)
const CHANGEDISTANCE = 'distance/CHANGEDISTANCE'

// ACTION CREATORS (there may be more than one; one for each action type)
export const changeDistance = (value) => ({
  type: CHANGEDISTANCE,
  value
})

// INITIAL VALUE
const initialState = {
  distanceValue: 1
}

// REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // Number of cases should be equal to number of action types
    case CHANGEDISTANCE:
      return {
        ...state,
        distanceValue: state.distanceValue + action.value
      }
    default:
      return state
  }
}

