angular.module('app').factory('hfAuth', function($http, hfIdentity, $q, hfUser) {
  return {
    authenticateUser: function(username, password){
      var dfd = $q.defer();
      $http.post('/login', {username:username, password:password}).then(function(response){
        if(response.data.success){
          var user = new hfUser();
          angular.extend(user, response.data.user);
          hfIdentity.currentUser = user;
          dfd.resolve(true);
        }else{
          dfd.resolve(false);
        }
      });
      return dfd.promise;
    },
    
    createUser: function(newUserData){
      var newUser = new hfUser(newUserData);
      var dfd = $q.defer();
      newUser.$save().then(function() {
        hfIdentity.currentUser = newUser;
        dfd.resolve();
      }, function(response){
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },
    updateCurrentUser: function(newUserData){
      var dfd = $q.defer();
      var clone = angular.copy(hfIdentity.currentUser);
      angular.extend(clone, newUserData);
      clone.$update().then(function(){
        hfIdentity.currentUser = clone;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },
    logoutUser: function () {
      var dfd = $q.defer();
      $http.post('/logout', {logout:true}).then(function(){
        hfIdentity.currentUser = undefined;
        dfd.resolve();
      });
      return dfd.promise;
    },
    authorizeCurrentUserForRoute: function(role) {
      if(hfIdentity.isAuthorized(role)) {
        return true;
      } else {
        return $q.reject('not authorized');
      }
    },
    authorizeAuthenticatedUserForRoute: function(){
      if(hfIdentity.isAuthenticated()) {
        return true
      } else{
        return $q.reject('not authorized');
      }
    }
  };
});