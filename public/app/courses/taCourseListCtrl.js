angular.module('app').controller('taCourseListCtrl', function($scope, taCachedCourses){
  $scope.courses = taCachedCourses.query(); 
  
  $scope.sortOptions = [{value:"title", text: "Sort by Title"},
    {value: "published", text: "Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
}); 