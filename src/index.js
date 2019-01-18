import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './css/index.css';
import './css/font-awesome.min.css';
import App from './App';
import Login from './Login';
import Registration from './Registration';
import PasswordManager from './PasswordManager';


ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Registration}/>
      <Route path="/manager" component={PasswordManager}/>
    </div>
  </Router>,
 document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
