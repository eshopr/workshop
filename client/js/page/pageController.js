// app.js

// define our application and pull in ngRoute and ngAnimate
var pageController = angular.module('pageController', ['ui.router', 'ngAnimate']);

pageController.config([
    '$stateProvider', 
    '$urlRouterProvider', 
    '$locationProvider', 
    '$httpProvider', 
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    var access = routingConfig.accessLevels;

    // Public routes
    $stateProvider
    // home page
    .state('/one', {
        templateUrl: 'page/home',
        controller: 'mainController'
    })
    // about page
    .state('/two', {
        templateUrl: 'page/about',
        controller: 'aboutController'
    })
    // contact page
    .state('/three', {
        templateUrl: 'page/contact',
        controller: 'contactController'
    });
    $urlRouterProvider.otherwise('/one');
}]);

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