'use strict';

app.controller('RestaurantCtrl', function ($scope,
                                           $stateParams,
                                           $state,
                                           FeedbacksService,
                                           ApiService) {

  $scope.orderBy = 'date';      // set the default sort type
  $scope.sortReverse = false;   // set the default sort order
  $scope.search   = '';     // set the default search/filter term

  ModalLoading.show();
  ApiService.getRestaurant($stateParams.restaurantId).then(function(response) {
    console.log('OK', response);
    $scope.restaurant = response.data;
    ModalLoading.hide();
  }, function(response) {
    console.log('KO', response);
    ModalLoading.hide();
  });


  $scope.goToFeedbacksForDate = function(restaurant, menu) {
    FeedbacksService.restaurant = restaurant;
    FeedbacksService.menu = menu;
    $state.go("restaurant_feedbacks", { 'restaurantId': restaurant.id, 'date': menu.date });
  }

});
