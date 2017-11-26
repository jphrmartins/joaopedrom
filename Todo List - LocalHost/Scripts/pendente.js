(function() {
    'use strict';

    angular.module('app').controller('pendenteController', function ($scope, $rootScope) {
        
        if(!$scope.tarefasPendentes){
            $scope.tarefasPendentes = []
           }
           

       for (var i = 0; i < $rootScope.todasTarefas.length; i ++) {
           if ($rootScope.todasTarefas[i].status === 'pendente') {
               $scope.tarefasPendentes.push($rootScope.todasTarefas[i]);
           }
       }
      
      

    });
})();