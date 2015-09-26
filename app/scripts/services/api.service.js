app.factory('ApiService', function ($http,
                                    $q,
                                    Constants) {

  // test@laposte.net
  // test

  return {

    getUsers : function() {
      var deferred = $q.defer();

      return $http.get(Constants.API_URL + '/users/')
        .success(function (response) {
          deferred.resolve(response);
        })
        .error(function (response) {
          deferred.reject(response);
        });

    },

    getMe : function() {
      var deferred = $q.defer();

      return $http.get(Constants.API_URL + '/users/me')
        .success(function (response) {
          console.log('USER', response);
          deferred.resolve(response);
        })
        .error(function (response) {
          deferred.reject(response);
        });
    },

    // -- Restaurants

    getRestaurants : function() {
      var deferred = $q.defer();

      return $http.get(Constants.API_URL + '/restaurants')
        .success(function (response) {
          deferred.resolve(response);
        })
        .error(function (response) {
          deferred.reject(response);
        });
    },

    postActivateRestaurants : function(restaurant) {
      var deferred = $q.defer();

      return $http.post(Constants.API_URL + '/restaurants/' + restaurant.id + '/activate')
        .success(function (response) {
          deferred.resolve(response);
        })
        .error(function (response) {
          deferred.reject(response);
        });
    },

    postDesactivateRestaurants : function(restaurant) {
      var deferred = $q.defer();

      return $http.get(Constants.API_URL + '/restaurants/' + restaurant.id + '/deactivate')
        .success(function (response) {
          deferred.resolve(response);
        })
        .error(function (response) {
          deferred.reject(response);
        });
    }

  }

});
