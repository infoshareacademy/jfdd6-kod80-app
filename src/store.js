import { createStore, combineReducers } from 'redux'

import searchReducer from './state/search-value'
import concertsReducer from './state/concerts'

const reducer = combineReducers({
  searchValues: searchReducer,
  concerts: concertsReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
