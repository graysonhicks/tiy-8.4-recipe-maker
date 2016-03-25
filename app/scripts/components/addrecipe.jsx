var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');
var LinkedStateMixin = require('react/lib/LinkedStateMixin');

var Parse = require('parse');
Parse.initialize("recipe-maker");
Parse.serverURL = "http://grayson-tiny-server.herokuapp.com/";

var AddRecipeComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin, LinkedStateMixin],
 getInitialState: function(){
    return {
      title: '',
      userId: this.props.userId,
      userName: '',
      pubpriv: 'public',
      recipeType: '',
      prepTime: '',
      cookTime: '',
      temp: 0,
      tempScale: '',
      servingsBase: 0,
      servingsUnit: '',
      ingredients: '',
      ingredientUnit: '',
      ingredientName: '',
      steps: '',
      notes: '',
      url: ''
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    console.log(this.state);
    var Recipe = Parse.Object.extend("Recipes");
    var recipe = new Recipe();

    recipe.set(this.state);

    recipe.save(null, {
      success: function(recipe) {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + recipe.id);
      },
      error: function(recipe, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  },
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
        <form onSubmit={this.handleSubmit} onChange={this.handleChange} id="add-recipe-form">
        <div className="row">
            <div className="col-md-8">
                <img className="img-responsive" src="http://placehold.it/600x350" alt="" />
                  <fieldset className="form-group">
                    <input type="text" valueLink={this.linkState('url')} className="form-control" id="url" placeholder="Image URL"></input>
                  </fieldset>
            </div>
            <div className="col-md-4">
                <fieldset className="form-group">
                  <input type="text" className="form-control" valueLink={this.linkState('title')} id="name" placeholder="Recipe Name" />
                </fieldset>
                <fieldset className="form-group">
                  <input type="text" className="form-control" valueLink={this.linkState('userName')} id="author" placeholder="Author" />
                </fieldset>
                 <div className="checkbox" id="publiccheckbox">
                  <label>
                    <input type="checkbox" name="pubpriv" value="public" defaultChecked/><span>Make it public</span>
                  </label>
                </div>
                 <div className="checkbox" name="pubpriv" value="private" id="privatecheckbox">
                  <label>
                    <input type="checkbox" /><span>Make it private</span>
                  </label>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
                <div className="col-md-3">
                   <fieldset className="form-group recipe-form-containers recipe-type-container">
                    <select valueLink={this.linkState('recipeType')} className="c-select form-control">
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
                    <input type="text" valueLink={this.linkState('prepTime')} className="form-control" id="preptime" placeholder="Prep Time" />
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset className="form-group recipe-form-containers cooktime-container">
                    <input type="text" valueLink={this.linkState('cookTime')} className="form-control" id="cooktime" placeholder="Cook Time" />
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset className="form-group recipe-form-containers temperature-container">
                    <div className="input-group temperature-form">
                      <input type="text" valueLink={this.linkState('temp')} className="form-control" id="temperature" aria-label="..." placeholder="Temperature"/>
                      <div className="input-group-btn">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">F <span className="caret"></span></button>
                        <ul valueLink={this.linkState('tempScale')} className="dropdown-menu">
                          <li><a href="#">F </a></li>
                          <li><a href="#">C </a></li>
                        </ul>
                      </div>
                    </div>
                  </fieldset>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
                <div className="col-md-2">
                  <span>This recipe will make:</span>
                </div>
                <div className="col-md-5">
                  <fieldset className="form-group recipe-form-containers amount-container">
                    <input type="text" valueLink={this.linkState('servingsBase')} className="form-control" id="amount" placeholder="Amount" />
                  </fieldset>
                </div>
                <div className="col-md-5">
                  <fieldset className="form-group recipe-form-containers type-description-container">
                    <input type="text" valueLink={this.linkState('servingsUnit')} className="form-control" id="type-description" placeholder="cookies, loaves, etc." />
                  </fieldset>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <h4>Step 1</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
                <div className="col-md-3">
                  <fieldset className="form-group recipe-form-containers ingredient-amount-container">
                    <input type="text" className="form-control" id="ingredient-amount" placeholder="2" />
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset className="form-group recipe-form-containers ingredient-unit-container">
                   <select valueLink={this.linkState('ingredientUnit')} className="c-select form-control">
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
                   <input type="text" valueLink={this.linkState('ingredientName')} className="form-control" id="ingredient-name" placeholder="Flour" />
                 </fieldset>
               </div>
               <div className="col-md-3">
                 <button type="button" className="glyphicon glyphicon-minus" id="remove-ingredient-btn" />
               </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-9">
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
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
              <div className="col-md-12">
                <fieldset className="form-group recipe-form-containers recipe-instructions-input-container">
                  <textarea className="form-control" valueLink={this.linkState('steps')} id="recipe-instructions-input" rows="3" placeholder="What instructions go with this step?"></textarea>
                </fieldset>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <button type="button" className="btn btn-default pull-right" id="add-step-btn">Add Another Step</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
              <div className="col-md-12">
                <fieldset className="form-group recipe-form-containers recipe-notes-container">
                  <textarea className="form-control" valueLink={this.linkState('notes')} id="recipe-notes-input" rows="3" placeholder="Any notes with this recipe?"></textarea>
                </fieldset>
              </div>
          </div>
        </div>
          <div className="row">
            <div className="col-md-9">
              <button type="submit" action="submit" form="add-recipe-form" className="btn btn-success pull-right" id="save-recipe-btn">Save this Recipe!</button>
            </div>
          </div>
        </form>
          <hr />
    </div>
    )
  }
});

module.exports = {
  AddRecipeComponent: AddRecipeComponent
}
