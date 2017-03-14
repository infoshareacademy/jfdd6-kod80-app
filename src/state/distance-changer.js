// ACTION TYPES (there may be more than one)
const CHANGE = 'distance/CHANGE'
const RESET = 'distance/RESET'

// ACTION CREATORS (there may be more than one; one for each action type)
export const changeDistance = (value) => ({
  type: CHANGE,
  value
})

export const resetDistance = () => ({
  type: RESET
})

// INITIAL VALUE
const initialState = {
  distanceFromGoal: 0,
  maxValue: 15,
  minValue: 0
}

// REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // Number of cases should be equal to number of action types
    case CHANGE:
      return {
        ...state,
        distanceFromGoal: state.distanceFromGoal < state.maxValue ?
          state.distanceFromGoal + action.value :
          state.maxValue
      }
    case RESET:
      return {
        ...state,
        distanceFromGoal: state.minValue
      }
    default:
      return state
  }
}

