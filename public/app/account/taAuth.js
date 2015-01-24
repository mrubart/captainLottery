angular.module('app').factory('taAuth', function($http, taIdentity, $q, taUser) {
  return {
    authenticateUser: function(username, password){
      var dfd = $q.defer();
      $http.post('/login', {username:username, password:password}).then(function(response){
        if(response.data.success){
          var user = new taUser();
          angular.extend(user, response.data.user);
          taIdentity.currentUser = user;
          dfd.resolve(true);
        }else{
          dfd.resolve(false);
        }
      });
      return dfd.promise;
    },
    
    createUser: function(newUserData){
      var newUser = new taUser(newUserData);
      var dfd = $q.defer();
      newUser.$save().then(function() {
        taIdentity.currentUser = newUser;
        dfd.resolve();
      }, function(response){
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },
    updateCurrentUser: function(newUserData){
      var dfd = $q.defer();
      var clone = angular.copy(taIdentity.currentUser);
      angular.extend(clone, newUserData);
      clone.$update().then(function(){
        taIdentity.currentUser = clone;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },
    logoutUser: function () {
      var dfd = $q.defer();
      $http.post('/logout', {logout:true}).then(function(){
        taIdentity.currentUser = undefined;
        dfd.resolve();
      });
      return dfd.promise;
    },
    authorizeCurrentUserForRoute: function(role) {
      if(taIdentity.isAuthorized(role)) {
        return true;
      } else {
        return $q.reject('not authorized');
      }
    },
    authorizeAuthenticatedUserForRoute: function(){
      if(taIdentity.isAuthenticated()) {
        return true;
      } else{
        return $q.reject('not authorized');
      }
    }
  };
});