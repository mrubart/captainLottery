angular.module('app').controller('hfMainCtrl', function ($scope, hfCachedCourses) {
    $scope.courses = hfCachedCourses.query();
});
