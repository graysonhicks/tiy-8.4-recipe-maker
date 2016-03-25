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
            <div className="col-md-8">
                <img className="img-responsive" src="http://placehold.it/600x350" alt="" />
                <span>Upload an image...</span>
            </div>
            <div className="col-md-4">
              <form>
                <fieldset className="form-group">
                  <input type="text" className="form-control" id="name" placeholder="Recipe Name" />
                </fieldset>
                <fieldset className="form-group">
                  <input type="text" className="form-control" id="author" placeholder="Author" />
                </fieldset>
                 <div className="checkbox" id="publiccheckbox">
                  <label>
                    <input type="checkbox">Make it public</input>
                  </label>
                </div>
                 <div className="checkbox" id="privatecheckbox">
                  <label>
                    <input type="checkbox">Make it private</input>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <form className="main-recipe-form">
                <div className="col-md-3">
                   <fieldset className="form-group recipe-form-containers recipe-type-container">
                    <select className="c-select form-control">
                      <option value="0">Recipe Type</option>
                      <option value="1">Breakfast</option>
                      <option value="2">Lunch</option>
                      <option value="3">Dinner</option>
                      <option value="3">Dessert</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset className="form-group recipe-form-containers preptime-container">
                    <input type="text" className="form-control" id="preptime" placeholder="Prep Time" />
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset className="form-group recipe-form-containers cooktime-container">
                    <input type="text" className="form-control" id="cooktime" placeholder="Cook Time" />
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset className="form-group recipe-form-containers temperature-container">
                    <div className="input-group temperature-form">
                      <input type="text" className="form-control" id="temperature" aria-label="..." placeholder="Temperature"/>
                      <div className="input-group-btn">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">F <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                          <li><a href="#">F </a></li>
                          <li><a href="#">C </a></li>
                        </ul>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <form className="main-recipe-form">
                <div className="col-md-2">
                  <span>This recipe will make:</span>
                </div>
                <div className="col-md-5">
                  <fieldset className="form-group recipe-form-containers amount-container">
                    <input type="text" className="form-control" id="amount" placeholder="Amount" />
                  </fieldset>
                </div>
                <div className="col-md-5">
                  <fieldset className="form-group recipe-form-containers type-description-container">
                    <input type="text" className="form-control" id="type-description" placeholder="cookies, loaves, etc." />
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4>Step 1</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <form className="main-recipe-form">
                <div className="col-md-3">
                  <fieldset className="form-group recipe-form-containers ingredient-amount-container">
                    <input type="text" className="form-control" id="ingredient-amount" placeholder="2" />
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset className="form-group recipe-form-containers ingredient-unit-container">
                   <select className="c-select form-control">
                     <option value="0">Cups</option>
                     <option value="1">Tablespoons</option>
                     <option value="2">Teaspoons</option>
                     <option value="3">Fluid Oz</option>
                     <option value="4">Oz</option>
                     <option value="5">Pounds</option>
                   </select>
                 </fieldset>
               </div>
               <div className="col-md-3">
                 <fieldset className="form-group recipe-form-containers ingredient-name-container">
                   <input type="text" className="form-control" id="ingredient-name" placeholder="Flour" />
                 </fieldset>
               </div>
               <div className="col-md-3">
                 <button type="button" className="glyphicon glyphicon-minus" id="remove-ingredient-btn" />
               </div>
              </form>
            </div>
          </div>
          <div className="row">
          <div className="col-md-12">
            <form className="main-recipe-form">
              <div className="col-md-3">
                <fieldset className="form-group recipe-form-containers ingredient-amount-empty-container">
                  <input type="text" className="form-control" id="ingredient-amount-empty" placeholder="Amount" />
                </fieldset>
              </div>
              <div className="col-md-3">
                <fieldset className="form-group recipe-form-containers ingredient-unit-empty-container">
                 <select className="c-select form-control">
                   <option value="1">Unit</option>
                 </select>
               </fieldset>
             </div>
             <div className="col-md-3">
               <fieldset className="form-group recipe-form-containers ingredient-name-empty-container">
                 <input type="text" className="form-control" id="ingredient-name-empty" placeholder="Flour" />
               </fieldset>
             </div>
             <div className="col-md-3">
               <button type="button" className="glyphicon glyphicon-plus" id="add-ingredient-btn" />
             </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="main-recipe-form">
              <div className="col-md-12">
                <fieldset className="form-group recipe-form-containers recipe-instructions-input-container">
                  <textarea className="form-control" id="recipe-instructions-input" rows="3" placeholder="What instructions go with this step?"></textarea>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <button type="button" className="btn btn-default pull-right" id="add-step-btn">Add Another Step</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="main-recipe-form">
              <div className="col-md-12">
                <fieldset className="form-group recipe-form-containers recipe-notes-container">
                  <textarea className="form-control" id="recipe-notes-input" rows="3" placeholder="Any notes with this recipe?"></textarea>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
          <div className="row">
            <div className="col-md-10">
              <button type="button" className="btn btn-success pull-right" id="save-recipe-btn">Save this Recipe!</button>
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
