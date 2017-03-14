import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import persistState from 'redux-localstorage'

import concertsReducer from './state/concerts'
import attractionsReducer from './state/attractions'
import hotelsReducer from './state/hotels'
import restaurantsReducer from './state/restaurants'
import taxisReducer from './state/taxis'
import distanceReducer from './state/distance-changer'
import concertFilterReducer from './state/concert-filter.js'

const allReducers = combineReducers({
  concerts: concertsReducer,
  attractions: attractionsReducer,
  hotels: hotelsReducer,
  restaurants: restaurantsReducer,
  taxis: taxisReducer,
  distanceChanger: distanceReducer,
  concert_filter: concertFilterReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers,

  composeEnhancers(
    // persistState(['counter']),
    applyMiddleware(thunk)
  )
);

export default store