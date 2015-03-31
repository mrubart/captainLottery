angular.module('app').factory('clScraper', function($resource, clLottery){
  var ScraperResource = $resource('api/scrapers/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });
  
  if(!ScraperResource){
    return {};
  }else{
    return {ScraperResource};
  }
  
});