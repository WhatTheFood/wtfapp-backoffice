'use strict';


app.controller('UsersCtrl', function ($scope,
                                         ApiService) {

  $scope.orderBy = 'email';      // set the default sort type
  $scope.sortReverse = false;   // set the default sort order
  $scope.search   = '';     // set the default search/filter term

  ModalLoading.show();
    ApiService.getUsers().then(
      function (response) {
        console.log('OK', response);
        $scope.users = response.data;
        ModalLoading.hide();
      },
      function (response) {
        console.log('KO', response);
        ModalLoading.hide();
      }

    );

  });


var ModalLoading = {
  show : function () {
    angular.element('#loading').fadeIn();
    angular.element('#loading-body').fadeIn();
  },

  hide : function() {
    angular.element('#loading').fadeOut();
    angular.element('#loading-body').fadeOut();
  }

}
