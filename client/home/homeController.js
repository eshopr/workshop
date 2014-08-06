var homeController = angular.module('customerController', []);

homeController.controller('customerController', function($scope, $http) { 
  // we now must find some way to put home in the 
  //scope 
    $scope.registered = "Welcome back {username}";
    $scope.unregistered = "Did you know registered users get a family discout"; 
    // should probably be a directive or something
    // $scope.home = {}; // defing this here keeps your documentation in order
    // $scope.home = function(){
    	//}
   	$scope.goCats = false; // Ng-Show/Ng-Hide boilerplate

});