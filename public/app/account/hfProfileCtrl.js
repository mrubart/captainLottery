angular.module('app').controller('hfProfileCtrl', function($scope, hfAuth, hfIdentity, hfNotifier){
  $scope.email = hfIdentity.currentUser.username;
  $scope.fname = hfIdentity.currentUser.firstName;
  $scope.lname = hfIdentity.currentUser.lastName;
  
  $scope.update = function(){
    var newUserData = {
     username: $scope.email,
     firstName: $scope.fname,
     lastName: $scope.lname
    };
    if($scope.password && $scope.password.length > 0){
      newUserData.password = $scope.password;
    }
    
    hfAuth.updateCurrentUser(newUserData).then(function(){
      hfNotifier.notify('Your user account has been updated');
    }, function(reason){
      hfNotifier.error(reason);
    });
  };
  
});