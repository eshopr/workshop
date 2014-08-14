// app.js

// define our application and pull in ngRoute and ngAnimate
var pageController = angular.module('pageController', ['ui.router', 'ngAnimate']);

pageController.controller('pageController', 
    function($resource,$scope, $http, IngredientFactory) { 
        // we now must find some way to put ingredients in the 

    $scope.pageClass = 'digital factory';
    $scope.pageClass = 'production line';
    $scope.rainingPhrase = $(".raining-text");
    $scope.tl = new TimelineLite();
    $scope.tl.add(TweenLite.set($scope.rainingPhrase, {bottom: 250}));

    $scope.dostuff = function() {
        console.log('this');
     
      $scope.tl.add(TweenLite.set($scope.rainingPhrase, {bottom: 250}));
      $scope.tl.add(TweenLite.to($scope.rainingPhrase, 2, {bottom:5, ease: Bounce.easeOut}));
      // var splitPhrase = new SplitText("#raining-text", {type: "chars"});
      var tl = new TimelineLite({delay:0.5});
      // tl.set(splitPhrase.chars, {bottom: 250});
      // tl.staggerTo(splitPhrase.chars, 2, {bottom: 5, ease: Bounce.easeOut}, 0.02);      
    }
    $scope.domorestuff = function() {
        console.log('this');
     
      $scope.tl.add(TweenLite.set($scope.rainingPhrase, {bottom: 250}));
      $scope.tl.add(TweenLite.to($scope.rainingPhrase, 2, {bottom:5, ease: Bounce.easeOut}));
      // var splitPhrase = new SplitText("#raining-text", {type: "chars"});
      var tl = new TimelineLite({delay:0.5});
      // tl.set(splitPhrase.chars, {bottom: 250});
      // tl.staggerTo(splitPhrase.chars, 2, {bottom: 5, ease: Bounce.easeOut}, 0.02);      
    }

});

// about page controller
pageController.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

// contact page controller
pageController.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});
