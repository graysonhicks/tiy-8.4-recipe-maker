var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var SidebarComponent = require('./sidebar.jsx').SidebarComponent;
var MainComponent = require('./main.jsx').MainComponent;
var TopNavComponent = require('./topnav.jsx').TopNavComponent;

var PageComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
  return {
    router: this.props.router
  }
  },
  componentWillMount: function(){
    this.callback = (function(){
      this.forceUpdate();
    }).bind(this);
    this.state.router.on('route', this.callback);
  },
  componentWillUnmount: function(){
    this.state.router.off('route', this.callback);
  },
  render: function(){
    return(
          <div id="wrapper">
            <SidebarComponent />
            <TopNavComponent />
            <MainComponent router={this.state.router} />
          </div>
    )
}
});

module.exports = {
  PageComponent: PageComponent
}
