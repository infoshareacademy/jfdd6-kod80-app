import { createStore, combineReducers } from 'redux'

import searchReducer from './state/search-value'
import distanceReducer from './state/distance-filter'
import concertReducer from './state/concert-reducer'

const reducer = combineReducers({
  searchValues: searchReducer,
  distanceVal: distanceReducer,
  concerts: concertReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
