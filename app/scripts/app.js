'use strict';

var app = angular

  .module('wtfApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'cfp.hotkeys'
  ])

  .constant('Constants', {
    'API_URL': 'http://localhost:9000/api',
    //'API_URL': 'http://whatthefood.herokuapp.com/api',
    'VERSION': '0.1'
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('user-list', {
        url: '/users',
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })

      .state('restaurant-list', {
        url: '/restaurants',
        templateUrl: 'views/restaurants.html',
        controller: 'RestaurantsCtrl'
      })
      .state('restaurant', {
        url: '/restaurants/:restaurantId',
        templateUrl: 'views/restaurant.html',
        controller: 'RestaurantCtrl'
      })
      .state('restaurant_feedbacks', {
        url: '/restaurants/:restaurantId/:date',
        templateUrl: 'views/feedbacks_for_date.html',
        controller: 'FeedbacksForDateCtrl'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      });

  })

  .config(function ($locationProvider, $httpProvider) {
    //$locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .run(function ($rootScope, $state, AuthService) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {

      AuthService.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $state.go("login");
        }
      });

    });
  });

  // -- factories
app.factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location, Constants) {

  return {
    // Add authorization token to headers
    request: function (config) {
      config.headers = config.headers || {};
      if ($cookieStore.get('token')) {
        config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
      }
      return config;
    },

    // Intercept 401s and redirect you to login
    responseError: function(response) {
      console.log(response);
      if (response.status === 401
        && response.config.url != Constants.API_URL + "/users/login") {
        $location.path('/#/login');
        // remove any stale tokens
        $cookieStore.remove('token');
        return $q.reject(response);
      }
      else {
        return $q.reject(response);
      }
    }
  };

})

;
