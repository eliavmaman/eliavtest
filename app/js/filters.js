'use strict';

/* Filters */

angular.module('openWeatherApp.filters', [])

  .filter('placeholder', [function() {
    return function (input,phvalue) {
      return (angular.isUndefined(input) || input == '') ? phvalue : input;
    };
  }]);
