import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import persistState from 'redux-localstorage'

import searchReducer from './state/concerts'
import concertCardViewReducer from './state/concertCardViewReducer'
import concertReducer from './state/concerts'
import concertFilterReducer from './state/concert-filter.js'


const reducer = combineReducers({
    search: searchReducer,
    database: concertCardViewReducer,
    concerts: concertReducer,
    concert_filter: concertFilterReducer

});

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
