(function() {
    'use strict';

    angular.module('app').controller('excluidosController', function ($scope, $rootScope) {
        
        if(!$scope.tarefasExcluidos){
            $scope.tarefasExcluidos = []
           }
           

       for (var i = 0; i < $rootScope.todasTarefas.length; i ++) {
           if ($rootScope.todasTarefas[i].status === 'excluido') {
               $scope.tarefasExcluidos.push($rootScope.todasTarefas[i]);
           }
       }
      
      

    });
})();