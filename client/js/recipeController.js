// 'use strict';
 
// // /* Controllers Module for studentDetailApp application*/ 
// var recipesController = angular.module('recipesController', ['ui.bootstrap']);

// recipesController.controller('recipesController', function($scope, $http) { 

//   $scope.thisisitheScopeValue = "recipesController";
//   $scope.ingredients = 'will be replaced by a return from init';
//   $scope.formData = {} // we use this convention elsewhere
//   // $scope.items = [
//   //   'class': 'choc-chip',
//   //   'name': 'choc-chip',
//   //   'value':'0'
//   // ]; // item needs a factory

//   function init() {
//     IngredientFactory.getIngredients().then(function(response) {
//       console.log(response)
//         $scope.ingredients = response.data;
//     });
//   }
//   init();

//   $scope.createRecipe = function(){
//     RecipeFactory.insertRecipe($scope.formData).then(function(response) {
//       console.log(response);
//       $scope.formData = {}; // clear the form so our user is ready to enter another
//       $scope.ingredients = response.data;
//     }); 
//   }

//   $scope.releaseIngredient = function(ingredient) {
//     ingredient.name
//     var newItemNo = $scope.items.length + 1;
//     $scope.items.push('Item ' + newItemNo);
//   };



// });

// eshoprApp.controller( "TourCoordinatorCtrl", function( $scope, accommodation ) {
//   $scope.name = "Shidhin";
//   $scope.place = "Switzerland";
//   $scope.hotel = accommodation.hotelName( );
//   $scope.roomno = accommodation.roomNo( );
// } );
//   // $scope.groups = [
//   //   {
//   //     title: 'Biscuits',
//   //     content: 'total sales, stock, price, active'
//   //   },
//   //   {
//   //     title: 'Spring Onions',
//   //     content: 'total sales, stock, price, active'
//   //   },
//   //   {
//   //     title: 'Imported Rice',
//   //     content: 'total sales, stock, price, active'
//   //   },
//   //   {
//   //     title: 'Boiled Sweets',
//   //     content: 'total sales, stock, price, active'
//   //   }
//   // ];