import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/app';
import Home from './components/home-view'
import Concerts from './components/concerts-view'
import ConcertCard from './components/concertcard-view'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="koncerty" component={Concerts}/>
        <Route path="koncerty/:concertId" component={ConcertCard}/>
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
