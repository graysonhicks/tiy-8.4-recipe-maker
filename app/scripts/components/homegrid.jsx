var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

// Look at PARSE REACT MIXIN FOR QUERYING TO GET RECIPES COLLECTION

var HomeGridComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  componentDidMount: function(){
    $("#wrapper").removeClass("toggled");
  },
  toggleMenu: function(e){
    e.preventDefault();
    console.log('toggle');
    $("#wrapper").toggleClass("toggled");
  },
  render: function(){
    console.log(this.props.collection);
    var gridItem = function(){
      return(
      <div className="col-md-4 portfolio-item">
          <a href="#">
              <img className="img-responsive" src="http://placehold.it/700x400" alt="" />
          </a>
          <h3>
              <a href="#">Project Name</a>
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
      </div>
    )
    }
    return(
        <div className="container home-grid-container">
            <div className="row">
                <div className="col-lg-12">
                  <a href="#menu-toggle" onClick={this.toggleMenu} className="btn btn-default" id="menu-toggle">Toggle Menu</a>
                    <h1 className="page-header">Page Heading
                        <small>Secondary Text</small>
                    </h1>
                </div>
            </div>
            <div className="row">
                {(this.props.collection).map(gridItem.bind(this))}
            </div>
          </div>
    )
}
});

module.exports = {
  HomeGridComponent: HomeGridComponent
}
