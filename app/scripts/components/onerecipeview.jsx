var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var OneRecipeComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  toggleMenu: function(e){
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  },
  render: function(){
    return(
      <div className="container one-recipe-view-container">
          <div className="row">
              <div className="col-md-12">
                <a href="#menu-toggle" onClick={this.toggleMenu} className="btn btn-default" id="menu-toggle">Toggle Menu</a>
                  <h1 className="page-header">Portfolio Item
                      <small>Item Subheading</small>
                  </h1>
              </div>
          </div>

          <div className="row">
              <div className="col-md-8">
                  <img className="img-responsive" src="http://placehold.it/750x500" alt="" />
              </div>
              <div className="col-md-4">
                  <h3>Project Description</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
                  <h3>Project Details</h3>
                  <ul>
                      <li>Lorem Ipsum</li>
                      <li>Dolor Sit Amet</li>
                      <li>Consectetur</li>
                      <li>Adipiscing Elit</li>
                  </ul>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12">
                  <h3 className="page-header">Related Projects</h3>
              </div>
              <div className="col-sm-3 col-xs-6">
                  <a href="#">
                      <img className="img-responsive portfolio-item" src="http://placehold.it/500x300" alt="" />
                  </a>
              </div>
              <div className="col-sm-3 col-xs-6">
                  <a href="#">
                      <img className="img-responsive portfolio-item" src="http://placehold.it/500x300" alt="" />
                  </a>
              </div>
              <div className="col-sm-3 col-xs-6">
                  <a href="#">
                      <img className="img-responsive portfolio-item" src="http://placehold.it/500x300" alt="" />
                  </a>
              </div>
              <div className="col-sm-3 col-xs-6">
                  <a href="#">
                      <img className="img-responsive portfolio-item" src="http://placehold.it/500x300" alt="" />
                  </a>
              </div>
          </div>
          <hr />
      </div>
    )
}
});

module.exports = {
  OneRecipeComponent: OneRecipeComponent
}
