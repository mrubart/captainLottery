angular.module('app').controller('clPowerballDetailCtrl', function($scope,clCachedPowerballDraws,$routeParams) {
  clCachedPowerballDraws.query().$promise.then(function(collection){
    collection.forEach(function(powerballDraw){
      if(powerballDraw._id === $routeParams.id){
        $scope.powerballDraw = powerballDraw;
      }
    });
  });
});