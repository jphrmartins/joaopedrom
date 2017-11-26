(function() {
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider
        .when('/excluido',{
            templateUrl: 'Routes/excluido.html'
        })
        .when('/pendente',{
            templateUrl: 'Routes/pendente.html'
        })
        .when('/cancelado',{
            templateUrl: 'Routes/cancelado.html' 
        })
        .when('/todos',{
            templateUrl: 'Routes/todos.html'  
        })
        .otherwise({redirectTo: '/'});
    });
})();