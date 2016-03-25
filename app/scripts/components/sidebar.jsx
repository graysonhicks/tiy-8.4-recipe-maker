var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var SidebarComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return(
      <div id="wrapper">
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#home">
                      Recipe Maker
                    </a>
                </li>
                <li>
                    <a href="#home">My Recipes <span className="glyphicon glyphicon-folder-open" /></a>
                </li>
                <li>
                    <a glyphicon glyphicon-plus href="#add">Add a New Recipe <span className="glyphicon glyphicon-plus" /></a>
                </li>
            </ul>
        </div>
      </div>
    )
}
});

module.exports = {
  SidebarComponent: SidebarComponent
}
