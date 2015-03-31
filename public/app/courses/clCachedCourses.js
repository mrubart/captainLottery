angular.module('app').factory('clCachedCourses', function(clCourse) {
  var courseList;
  
  return {
    query: function() {
      if(!courseList) {
        courseList = clCourse.query();
      }
      
      return courseList;
    }
  }
});