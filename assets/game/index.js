var app = angular.module('questionCreator',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
  $routeProvider.
  when('/' , {
    controller : 'rootquestionController' ,
    templateUrl : 'views/rootTempelate.html'
  })
  .when('/:level' , {
    controller : 'levelquestionController' ,
    templateUrl : 'views/questionTempelate.html'
  })
  .otherwise({
    redirectTo : '/'
  });
}]);
app.controller('rootquestionController' , ['$scope' , '$http' , function($scope,$http){
  var obj = {};
  $http.get('/player/getuser').success(function(data){
    //data = JSON.parse(data);
    obj = data;
    console.log(data);
    $scope.name = obj.name;
    $scope.currlevel = obj.current_level;
    var level = parseInt($scope.currlevel);
    //level++;
    $scope.highest = obj.highest_score;
    $scope.gotonenextlevel = function(){
      window.location.href = '/game/#/' + ++level;
    }
  }).error(function(err){
    console.log(error);

  });

}]);
app.controller('levelquestionController' , ['$scope' , '$http'] , function($scope,$http){

});
