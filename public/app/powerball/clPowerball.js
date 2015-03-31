
angular.module('app').factory('clPowerball', function($resource) {
  var PowerBallResource = $resource('api/powerball/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });
  
  return PowerBallResource;
});