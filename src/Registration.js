import React, { Component } from 'react';
import logo from './image/logo.svg';
import './css/App.css';
import './css/bootstrap.min.css';

class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    /*let password = JSON.parse(localStorage.password, this.state.email);
    password['email'] = this.state.password;

    localStorage.setItem (this.state.email, this.state.password);*/

    console.log('form is submit', this.state.email, this.state.password);
  }
  handleEmailChange(event) {
    console.log('email chaged', event.target.value);
    this.setState({email: event.target.value});
  }
  handlePassChange(event) {
    this.setState({password: event.target.value});
    console.log('pass chaged', event.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="body">
          <h3>Registration</h3>
            <form id="loginform" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input className="form-control"
                    type="text"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="input-group">
                  <input className="form-control"
                    type="text"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePassChange}
                  />
                </div>
                <div className="button-group">
                  <input type="submit" className="btn btn-lg btn-success btn-block" id="chk"  value="Submit" />
                </div>
              </form>
            <hr />
            </div>
        </header>
      </div>
    );
  }
}

export default Registration;
