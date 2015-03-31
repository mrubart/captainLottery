angular.module('app').controller('clLotteryListCtrl', function($scope, clCachedLotteries){
  $scope.lotteries = clCachedLotteries.query();
  
  $scope.sortOptions =[{value:"title", text: "Sort by Title"},
    {value: "drawDate", text:"Sort by Draw Date"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});