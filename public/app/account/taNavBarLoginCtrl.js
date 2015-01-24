angular.module('app').controller('taNavBarLoginCtrl',function($scope, $http, taIdentity, taNotifier, taAuth, $location){
    $scope.identity = taIdentity;
    $scope.signin = function(username, password){
       taAuth.authenticateUser(username, password).then(function(success){
           if(success){
               taNotifier.notify('You have successfully signed in!');
           } else {
               taNotifier.notify('Username/Password combination incorrect');
           }
       });
    }
    
    $scope.signout = function () {
        taAuth.logoutUser().then(function() {
            $scope.username = "";
            $scope.password = "";
            taNotifier.notify("You have signed out.");
            $location.path('/');
        });
    }
});