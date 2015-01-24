angular.module('app').controller('taSignupCtrl', function($scope, taUser, taNotifier, $location, taAuth){
  $scope.signup = function() {
    var newUserData = {
      username: $scope.email,
      password: $scope.password,
      firstName: $scope.fname,
      lastName: $scope.lname
    };
    
    taAuth.createUser(newUserData).then(function() {
      taNotifier.notify('User account created!');
      $location.path("/");
    }, function(reason){
      taNotifier.error(reason);
    });
  }
});