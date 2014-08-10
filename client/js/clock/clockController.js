'use strict';

var clockController = angular.module('clockController',[]);

clockController.controller('clockController',
  function($scope){
    $scope.number = 12;
    $scope.clock = {
      times: []
    };
    $scope.one = 0;
    $scope.two = 0;
    $scope.three = 0;
    $scope.four = 0;
    $scope.processNumber =  function(input){
      var num = input;
      var n = num.toString();
      var l = n.length;
      if(l === 1){
        n = '000'+n
      } 
      else if (l === 2){
        n = '00'+n
      } 
      else if (l === 3 ){
        n = '0'+n
      }
      return n;
    }
    $scope.clock = setInterval(function() {
      // Do something every 5 seconds
      var n = $scope.processNumber($scope.number);

        $scope.$apply(function () {
          console.log(n);
          var narr = n.split('');
          console.log(narr);
          $scope.clock = narr;
          // $scope.clock = n;
          // $scope.clock.push(narr[0]);
          // $scope.clock.push(narr[1]);
          // $scope.clock.push(narr[2]);
          // $scope.clock.push(narr[3]);
          // $scope.one = narr[0];
          // $scope.two = narr[1];
          // $scope.three = narr[2];
          // $scope.four = narr[3];
        });
      
      if ($scope.number < 1000) {
        $scope.number++;
      } else {
        $scope.number = 0;
      }
  }, 2550);  
      
  }                           
);

