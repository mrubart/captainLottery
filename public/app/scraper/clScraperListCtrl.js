angular.module('app').controller('clScraperListCtrl', function($scope, clCachedScrapers){
  $scope.scrapers = clCachedScrapers.query();
  
  $scope.sortOptions =[{value:"title", text: "Sort by Title"},
    {value: "scrapeDate", text: "Sort by Scraped Date"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});