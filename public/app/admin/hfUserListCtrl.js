angular.module('app').controller('hfUserListCtrl', function($scope, hfUser){
  $scope.users = hfUser.query();
})