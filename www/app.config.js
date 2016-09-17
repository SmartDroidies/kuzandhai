'use strict';

angular.
  module('kuzandhaiApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/dashboard', {
          template: '<dashboard></dashboard>'
        }).
        when('/names', {
          template: '<name-list></name-list>'
        }).
        when('/names/:nameId', {
          template: '<name-detail></name-detail>'
        }).
        otherwise('/dashboard');
    }
  ])
  .config(function($mdThemingProvider) {
     $mdThemingProvider.theme('default')
     .primaryPalette('pink')
     .accentPalette('blue');
     $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
     $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
     $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  });


