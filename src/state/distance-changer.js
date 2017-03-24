// ACTION TYPES (there may be more than one)
const CHANGE = 'distance/CHANGE'

// ACTION CREATORS (there may be more than one; one for each action type)
export const changeDistance = (value) => ({
  type: CHANGE,
  value
})


// INITIAL VALUE
const initialState = {
  distanceFromGoal: 1,
  maxValue: 15,
  minValue: 1
}

// REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // Number of cases should be equal to number of action types
    case CHANGE:
      return {
        ...state,
        distanceFromGoal: action.value
      }
    default:
      return state
  }
}

