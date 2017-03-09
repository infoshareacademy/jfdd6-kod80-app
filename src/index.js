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
import ViewConcert from './components/view-concert';

import './styles/index.css';

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="concert-card" component={ConcertCard} />
          <Route path="concert-card/:concert-cardId" component={ViewConcert}/>
          <Route path="user-card" component={UserCard} />
          <Route path="concert-attenders" component={ConcertAttenders} />
          {/*deafult widok - wyszukiwarka*/}
        </Route>
    </Router>
    </Provider>
  ),
  document.getElementById('root')
);