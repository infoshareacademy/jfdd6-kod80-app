import { createStore, combineReducers } from 'redux'

import searchReducer from './state/search-value'

const reducer = combineReducers({
  searchValues: searchReducer,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
