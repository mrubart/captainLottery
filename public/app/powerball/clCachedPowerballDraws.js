angular.module('app').factory('clCachedPowerballDraws', function(clPowerball){
  var powerballDraws;
  console.log('why am i here?');
  return {
    query: function(){
      if(!powerballDraws){
        powerballDraws = clPowerball.query();
      }
      return powerballDraws;
    }
  };
});