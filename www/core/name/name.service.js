'use strict';

angular.
  module('core.name').
  factory('Name', ['$resource',
    function($resource) {
      return $resource('names/names.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);