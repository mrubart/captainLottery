angular.module('app').controller('clProfileCtrl', function($scope, clAuth, clIdentity, clNotifier){
  $scope.email = clIdentity.currentUser.username;
  $scope.fname = clIdentity.currentUser.firstName;
  $scope.lname = clIdentity.currentUser.lastName;
  
  $scope.update = function(){
    var newUserData = {
     username: $scope.email,
     firstName: $scope.fname,
     lastName: $scope.lname
    };
    if($scope.password && $scope.password.length > 0){
      newUserData.password = $scope.password;
    }
    
    clAuth.updateCurrentUser(newUserData).then(function(){
      clNotifier.notify('Your user account has been updated');
    }, function(reason){
      clNotifier.error(reason);
    });
  };
  
});