import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import persistState from 'redux-localstorage'

import concertReducer from './state/concerts-gdansk'
import concertFilterReducer from './state/concert-filter.js'
import attractionsReducer from './state/attractions-gdansk'
import hotelsReducer from './state/hotels-gdansk'
import restaurantsReducer from './state/restaurants-gdansk'
import taxisReducer from './state/taxis-gdansk'
import distanceReducer from './state/distance-changer'

const reducer = combineReducers({
  concerts: concertReducer,
  concert_filter: concertFilterReducer,
  attractions: attractionsReducer,
  hotels: hotelsReducer,
  restaurants: restaurantsReducer,
  taxis: taxisReducer,
  distanceChanger: distanceReducer

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
