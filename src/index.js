import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/App';
import ConcertCard from './components/ConcertCard-View';
import UserCard from './components/UserCard';
import ConcertAttenders from './components/ConcertAttenders';
import Home from './components/Home';

import './styles/index.css';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="home" component={Home} />
        <Route path="concert-card" component={ConcertCard} />
        <Route path="user-card" component={UserCard} />
        <Route path="concert-attenders" component={ConcertAttenders} />
        {/*deafult widok - wyszukiwarka*/}

      </Route>

    </Router>
  ),
  document.getElementById('root')
);