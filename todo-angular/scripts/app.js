(function() {
    'use strict';

    var app = angular.module('calculadora', ['ngRoute']);

    app.config(function ($routeProvider) {
      $routeProvider
        .when('/soma', {
          templateUrl: './routes/soma.html'
        })
        .when('/subtrair', {
          templateUrl: './routes/subtrair.html'
        })
        .when('/multiplicar', {
          templateUrl: './routes/multiplicar.html'
        })
        .when('/dividir', {
          templateUrl: './routes/dividir.html'
        })
        .otherwise({redirectTo: '/'})
    });
  })();
