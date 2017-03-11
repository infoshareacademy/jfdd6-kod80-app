// ACTION TYPES (there may be more than one)
const SET_TYPE_OF_MUSIC_SEARCH = 'concerts/SET_TYPE_OF_MUSIC_SEARCH'

export const setTypeOfMusicSearch = (typeOfMusic, valueType) => ({
  type: SET_TYPE_OF_MUSIC_SEARCH,
  typeOfMusic
})

// INITIAL VALUE
const initialState = {
  concertsSearchValues: {
    concertId: null,
    band: null,
    typeOfMusic: null,
    city: null
  }
}

//REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // Number of cases should be equal to number of action types
    case SET_TYPE_OF_MUSIC_SEARCH:
      return {
    ...state,
      concertsSearchValues: {...state.concertsSearchValues, typeOfMusic: action.typeOfMusic }
  }
    default:
      return state
  }
}
