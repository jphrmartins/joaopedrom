(function() {
    'use strict';

    angular.module('app').controller('canceladosController', function ($scope, $rootScope) {
        
        if(!$scope.tarefasCancelados){
            $scope.tarefasCancelados = []
           }
           

       for (var i = 0; i < $rootScope.todasTarefas.length; i ++) {
           if ($rootScope.todasTarefas[i].status === 'cancelado') {
               $scope.tarefasCancelados.push($rootScope.todasTarefas[i]);
           }
       }
      
      

    });
})();