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

var MainComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
 getInitialState: function(){
  return {
    router: this.props.router
    };
  },
  render: function(){
    console.log(this.state.router.current);
    var body;
    if(this.state.router.current == "index"){
        body = <LoginPageComponent />
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
      body = <AddRecipeComponent />
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
