angular.module('app').controller('taMainCtrl', function ($scope, taCachedCourses) {
    $scope.courses = taCachedCourses.query();
});
