'use strict';

app.controller('LoginCtrl', function ($scope,
                                      AuthService,
                                       ApiService) {


  $scope.user = {
    'email': 'test@laposte.net',
    'password': 'test'
  };

  $scope.submit = function(user) {

    AuthService.login(user, null).then(function(response) {
      console.log('OK ', response.data);
    },
    function(response) {
      console.log('KO ', response);
    })
  };

});
