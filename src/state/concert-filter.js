
// to samo co w student-filters
// valueType - rodzaj szukanego słowa kluczowego - rodzaj muzyki, nazwa miejscowości
// searchFilterNames --> to bedzie nasz initial state

// ACTION TYPES (there may be more than one)
const SET_SEARCH_VALUE = 'concerts/SET_SEARCH_VALUE'
const SET_TYPE_OF_MUSIC_SEARCH = 'concerts/SET_TYPE_OF_MUSIC_SEARCH'

export const setTypeOfMusicSearch = (value, valueType) => ({
  type: SET_TYPE_OF_MUSIC_SEARCH,
  value
})

// ACTION CREATORS (there may be more than one; one for each action type)
export const setSearchValue = (value, valueType) => ({
  type: SET_SEARCH_VALUE,
  value
})

// INITIAL VALUE --> do przegadania
const initialState = {
  searchFilterNames: [],
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
    case SET_SEARCH_VALUE:
      return state
    case SET_TYPE_OF_MUSIC_SEARCH:
      return {
    ...state,
      concertsSearchValues: {...state.concertsSearchValues, typeOfMusic: "Rock" }
  }
    default:
      return state
  }
}
