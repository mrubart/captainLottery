angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {auth: function(clAuth){
        return clAuth.authorizeCurrentUserForRoute('admin');
      }},
    user: {auth: function(clAuth){
        return clAuth.authorizeAuthenticatedUserForRoute();
      }}

  };
  
  $locationProvider.html5Mode(true); 
  $routeProvider
  .when('/', { templateUrl: '/partials/main/main', controller: 'clMainCtrl' })
  .when('/admin/users', { templateUrl: '/partials/admin/user-list', controller: 'clUserListCtrl', resolve: routeRoleChecks.admin})
  .when('/signup', {templateUrl: "partials/account/signup", controller:'clSignupCtrl'})
  .when('/profile', {templateUrl: "partials/account/profile", controller:'clProfileCtrl', resolve:routeRoleChecks.user})
  .when('/courses', {templateUrl: "partials/courses/course-list", controller:'clCourseListCtrl'})
  .when('/courses/:id', {templateUrl: "partials/courses/course-details", controller:'clCourseDetailCtrl'})
  .when('/lotteries', {templateUrl: "partials/lotteries/lottery-list", controller:'clLotteryListCtrl'})
  .when('/lotteries/:id', {templateUrl: "partials/lotteries/lottery-details", controller:'clLotteryDetailCtrl'})
  .when('/scrapers', {templateUrl: "partials/scraper/scraper-list", controller:'clScraperListCtrl', resolve:routeRoleChecks.admin})
  .when('/scrapers/:id', {templateUrl: "partials/scraper/scraper-details", controller:'clScraperDetailCtrl', resolve:routeRoleChecks.admin})
  .when('/powerball', {templateUrl: "partials/powerball/powerball-list", controller:'clPowerballListCtrl'})
  .when('/powerball/:id', {templateUrl: "partials/powerball/powerball-details", controller:'clPowerballDetailCtrl'});
});

angular.module('app').run(function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function(evt, current,previous,rejection){
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  });
});