angular.module('app').factory('clAuth', function($http, clIdentity, $q, clUser) {
  return {
    authenticateUser: function(username, password){
      var dfd = $q.defer();
      $http.post('/login', {username:username, password:password}).then(function(response){
        if(response.data.success){
          var user = new clUser();
          angular.extend(user, response.data.user);
          clIdentity.currentUser = user;
          dfd.resolve(true);
        }else{
          dfd.resolve(false);
        }
      });
      return dfd.promise;
    },
    
    createUser: function(newUserData){
      var newUser = new clUser(newUserData);
      var dfd = $q.defer();
      newUser.$save().then(function() {
        clIdentity.currentUser = newUser;
        dfd.resolve();
      }, function(response){
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },
    updateCurrentUser: function(newUserData){
      var dfd = $q.defer();
      var clone = angular.copy(clIdentity.currentUser);
      angular.extend(clone, newUserData);
      clone.$update().then(function(){
        clIdentity.currentUser = clone;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },
    logoutUser: function () {
      var dfd = $q.defer();
      $http.post('/logout', {logout:true}).then(function(){
        clIdentity.currentUser = undefined;
        dfd.resolve();
      });
      return dfd.promise;
    },
    authorizeCurrentUserForRoute: function(role) {
      if(clIdentity.isAuthorized(role)) {
        return true;
      } else {
        return $q.reject('not authorized');
      }
    },
    authorizeAuthenticatedUserForRoute: function(){
      if(clIdentity.isAuthenticated()) {
        return true;
      } else{
        return $q.reject('not authorized');
      }
    }
  };
});