app.factory('FeedbacksService', function ($q, ApiService) {


  return {

    getFeedbacksForDate : function(restaurantId, date) {
      var deferred = $q.defer();

      ApiService.getRestaurant(restaurantId).then(function(response) {

        var restaurant = response.data;
        var found = _.findWhere(restaurant.menus, { date: date });

        if (!_.isUndefined(found)) {
          deferred.resolve({ 'restaurant': restaurant, 'menu': found });
        }
        else {
          deferred.reject(null); // date not found
        }


      }, function(response) {
        deferred.reject(response);
      });

      return deferred.promise;
    }

  }

});
