angular.module('app').factory('hfIdentity', function($window, hfUser){
  var currentUser;
  if(!!$window.bootstrappedUserObject){
    currentUser = new hfUser();
    angular.extend(currentUser, $window.bootstrappedUserObject);
  }
  return {
    currentUser: currentUser,
    isAuthenticated: function(){
      return !!this.currentUser;
    },
    isAuthorized: function(role) {
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }
  };
});