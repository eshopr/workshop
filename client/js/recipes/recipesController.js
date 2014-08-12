// 'use strict';
console.log('load3d');
var recipesController = angular.module('recipesController', ['ui.bootstrap']);

recipesController.controller('recipesController', function(
    $resource,
    $scope, 
    $http
    ) { 
    // RecipeFactory
  // we now must find some way to put ingredients in the 
  $scope.works = 'recipeController';
  // $scope.recipes = {};
  // $scope.recipe = {};
  // $scope.formData = {};
  
  // function init() {
  //   RecipeFactory.getRecipes().then(function(response) {
  //     console.log(response)
  //       $scope.recipes = response.data;
  //   });
  // }
  // init();

  // $scope.createRecipe = function(){
  //   RecipeFactory.insertRecipe($scope.formData).then(function(response) {

  //     console.log(response);
  //     $scope.formData = {}; // clear the form so our user is ready to enter another
  //     $scope.recipes = response.data;
  //   }); 
  // }

  // $scope.showRecipes = function(id){
  //   RecipeFactory.showRecipe(id).then(function(response) {
  //     $scope.item = response.data;
  //   }); 
  // }

});

