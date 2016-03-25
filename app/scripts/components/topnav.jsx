var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var TopNavComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleReturn: function(e){
    e.preventDefault();
    console.log('return');
    Backbone.history.navigate("home", {trigger: true});
  },
  render: function(){
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" onClick={this.handleReturn} href="#">Recipe Maker</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                      <li>

                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    )
}
});

module.exports = {
  TopNavComponent: TopNavComponent
}
