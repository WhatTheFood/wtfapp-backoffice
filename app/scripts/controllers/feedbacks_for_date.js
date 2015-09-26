'use strict';

app.controller('FeedbacksForDateCtrl', function ($scope,
                                                 $stateParams,
                                                 FeedbacksService,
                                                 ApiService) {

  ModalLoading.show();
  FeedbacksService.getFeedbacksForDate($stateParams.restaurantId, $stateParams.date).then(function(res) {
    $scope.restaurant = res.restaurant;
    $scope.menu = res.menu;
    ModalLoading.hide();
  }, function(response) {
    // TODO: handle error response
    console.log('KO', response);
    ModalLoading.hide();
  });

  $scope.printThrownInfos = function(dish) {

    var dish1 = 0;
    var dish2 = 0;
    var dish3 = 0;
    var dish4 = 0;
    var total = 0;

    _.each(dish.feedback, function (feedback) {
      var thrown = feedback.thrown;
      total = total + thrown;

      if (thrown == 1) {
        dish1 = dish1 + 1;
      }
      else if (thrown == 2) {
        dish1 = dish2 + 1;
      }
      else if (thrown == 3) {
        dish1 = dish2 + 1;
      }
      else if (thrown == 4) {
        dish1 = dish3 + 1;
      }

    });

    var html = '';
    if (dish1 > 0) {
      html = '1: ' + dish1 + ' votes<br />';
    }
    if (dish2 > 0) {
      html = '2: ' + dish2 + ' votes<br />'
    }
    if (dish3 > 0) {
      html = '3: ' + dish3 + ' votes<br />'
    }
    if (dish4 > 0) {
      html = '4: ' + dish4 + ' votes<br />'
    }
    if (total > 0) {
      html = 'Total: ' + total + ' votes<br />';
    }


    if (total > 0 && dish.feedback.length > 0) {
      html = html + 'Average: ' + total / dish.feedback.length;
    }

    return html;
  };

});
