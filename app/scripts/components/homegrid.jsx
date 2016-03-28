var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');
var Parse = require('parse');
var ParseReact = require('parse-react');

Parse.initialize("recipe-maker");
Parse.serverURL = "http://grayson-tiny-server.herokuapp.com/";
// Look at PARSE REACT MIXIN FOR QUERYING TO GET RECIPES COLLECTION

var HomeGridComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin, ParseReact.Mixin],
  componentDidMount: function(){
    $("#wrapper").removeClass("toggled");
  },
  observe: function() {
    return {
      recipes: (new Parse.Query('Recipes'))
    };
  },
  toggleMenu: function(e){
    e.preventDefault();
    console.log('toggle');
    $("#wrapper").toggleClass("toggled");
  },
  render: function(){
    var gridItem = function(recipe){
      console.log(recipe);
      return(
      <div className="col-md-4 portfolio-item" id={recipe.objectId} key={recipe.objectId}>
          <a href="#">
              <img className="img-responsive" src={recipe.url} alt="" />
          </a>
          <h3>
              <a href="#">{recipe.title}</a>
          </h3>
          <p>{recipe.description}</p>
      </div>
    )
    }
    return(
      <div className="container home-grid-container">
          <div className="row">
              <div className="col-lg-12">
                <a href="#menu-toggle" onClick={this.toggleMenu} className="btn btn-default" id="menu-toggle">Toggle Menu</a>
                  <h1 className="page-header">My Recipes
                      <small>Secondary Text</small>
                  </h1>
              </div>
          </div>
          <div className="row">
              {this.data.recipes.map(gridItem.bind(this))}
          </div>
        </div>
    )
}
});

module.exports = {
  HomeGridComponent: HomeGridComponent
}
