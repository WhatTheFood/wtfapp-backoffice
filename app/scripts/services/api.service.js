app.factory('ApiService', function ($http,
                                    $q,
                                    Constants) {

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

      return $http.get(Constants.API_URL + '/restaurants/admin/')
        .success(function (response) {
          deferred.resolve(response);
        })
        .error(function (response) {
          deferred.reject(response);
        });
    },

    getRestaurant : function(id) {
      var deferred = $q.defer();

      return $http.get(Constants.API_URL + '/restaurants/' + id)
        .success(function (response) {
          deferred.resolve(response);
        })
        .error(function (response) {
          deferred.reject(response);
        });
    },

    postEnableRestaurant : function(restaurant) {
      var deferred = $q.defer();

      return $http.post(Constants.API_URL + '/restaurants/admin/enable', { 'restaurantId': restaurant.id})
        .success(function (response) {
          deferred.resolve(response);
        })
        .error(function (response) {
          deferred.reject(response);
        });
    },

    postDisableRestaurant : function(restaurant) {
      var deferred = $q.defer();

      return $http.post(Constants.API_URL + '/restaurants/admin/disable', { 'restaurantId': restaurant.id })
        .success(function (response) {
          deferred.resolve(response);
        })
        .error(function (response) {
          deferred.reject(response);
        });
    }

  }

});
