'use strict';
 
// /* Controllers Module for studentDetailApp application*/ 
var ingredientsController = angular.module('ingredientsController', ['ui.bootstrap']);

ingredientsController.controller('ingredientsController', function($scope, $http) { 
  // we now must find some way to put ingredients in the 
  //scope 
    $scope.studentName = "Sandeep Kumar Patel";
    $scope.studentMark = 75;
    $scope.thisisitheScopeValue = "ingredientsController";
    $scope.formData = {}; // should probably be a directive or something
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

    // $scope.ingredients = {}; // defing this here keeps your documentation in order
    // $scope.ingredients = function(){
});