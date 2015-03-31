angular.module('app').factory('clCachedScrapers', function(clScraper){
  var scraperList;
  
  return {
    query: function(){
      if(!scraperList){
        scraperList = clScraper.query();
      }
      return scraperList;
    }
  };
});