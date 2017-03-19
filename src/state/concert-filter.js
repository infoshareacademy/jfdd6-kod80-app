// ACTION TYPES (there may be more than one)
const SET_TYPE_OF_MUSIC_SEARCH = 'concerts/SET_TYPE_OF_MUSIC_SEARCH'
const SET_NAME_OF_BAND_SEARCH = 'concerts/SET_NAME_OF_BAND_SEARCH'
const SET_DATE_SINCE_SEARCH = 'concerts/SET_DATE_SINCE_SEARCH'
const SET_DATE_TO_SEARCH = 'concerts/SET_DATE_TO_SEARCH'


//setTypeOfMusicSearch np.: setTypeOfMusicSearch('Pop')
//setDateSearch np.: setDateSearch(date)
//setCitySearch np.: setCitySearch('Gdańsk')
//setConcertIdSearch np.: setConcertIdSearch(1)
//setBandNameSearch np.: setBandNameSearch('Queen')

export const setTypeOfMusicSearch = (typeOfMusic, valueType) => ({
  type: SET_TYPE_OF_MUSIC_SEARCH,
  typeOfMusic
})

export const setBandNameSearch = (band, valueType) => ({
  type: SET_NAME_OF_BAND_SEARCH,
  band
})

export const setDateSinceSearch = (dateSince, valueType) => ({
  type: SET_DATE_SINCE_SEARCH,
  dateSince
})

export const setDateToSearch = (dateTo, valueType) => ({
  type: SET_DATE_TO_SEARCH,
  dateTo
})

// INITIAL VALUE
const initialState = {
  concertsSearchValues: {
  concertId: null,
    band: null,
  typeOfMusic: null,
  city: null,
  dateSince: null,
  dateTo: null
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
  case SET_NAME_OF_BAND_SEARCH:
  return {
  ...state,
    concertsSearchValues: {...state.concertsSearchValues, band: action.band }
  }
  case SET_DATE_SINCE_SEARCH:
    return {
  ...state,
    concertsSearchValues: {...state.concertsSearchValues, dateSince: action.dateSince }
  }
  case SET_DATE_TO_SEARCH:
    return {
  ...state,
    concertsSearchValues: {...state.concertsSearchValues, dateTo: action.dateTo }
  }
    default:
      return state
  }
}
