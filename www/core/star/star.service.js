'use strict';

angular.
  module('core.star').
  factory('Star', ['$resource',
    function($resource) {
      return $resource('data/stars.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);