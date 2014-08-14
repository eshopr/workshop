// 'use strict';
console.log('load3d');
var recipesController = angular.module('recipesController', ['ui.bootstrap']);

recipesController.controller('recipesController', function(
    $resource,
    $scope, 
    $http,
    RecipeFactory,
    IngredientFactory
    ) { 

  $scope.works = 'recipeController';
  $scope.recipes = {};
  $scope.ingredients = {};
  // $scope.bom = [{
  //   "id": "Material",
  //   "value": "select a value" 
  // }];
  $scope.recipe = {};
  $scope.formData = {};
  
  function init() {
    IngredientFactory.getIngredients().then(function(response) {
        console.log(response)
        $scope.ingredients = response.data;
    });
    RecipeFactory.getRecipes().then(function(response) {
      console.log(response)
        $scope.recipes = response.data;
    });
  }
  init();

  $scope.createRecipe = function(){
    console.log($scope.items);
    $scope.formData.bom = $scope.items;
    console.log($scope.formData);
    RecipeFactory.insertRecipe($scope.formData).then(function(response) {

      console.log(response);
      $scope.items = [];
      $scope.formData = {}; // clear the form so our user is ready to enter another
      $scope.recipes = response.data;
    }); 
  }

  $scope.items = [];
  $scope.addNew = function (){
    $scope.items.push({ active: "true" });
    console.log($scope.items);
  };
  
  $scope.submitOne = function (item){
    $scope.lastSubmit = angular.copy(item);
  };
  
  $scope.submitAll = function() {
    $scope.lastSubmit = angular.copy($scope.items);
  }

  // $scope.showRecipes = function(id){
  //   RecipeFactory.showRecipe(id).then(function(response) {
  //     $scope.item = response.data;
  //   }); 
  // }
});

