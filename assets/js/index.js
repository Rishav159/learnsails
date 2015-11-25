var app = angular.module("exampleAngularApp",[]);

app.controller("exampleController",["$scope",function($scope){
  var animals = [{type:"mammal",species:"dog"},{type:"mammal",species:"bat"},{type:"reptile",species:"lizard"}];
  var isotope = ["barium","lithum","chromium","balleruim","somethingmium"];
  $scope.animals = animals;
  $scope.element = isotope;
  $scope.name = "shubham";
  $scope.src = "https://docs.angularjs.org/img/angularjs-for-header-only.svg";
}])
