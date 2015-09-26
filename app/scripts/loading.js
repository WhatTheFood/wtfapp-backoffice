/**
 * Created by loic on 26/09/15.
 */

app.directive('Loading', function() {

  return {
    restrict: 'E',
    scope: true,
    link: function($scope, elm, attrs) {
      $scope.showLoading = function () {
        angular.element('#loading').fadeIn();
        angular.element('#loading-body').fadeIn();
      };

      $scope.hideLoading = function () {
        angular.element('#loading').fadeOut();
        angular.element('#loading-body').fadeOut();
      };
    }

  }

});
