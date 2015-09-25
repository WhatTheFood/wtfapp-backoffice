'use strict';


app.controller('UserListCtrl', function ($scope,
                                         ApiService) {

    ApiService.getUsers().then(
      function (response) {
        console.log('OK', response);
        $scope.users = response.data;
      },
      function (response) {
        console.log('KO', response);
      }

    );

  });
