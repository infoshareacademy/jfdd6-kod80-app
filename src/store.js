import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import persistState from 'redux-localstorage'

import concertsReducer from './state/concerts'
import attractionsReducer from './state/attractions'
import hotelsReducer from './state/hotels'
import restaurantsReducer from './state/restaurants'
import taxisReducer from './state/taxis'
import usersReducer from './state/users'
import distanceReducer from './state/distance-changer'
import concertFilterReducer from './state/concert-filter.js'
import sessionReducer from './state/session'
import userReducer from './state/user'

import attendConcertReducer from './state/attend-concert'
import concertAttendersReducer from './state/concert_attenders'


const allReducers = combineReducers({
  concerts: concertsReducer,
  attractions: attractionsReducer,
  hotels: hotelsReducer,
  restaurants: restaurantsReducer,
  taxis: taxisReducer,
  users: usersReducer,
  distanceChanger: distanceReducer,
  concert_filter: concertFilterReducer,
  attendConcert: attendConcertReducer,
  session: sessionReducer,
  user: userReducer,
  concertAttenders: concertAttendersReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers,

  composeEnhancers(
    //persistState(['session']),
    applyMiddleware(thunk)
  )
);

export default store