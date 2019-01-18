import React, { Component } from 'react';
import logo from './image/logo.svg';
import './css/App.css';
import './css/bootstrap.min.css';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="body">
          <h3>Please Sign in</h3>
            <form id="loginform">
                <div className="form-group">
                    <input className="form-control" placeholder="User Name"/>
                </div>
                <div className="input-group">
                    <input className="form-control login-password" placeholder="Password" />
                </div>
                <div className="button-group">
                    <input className="btn btn-lg btn-success btn-block" value="Login" />
                </div>
                </form>
            <hr />
        </div>
          <a
            className="App-link"
            href="/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            Registration
          </a>
        </header>
      </div>
    );
  }
}

export default Login;
