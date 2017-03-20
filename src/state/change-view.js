// ACTION TYPES (there may be more than one)
const CHANGE = 'view/CHANGE'

// ACTION CREATORS (there may be more than one; one for each action type)
export const changeView = (value) => ({
  type: CHANGE,
  value
})

// INITIAL VALUE
const initialState = {
  currentValue: 0
}

// REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // Number of cases should be equal to number of action types
    case CHANGE:
      return {
        ...state,
        currentValue: state.currentValue === action.value ? 1 : 0
      }
    default:
      return state
  }
}

