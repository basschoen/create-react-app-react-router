import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NoMatch from './NoMatch';
import About from './About';

// using an ES6 transpiler, like babel
import { Router, Route, Link, browserHistory } from 'react-router'

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
