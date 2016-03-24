var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var AddRecipeComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return(
    <div className="container add-recipe-view-container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="page-header">Add A Recipe
                    <small>Please Enter the Information</small>
                </h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <img className="img-responsive" src="http://placehold.it/600x350" alt="" />
                <span>Upload an image...</span>
            </div>
            <div className="col-md-12">
              <form>
                <fieldset className="form-group">
                  <label htmlfor="name">Recipe Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Recipe Name" />
                </fieldset>
              </form>
            </div>
        </div>

        <hr />
    </div>
    )
  }
});

module.exports = {
  AddRecipeComponent: AddRecipeComponent
}
