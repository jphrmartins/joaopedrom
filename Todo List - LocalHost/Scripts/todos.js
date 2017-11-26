(function() {
    'use strict';

    angular.module('app').controller('todosController', function ($scope, taskServiceGet, taskServicePost, taskServicePut, taskServiceDelete) {
        $scope.objeto = {"id": 1, "nomeTarefa": '', 'concluida': false};
        $scope.get = function(){
            taskServiceGet.obterTarefa().then(function(response){
                var tarefas = response.data;
                for (var i = 0; i < tarefas.length; i++) {
                    console.log(tarefas[i]);
                }
            });
        }
        $scope.post = function(objeto){ 
            taskServiceGet.obterTarefa().then(function(response){
                objeto.id = response.data.length + 1;
                taskServicePost.empurrarTarefa(objeto).then(function(response){
                    console.log(response.status);
                    $scope.objeto = {"id": 0, "nomeTarefa": '', 'concluida': false};
                });            
            });
        }
        $scope.put = function(objeto){
            taskServiceGet.obterTarefa().then(function(response){
                var tarefas = response.data;
                for (var i = 0; i < tarefas.length; i++) {
                    if(objeto.nomeTarefa === tarefas[i].nomeTarefa){
                        objeto.id = tarefas[i].id;
                        taskServicePut.atualizarTarefa(objeto).then(function(response){
                            console.log(response.status);
                        });
                    }
                }
            });
        }
        $scope.delete = function (objeto) {
            /*taskServiceGet.obterTarefa().then(function(response){
                var tarefas = response.data;
                for (var i = 0; i < tarefas.length; i++) {
                    if(o-bjeto.nomeTarefa === tarefas[i].nomeTarefa){
                        
                    }
                }
            })*/
            taskServiceDelete.deletarTarefa().then(function(response){
                console.log('apagou', response.status);
            });
        }

    });
})();