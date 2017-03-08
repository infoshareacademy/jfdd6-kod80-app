import { createStore, combineReducers } from 'redux'

import searchReducer from './state/search-value'
import distanceReducer from './state/distance-filter'

const reducer = combineReducers({
  searchValues: searchReducer,
  distanceVal: distanceReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
