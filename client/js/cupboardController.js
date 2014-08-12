var cupboardController = angular.module('cupboardController', ['ui.bootstrap']);

cupboardController.controller('cupboardController', function(
  $resource,
  $scope, 
  $http, 
  IngredientFactory
  ) { 
  // we now must find some way to put ingredients in the 
  $scope.works = 'cupboardController';
  $scope.ingredients = {};
  $scope.item = {};
  $scope.formData = {};
  // $scope.newItem = {
  //     "sku" : "String",
  //     "productName" : "String",
  //     "price": "String",
  //     "inventory": "String",
  //     "image": "String",
  //   };
  
  function init() {
    IngredientFactory.getIngredients().then(function(response) {
      console.log(response)
        $scope.ingredients = response.data;
    });
  }
  init();

  $scope.createIngredient = function(){
    IngredientFactory.insertIngredient($scope.formData).then(function(response) {

      console.log(response);
      $scope.formData = {}; // clear the form so our user is ready to enter another
      $scope.ingredients = response.data;
    }); 
  }

  $scope.deleteIngredient = function(id){
    var ohm = id;
    console.log('var ohm = '+id)
    IngredientFactory.deleteIngredient(ohm).then(function(response) {
      console.log(response);
      $scope.ingredients = response.data;
    });
    $scope.$apply
  }
  $scope.updateIngredient = function(id){
    // should accept formdata 
  }
  $scope.showIngredient = function(id){
    IngredientFactory.showIngredient(id).then(function(response) {
      console.log(response);
      $scope.item = response.data;
    }); 
  }

  $scope.editThisIngredient = false;

  $scope.switchToEdit = function(id){
    $scope.editThisIngredient = id;
  }
  $scope.discardEdit = function(id){
    $scope.editThisIngredient = false;
  }

});


  // // console.log($scope.ingredients);
  //    $scope.myVar = 1;

  //  $scope.$watch('myVar', function() {
  //      alert('hey, myVar has changed!');
  //  });

  //  $scope.buttonClicked = function() {
  //     $scope.myVar = 2; // This will trigger $watch expression to kick in
  //  };