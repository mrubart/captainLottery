angular.module('app').controller('clScraperDetailCtrl', function($scope,clCachedScrapers,clScraper,$routeParams) {
  clCachedScrapers.query().$promise.then(function(collection){
    collection.forEach(function(scraper){
      if(scraper._id === $routeParams.id){
        $scope.scraper = scraper;
      }
    });
  });
  $scope.scrapeNow = function(){
    var scrapeId = $scope.scrapeThisOne
  };
});