angular.module('app').controller('hfNavBarLoginCtrl',function($scope, $http, hfIdentity, hfNotifier, hfAuth, $location){
    $scope.identity = hfIdentity;
    $scope.signin = function(username, password){
       hfAuth.authenticateUser(username, password).then(function(success){
           if(success){
               hfNotifier.notify('You have successfully signed in!');
           } else {
               hfNotifier.notify('Username/Password combination incorrect');
           }
       });
    }
    
    $scope.signout = function () {
        hfAuth.logoutUser().then(function() {
            $scope.username = "";
            $scope.password = "";
            hfNotifier.notify("You have signed out.");
            $location.path('/');
        })
    }
});