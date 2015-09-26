'use strict';

app.controller('LoginCtrl', function ($scope,
                                      $location,
                                      AuthService,
                                      ApiService) {


  $scope.user = {
    'email': 'test@test.fr',
    'password': 'toto42'
  };

  $scope.submit = function(user) {

    AuthService.login(user, null).then(function(response) {
      console.log('OK ', response.data);
      $location.path('/');
    },
    function(response) {
      // TODO: handle error response
      $scope.error = "Invalid credentials";
      console.log('KO ', response);
    })
  };

});
