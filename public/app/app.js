angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {auth: function(taAuth){
        return taAuth.authorizeCurrentUserForRoute('admin');
      }},
    user: {auth: function(taAuth){
        return taAuth.authorizeAuthenticatedUserForRoute();
      }}

  };
  
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', { templateUrl: '/partials/main/main', controller: 'taMainCtrl' })
  .when('/admin/users', { templateUrl: '/partials/admin/user-list',
    controller: 'taUserListCtrl', resolve: routeRoleChecks.admin
  })
  .when('/signup', {templateUrl: "partials/account/signup", controller:'taSignupCtrl'})
  .when('/profile', {templateUrl: "partials/account/profile", controller:'taProfileCtrl', resolve:routeRoleChecks.user})
  .when('/courses', {templateUrl: "partials/courses/course-list", controller:'taCourseListCtrl'})
  .when('/courses/:id', {templateUrl: "partials/courses/course-details", controller:'taCourseDetailCtrl'});


});

angular.module('app').run(function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function(evt, current,previous,rejection){
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  });
});