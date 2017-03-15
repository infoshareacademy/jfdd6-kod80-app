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
import Attractions from './components/attractions-view'
import UsercardView from './components/usercard-view'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="koncerty" component={Concerts}/>
        <Route path="koncerty/:koncertId" component={ConcertCard}/>
        <Route path="atrakcje" component={Attractions}/>
        <Route path="moje-konto" component={UsercardView}/>
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
