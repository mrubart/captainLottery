angular.module('app').controller('taCourseDetailCtrl', function($scope,taCachedCourses,$routeParams) {
  taCachedCourses.query().$promise.then(function(collection){
    collection.forEach(function(course){
      if(course._id === $routeParams.id){
        $scope.course = course;
      }
    });
  });
});