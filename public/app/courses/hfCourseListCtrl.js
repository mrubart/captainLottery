angular.module('app').controller('hfCourseListCtrl', function($scope, hfCachedCourses){
  $scope.courses = hfCachedCourses.query(); 
  
  $scope.sortOptions = [{value:"title", text: "Sort by Title"},
    {value: "published", text: "Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
}); 