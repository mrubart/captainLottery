angular.module('app').controller('taProfileCtrl', function($scope, taAuth, taIdentity, taNotifier){
  $scope.email = taIdentity.currentUser.username;
  $scope.fname = taIdentity.currentUser.firstName;
  $scope.lname = taIdentity.currentUser.lastName;
  
  $scope.update = function(){
    var newUserData = {
     username: $scope.email,
     firstName: $scope.fname,
     lastName: $scope.lname
    };
    if($scope.password && $scope.password.length > 0){
      newUserData.password = $scope.password;
    }
    
    taAuth.updateCurrentUser(newUserData).then(function(){
      taNotifier.notify('Your user account has been updated');
    }, function(reason){
      taNotifier.error(reason);
    });
  };
  
});