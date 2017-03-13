import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/app';
import ConcertCard from './components/concert-card-view';
import UserCard from './components/user-card';
import ConcertAttenders from './components/concert-attenders';
import Home from './components/home';
import ConcerdCard from './components/concert-card-view'
import BuyTicketView from './components/buy-ticket-view'

import './styles/index.css';
import './styles/basic.css';
//================ zaraz bedzie tu calkiem nowa warsja =======================
ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="concert-card" component={ConcertCard} />
          <Route path="user-card" component={UserCard} />
          <Route path="concerts/:concertId" component={ConcerdCard} />
          <Route path="concert-attenders" component={ConcertAttenders} />
          <Route path="buy-ticket/:concertId" component={BuyTicketView} />
          {/*deafult widok - wyszukiwarka*/}
        </Route>
    </Router>
    </Provider>
  ),
  document.getElementById('root')
);