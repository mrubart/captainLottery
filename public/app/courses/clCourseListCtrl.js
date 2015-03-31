angular.module('app').controller('clCourseListCtrl', function($scope, clCachedCourses){
  $scope.courses = clCachedCourses.query(); 
  
  $scope.sortOptions = [{value:"title", text: "Sort by Title"},
    {value: "published", text: "Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
}); 