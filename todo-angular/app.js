(function() {
    'use strict';

    var app = angular.module('calculadora', ['ngRoute']);

    app.config(function ($routeProvider) {
      $routeProvider
        .when('/soma', {
          templateUrl: 'soma.html'
        })
        .when('/subtrair', {
          templateUrl: 'subtrair.html'
        })
        .when('/multiplicar', {
          templateUrl: 'multiplicar.html'
        })
        .when('/dividir', {
          templateUrl: 'dividir.html'
        })
        .otherwise({redirectTo: '/'})
    });

    app.controller('principalController', function ($scope) {
      $scope.listaTarefas = [];
      $scope.meuEvento = function (tarefa) {

        var novaTarefa = {};
        novaTarefa.nome = tarefa.nome;
        novaTarefa.valor = tarefa.valor;
        $scope.listaTarefas.push(novaTarefa);
      }

      $scope.tarefa = {nome: "ola", valor: 12};
    });

})();
