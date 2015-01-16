angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {auth: function(hfAuth){
        return hfAuth.authorizeCurrentUserForRoute('admin');
      }},
    user: {auth: function(hfAuth){
        return hfAuth.authorizeAuthenticatedUserForRoute();
      }}

  };
  
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', { templateUrl: '/partials/main/main', controller: 'hfMainCtrl' })
  .when('/admin/users', { templateUrl: '/partials/admin/user-list',
    controller: 'hfUserListCtrl', resolve: routeRoleChecks.admin
  })
  .when('/signup', {templateUrl: "partials/account/signup", controller:'hfSignupCtrl'})
  .when('/profile', {templateUrl: "partials/account/profile", controller:'hfProfileCtrl', resolve:routeRoleChecks.user})
  .when('/courses', {templateUrl: "partials/courses/course-list", controller:'hfCourseListCtrl'})
  .when('/courses/:id', {templateUrl: "partials/courses/course-details", controller:'hfCourseDetailCtrl'})


});

angular.module('app').run(function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function(evt, current,previous,rejection){
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  });
});