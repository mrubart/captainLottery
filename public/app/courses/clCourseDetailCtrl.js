angular.module('app').controller('clCourseDetailCtrl', function($scope,clCachedCourses,$routeParams) {
  clCachedCourses.query().$promise.then(function(collection){
    collection.forEach(function(course){
      if(course._id === $routeParams.id){
        $scope.course = course;
      }
    });
  });
});