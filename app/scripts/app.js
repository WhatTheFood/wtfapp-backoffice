'use strict';

angular
  .module('wtfApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/users', {
        templateUrl: 'views/user_list.html',
        controller: 'UserListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
