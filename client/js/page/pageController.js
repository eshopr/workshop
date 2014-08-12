// app.js

// define our application and pull in ngRoute and ngAnimate
var pageController = angular.module('pageController', ['ui.router', 'ngAnimate']);

pageController.controller('pageController', 
    function($resource,$scope, $http, IngredientFactory) { 
        // we now must find some way to put ingredients in the 
        $scope.pageClass = 'page-home';

});

// // CONTROLLERS ============================================

// // home page controller
pageController.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

// about page controller
pageController.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

// contact page controller
pageController.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});