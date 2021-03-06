var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "home": "home",
    "recipe/:id": "recipe",
    "add": "add"
  },
  index: function(){
    console.log('index');
    this.current = "index";
  },
  home: function(){
    this.current = "home";
  },
  recipe: function(id){
    this.current = "recipe";
    this.id = id;
  },
  add: function(){
    console.log('add');
    this.current = "add";
  }
  });

module.exports = new Router();
