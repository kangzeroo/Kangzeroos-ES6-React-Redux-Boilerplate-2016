import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Store from './store'
import App from './components/app'
import Home from './components/home'
import About from './components/about'

ReactDOM.render(
  <Provider store={Store}>
  	<Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='about' component={About}></Route>
      </Route>
  	</Router>
  </Provider>
  , document.querySelector('.container'))
