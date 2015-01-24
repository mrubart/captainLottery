angular.module('app').factory('taIdentity', function($window, taUser){
  var currentUser;
  if(!!$window.bootstrappedUserObject){
    currentUser = new taUser();
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