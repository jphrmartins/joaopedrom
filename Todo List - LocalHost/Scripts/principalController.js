(function() {
    'use strict';

    angular.module('app').controller('principalController', function ($scope, $rootScope) {
        $scope.tarefa = {titulo: '', descricao: '', status: 'pendente'};

       if(!$rootScope.todasTarefas){
           $rootScope.todasTarefas = [];
       }
        $scope.incluirTarefa = function(tarefa){
            $rootScope.todasTarefas.push(tarefa);
            console.log($rootScope.todasTarefas);
            $scope.tarefa = {titulo: '', descricao: '', status: 'pendente'};
       }
       $rootScope.excluir = function(tarefa){
           for (var i = 0; i < $rootScope.todasTarefas.length; i++) {
                if($rootScope.todasTarefas[i].titulo === tarefa.titulo){
                    $rootScope.todasTarefas[i].status = 'excluido';

                }
               
           }

        }
         $rootScope.cancelar = function(tarefa){
             for (var i = 0; i < $rootScope.todasTarefas.length; i++) {
                 if ($rootScope.todasTarefas[i].titulo === tarefa.titulo) {
                     $rootScope.todasTarefas[i].status = 'cancelado';
                     
                 }
                 
                 
             }
        }
          
    });

})();