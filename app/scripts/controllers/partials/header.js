'use strict';

app.controller('headerCtrl', function ($scope,
                                       $location,
                                       ApiService,
                                       AuthService) {

  $scope.isConnected = AuthService.isLoggedIn();

  $scope.logout = function() {
    AuthService.logout();
    $location.path('/login');
  }

});
