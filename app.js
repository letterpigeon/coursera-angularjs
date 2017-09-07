(function() {
  'use strict';

  var x = "hello";

  angular.module("myFirstApp", [])
  .controller("myFirstController", DIController);

  DIController.$inject = ['$scope', '$filter']; //protects $scope and $filter from minification

  function DIController($scope, $filter)  {
    $scope.name = "Ban";
    $scope.sayHello = function () {
      return "Hello " + $scope.name;
    };
  }
})();
