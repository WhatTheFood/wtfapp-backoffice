app.factory('ApiService', function ($http,
                                    $q,
                                    Constants) {

  // test@laposte.net
  // test

  return {

    getUsers: function() {
      var deferred = $q.defer();

      return $http.get(Constants.API_URL + '/users/')
        .success(function (response) {
          deferred.resolve(response);
        })
        .error(function (response) {
          deferred.reject(response);
        });

    }

  }

});
