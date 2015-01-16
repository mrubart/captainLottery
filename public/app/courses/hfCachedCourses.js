angular.module('app').factory('hfCachedCourses', function(hfCourse) {
  var courseList;
  
  return {
    query: function() {
      if(!courseList) {
        courseList = hfCourse.query();
      }
      
      return courseList;
    }
  }
});