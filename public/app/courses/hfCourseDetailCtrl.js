angular.module('app').controller('hfCourseDetailCtrl', function($scope,hfCachedCourses,$routeParams) {
  hfCachedCourses.query().$promise.then(function(collection){
    collection.forEach(function(course){
      if(course._id === $routeParams.id){
        $scope.course = course;
      }
    });
  });
});