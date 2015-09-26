'use strict';

app.controller('FeedbacksForDateCtrl', function ($scope,
                                                 $stateParams,
                                                 FeedbacksService,
                                                 ApiService) {

  FeedbacksService.getFeedbacksForDate($stateParams.restaurantId, $stateParams.date).then(function(res) {
    $scope.restaurant = res.restaurant;
    $scope.menu = res.menu;
  })

});
