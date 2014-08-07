'use strict';

 eshoprShop.factory("IngredientFactory", function($resource) {
    // var factory = {}
    // factory.getIngredients = function ($resource){
        var url = "/api/ingredients/:id";
        return $resource(url);
    // }
    // return factory

});

// /* Controllers Module for studentDetailApp application*/ 
var cupboardController = angular.module('cupboardController', ['ui.bootstrap',]);

cupboardController.controller('cupboardController', function($scope, $http, IngredientFactory) { 
  // we now must find some way to put ingredients in the 
  $scope.works = 'cupboardController';
  // console.log(Ingredient);
  // $scope.listIngredients = function($scope, Ingredient) {
  //   Ingredient.query(function(data) {
  //       $scope.ingredients = data;
  //   });
  // }
  $scope.ingredients = IngredientFactory.query(function(data) {
    return data
  });

  $scope.doStuff = function(id){
    // $scope.currentitem = id;
    console.log(id)
    IngredientFactory.get({id: id}, function(data){
      $scope.currentitem = data;
    });
  }
  // console.log($scope.ingredients);
});