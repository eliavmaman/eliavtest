'use strict';

/* Controllers */

angular.module('openWeatherApp.controllers', [])

// Controller for "open weather map" api data search
    .controller('OpenWeatherCtrl',
        ['$scope', 'openWeatherFactory', 'ISO3166',
            function ($scope, openWeatherFactory, ISO3166) {


                $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

                $scope.init = function () {
                    openWeatherFactory.getData().then(function (res) {
                        res.data;

                        $scope.weatherData = _.orderBy(res.data.list, [
                            function (item) {
                                return item.main.temp;
                            },
                            function (item) {
                                return item.main.humidity;
                            }
                        ], ["asc", "desc"]);

                        var index = closest($scope.weatherData, 21);

                        $scope.mostConvenient = $scope.weatherData[index];

                        getLeadings(index);
                    });
                };


                function getLeadings(mostConvenientIndex) {
                    $scope.leadings =$scope.weatherData.slice($scope.weatherData.lenght, mostConvenientIndex).reverse();
                }

                function closest(array, num) {
                    var i = 0;
                    var minDiff = 1000;
                    var ans;
                    for (i in array) {
                        var m = Math.abs(num - array[i].main.temp);
                        if (m < minDiff) {
                            minDiff = m;
                            ans = array[i].main.temp;
                        }
                    }
                    return i;
                }

            }]);
