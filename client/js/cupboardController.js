'use strict';

eshoprShop.factory("IngredientFactory", function($http,$resource) {
  var factory = {};
  var url = "/api/ingredients";

  factory.getIngredients = function () {
    return $http.get(url);
  };
  // factory.getIngredient = function () {
  //       return $http.put(urlBase + '/' + id);
  // };
  factory.deleteIngredient = function (id) {
        console.log(id);
        return $http.delete(url + '/' + id);
  };
  return factory
});

var cupboardController = angular.module('cupboardController', ['ui.bootstrap']);

cupboardController.controller('cupboardController', function($resource,$scope, $http, IngredientFactory) { 
  // we now must find some way to put ingredients in the 
  $scope.works = 'cupboardController';
  $scope.ingredients = {};
  $scope.item = {};
  
  function init() {
    IngredientFactory.getIngredients().then(function(response) {
      console.log(response)
        $scope.ingredients = response.data;
    });
  }
  init();

  $scope.doStuff = function(id){
    var ohm = id;
    console.log('var ohm = '+id)
    IngredientFactory.deleteIngredient(ohm).then(function(response) {
      console.log(response);
      $scope.ingredients = response.data;
    }); // there probably should be an error callback here
  }
  // console.log($scope.ingredients);
});