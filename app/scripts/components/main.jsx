var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var OneRecipeComponent = require('./onerecipeview.jsx').OneRecipeComponent;
var HomeGridComponent = require('./homegrid.jsx').HomeGridComponent;
var AddRecipeComponent = require('./addrecipe.jsx').AddRecipeComponent;
var LoginPageComponent = require('./login.jsx').LoginPageComponent;

var Parse = require('parse');
Parse.initialize("recipe-maker");
Parse.serverURL = "http://grayson-tiny-server.herokuapp.com/";


var MainComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
 getInitialState: function(){
  return {
    router: this.props.router,
    userId: null
    };
  },
  setUser: function(user){
    console.log(user);
    this.setState({"userId": user.id});
    console.log(this.state.userId);
  },
  render: function(){
    var body;
    if(this.state.router.current == "index"){
        body = <LoginPageComponent setUser={this.setUser} />
        return body;
    }
    if(this.state.router.current == "home"){
        body = <HomeGridComponent />
        return body;
    }
    if(this.state.router.current == "recipe"){
      body = <OneRecipeComponent />
      return body;
    }
    if(this.state.router.current == "add"){
      body = <AddRecipeComponent userId={this.state.userId}/>
      return body;
    }
    return(
      <div id="page-content-wrapper">
        {body}
      </div>
    )
}
});

module.exports = {
  MainComponent: MainComponent
}
