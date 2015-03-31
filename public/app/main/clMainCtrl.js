angular.module('app').controller('clMainCtrl', function ($scope, clCachedLotteries) {
    $scope.lotteries = clCachedLotteries.query();
});
