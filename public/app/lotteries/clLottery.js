angular.module('app').factory('clLottery', function($resource){
  var lotteryResource = $resource('api/lotteries/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });
    
  return lotteryResource;
})