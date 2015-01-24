angular.module('app').controller('taUserListCtrl', function($scope, taUser){
  $scope.users = taUser.query();
});