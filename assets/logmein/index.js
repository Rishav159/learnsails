var app = angular.module("demon",[]);

app.controller("loginController",['$scope','$http',function($scope,$http){
  var message = "Enter Username and password";
  $scope.message = message;
  $scope.submit = function(){
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    $http.post('/login',{username:user , password: pass}).success(function(data){
      console.log(data);
      if(data.found){
        if(data.check){
          window.location.href='/game';
        }
        else{
          $scope.message = " Wrong Password !";
        }
      }else{
        $scope.message = "User Not Found !";
      }
    }).error(function(err){
      console.log(err);
    });
  };

}]);
