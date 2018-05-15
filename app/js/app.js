'use strict';

angular.module('openWeatherApp', [
    'ui.router',
    'openWeatherApp.filters',
    'openWeatherApp.services',
    'openWeatherApp.directives',
    'openWeatherApp.controllers',
    "iso-3166-country-codes"
]).config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('forecast', {
            url: '/',
            templateUrl: 'partials/forecast.html',
            controller: 'OpenWeatherCtrl'
        });
}]);
