'use strict';

/**
 * @ngdoc overview
 * @name mobileAppBackendApp
 * @description
 * # mobileAppBackendApp
 *
 * Main module of the application.
 */
angular
  .module('mobileAppBackendApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngAria',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
