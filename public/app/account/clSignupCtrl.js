angular.module('app').controller('clSignupCtrl', function($scope, clUser, clNotifier, $location, clAuth){
  $scope.signup = function() {
    var newUserData = {
      username: $scope.email,
      password: $scope.password,
      firstName: $scope.fname,
      lastName: $scope.lname
    };
    
    clAuth.createUser(newUserData).then(function() {
      clNotifier.notify('User account created!');
      $location.path("/");
    }, function(reason){
      clNotifier.error(reason);
    });
  }
});