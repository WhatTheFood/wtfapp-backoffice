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


  $scope.activate = function(restaurant) {
    ModalLoading.show();
    ApiService.postActivateRestaurants(restaurant).then(function(response) {
      console.log('OK', response);
      ModalLoading.hide();
    }, function(response) {
      // TODO: handle error response
      console.log('KO', response);
      ModalLoading.hide();
    });
  };

  $scope.deactivate = function(restaurant) {
    ModalLoading.show();
    ApiService.postDesactivateRestaurants(restaurant).then(function(response) {
      console.log('OK', response);
      ModalLoading.hide();
    }, function(response) {
      // TODO: handle error response
      console.log('KO', response);
      ModalLoading.hide();
    });
  };

});
