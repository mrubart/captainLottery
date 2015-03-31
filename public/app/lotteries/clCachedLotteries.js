angular.module('app').factory('clCachedLotteries', function(clLottery){
  var lotteryList;
  
  return {
    query: function(){
      if(!lotteryList){
        lotteryList = clLottery.query();
      }
      return lotteryList;
    }
  }
});