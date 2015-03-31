angular.module('app').controller('clNavBarLoginCtrl',function($scope, $http, clIdentity, clNotifier, clAuth, $location){
    $scope.identity = clIdentity;
    $scope.signin = function(username, password){
       clAuth.authenticateUser(username, password).then(function(success){
           if(success){
               clNotifier.notify('You have successfully signed in!');
           } else {
               clNotifier.notify('Username/Password combination incorrect');
           }
       });
    }
    
    $scope.signout = function () {
        clAuth.logoutUser().then(function() {
            $scope.username = "";
            $scope.password = "";
            clNotifier.notify("You have signed out.");
            $location.path('/');
        });
    }
});