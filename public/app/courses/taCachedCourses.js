angular.module('app').factory('taCachedCourses', function(taCourse) {
  var courseList;
  
  return {
    query: function() {
      if(!courseList) {
        courseList = taCourse.query();
      }
      
      return courseList;
    }
  }
});