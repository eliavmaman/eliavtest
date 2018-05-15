'use strict';

/* Services */

angular.module('openWeatherApp.services', ['ngResource'])
  .factory('openWeatherFactory', ['$http', function($http) {

    var apiKey = '279b4be6d54c8bf6ea9b12275a567156';
    var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743,703448,5128581,5165734&units=metric&APPID='+apiKey;
      this.getData=function(){
          return $http.get(apiBaseUrl);
      };
      return this;

  }]);
