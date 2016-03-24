var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var LoginPageComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  login: function(username, password){

  },
  componentDidMount: function(){
    $("#wrapper").addClass("toggled");
  },
  createUser: function(username, email, password){

  },
  render: function(){
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6" id="logincontainer">
                <LoginComponent login={this.login} />
              </div>
              <div className="col-md-6" id="signupcontainer">
                <SignUpComponent createUser={this.createUser}/>
              </div>
            </div>
          </div>
        </div>

      );
    }
  });


var LoginComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
        username: '',
        password: ''
      }
  },
  handlePassword: function(event){
    this.setState({'password': event.target.value });
  },
  handleUsername: function(event){
    this.setState({'username': event.target.value });
  },
  handleSubmit: function(event){
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <fieldset className="form-group">
          <label htmlFor="signupusername">Username</label>
          <input type="text" name="username" onChange={this.handleUsername} className="form-control" value={this.state.username} id="signupusername" placeholder="Enter username" />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" name="password" onChange={this.handlePassword} className="form-control" value={this.state.password} id="loginpassword" placeholder="Password" />
        </fieldset>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    )
    }
  });


var SignUpComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
        username: '',
        email: '',
        password: ''
      }
  },
  handlePassword: function(event){
    this.setState({'password': event.target.value });
  },
  handleEmail: function(event){
    this.setState({'email': event.target.value });
  },
  handleUsername: function(event){
    this.setState({'username': event.target.value });
  },
  handleSubmit: function(event){
    event.preventDefault();
    this.props.createUser(this.state.username, this.state.email, this.state.password);
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>No Account? Sign up here.</h1>
        <fieldset className="form-group">
          <label htmlFor="signupusername">Username</label>
          <input type="text" name="username" onChange={this.handleUsername} className="form-control" value={this.state.username} id="signupusername" placeholder="Enter username" />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" name="email" onChange={this.handleEmail} className="form-control" value={this.state.email} id="signupemail" placeholder="Enter email" />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" name="password" onChange={this.handlePassword} className="form-control" value={this.state.password} id="loginpassword" placeholder="Password" />
        </fieldset>
        <button type="submit" className="btn btn-success">Sign Up!</button>
      </form>
    )
    }
  });

  module.exports = {
    LoginPageComponent: LoginPageComponent
  }
