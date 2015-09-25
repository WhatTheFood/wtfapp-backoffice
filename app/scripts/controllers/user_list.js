'use strict';


app.controller('UserListCtrl', function ($scope,
                                         ApiService) {

    $scope.users = [
      'loic', 'felicie'
    ];

    ApiService.getUsers().then(
      function (response) {
        console.log('OK', response);
      },
      function (response) {
        console.log('KO', response);
      }

    );

  });
