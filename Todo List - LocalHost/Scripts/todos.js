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
            }).then(function(){
              taskServicePost.empurrarTarefa(objeto).then(function (response) {
                console.log(response.status);
                $scope.objeto = {"id": objeto.id, "nomeTarefa": '', 'concluida': false}
              });
            });
        }
        $scope.put = function(objeto){
          var tarefas;
            taskServiceGet.obterTarefa().then(function(response){
                tarefas = response.data;
            })
            .then(function (){
                for (var i = 0; i < tarefas.length; i++) {
                    if(objeto.nomeTarefa === tarefas[i].nomeTarefa){
                        objeto.id = tarefas[i].id;
                        break;
                    }
                }
                taskServicePut.atualizarTarefa(objeto).then(function(response){
                    console.log(response.status);
                });
            });  
        };

        $scope.delete = function (objeto) {
            var tarefas
            taskServiceGet.obterTarefa().then(function (response) {
                tarefas = response.data;
            })
            .then(function () {
                for (var i = 0; i < tarefas.length; i++) {
                    if(objeto.nomeTarefa === tarefas[i].nomeTarefa){
                        objeto.id = tarefas[i].id;
                        break;
                    }
                }
                taskServiceDelete.deletarTarefa(objeto.id).then(function (response) {
                    console.log(response.status);
                })
            });
        }

    });
})();
