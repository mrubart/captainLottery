angular.module('app').controller('clPowerballListCtrl', function($scope, clCachedPowerballDraws){
  console.log("got to powerball list ctrl.");
  $scope.powerballDraws = clCachedPowerballDraws.query();
  
  $scope.sortOptions =[{value:"title", text: "Sort by Title"},
    {value: "drawDate", text: "Sort by Drawing Date"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});