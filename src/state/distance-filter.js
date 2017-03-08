// ACTION TYPES (there may be more than one)
const CHANGE = 'students/CHANGE'

// ACTION CREATORS (there may be more than one; one for each action type)
export const change = (value) => ({
  type: CHANGE,
  value
})

// INITIAL VALUE
const initialState = {
  gradeQuantityLimit: 10
}

// REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // Number of cases should be equal to number of action types
    case CHANGE:
      return {
        ...state,
        gradeQuantityLimit: state.gradeQuantityLimit + action.value
      }
    default:
      return state
  }
}

