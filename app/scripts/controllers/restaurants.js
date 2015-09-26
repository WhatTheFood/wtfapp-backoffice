'use strict';

app.controller('RestaurantsCtrl', function ($scope,
                                            ApiService) {

  $scope.orderBy = 'title';      // set the default sort type
  $scope.sortReverse = false;   // set the default sort order
  $scope.search   = '';     // set the default search/filter term

  ModalLoading.show();
  ApiService.getRestaurants().then(function(response) {
    console.log('OK', response);
    $scope.restaurants = response.data;
    ModalLoading.hide();
  }, function(response) {
    // TODO: handle error response
    console.log('KO', response);
    ModalLoading.hide();
  });


  $scope.enable = function(restaurant) {
    ModalLoading.show();
    ApiService.postEnableRestaurant(restaurant).then(function(response) {
      console.log('OK', response);
      restaurant.is_enable = true;
      ModalLoading.hide();
    }, function(response) {
      // TODO: handle error response
      console.log('KO', response);
      ModalLoading.hide();
    });
  };

  $scope.disable = function(restaurant) {
    ModalLoading.show();
    ApiService.postDisableRestaurant(restaurant).then(function(response) {
      console.log('OK', response);
      restaurant.is_enable = false;
      ModalLoading.hide();
    }, function(response) {
      // TODO: handle error response
      console.log('KO', response);
      ModalLoading.hide();
    });
  };

});
