angular.module('app').controller('clLotteryDetailCtrl', function($scope,clCachedLotteries,$routeParams) {
  clCachedLotteries.query().$promise.then(function(collection){
    collection.forEach(function(lottery){
      if(lottery._id === $routeParams.id){
        $scope.lottery = lottery;
      }
    });
  });
});