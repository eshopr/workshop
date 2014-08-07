'use strict';

eshoprShop.factory("IngredientFactory", function($http,$resource) {
  var factory = {};
  // factory.getIngredients = function () {
  //   var url = "/api/ingredients/:id";
  //   return $resource(url);
  // };
      factory.getClients = function () {
        var url = "/api/ingredients";
        return $http.get(url);
    };
  return factory
});
// eshoprShop.service("IngIndexCtrl", function($scope, IngredientFactory) {
//   Post.query(function(data) {
//     $scope.posts = data;
//   });
// });

// /* Controllers Module for studentDetailApp application*/ 
var cupboardController = angular.module('cupboardController', ['ui.bootstrap']);

cupboardController.controller('cupboardController', function($resource,$scope, $http, IngredientFactory) { 
  // we now must find some way to put ingredients in the 
  $scope.works = 'cupboardController';
function init() {
    IngredientFactory.getClients().then(function(response) {
      console.log(response)
        $scope.ingredients = response.data;
    });
}
  init();
  // console.log(Ingredient);
  // $scope.listIngredients = function($scope, Ingredient) {
  //   Ingredient.query(function(data) {
  //       $scope.ingredients = data;
  //   });
  // }
  // $scope.ingredients = IngredientFactory.getIngredients().then(function(response) {
  //   return reponse.data;
  // });
// console.log($scope.ingredients);
  // $scope.doStuff = function(id){
  //   // $scope.currentitem = id;
  //   console.log(id)
  //   var ohm = id;
  //   IngredientFactory.get({id: 1}, function(data){
  //     console.log(data)
  //     $scope.currentitem = data;
  //   });
  // }
  // console.log($scope.ingredients);
});