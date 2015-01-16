angular.module('app').controller('hfSignupCtrl', function($scope, hfUser, hfNotifier, $location, hfAuth){
  $scope.signup = function() {
    var newUserData = {
      username: $scope.email,
      password: $scope.password,
      firstName: $scope.fname,
      lastName: $scope.lname
    };
    
    hfAuth.createUser(newUserData).then(function() {
      hfNotifier.notify('User account created!');
      $location.path("/");
    }, function(reason){
      hfNotifier.error(reason);
    });
  }
});