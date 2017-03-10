import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import persistState from 'redux-localstorage'

import searchReducer from './state/concerts'

const reducer = combineReducers({
  search: searchReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */
  composeEnhancers(
    // persistState(['counter']),
    applyMiddleware(thunk)
  )
);
export default store
