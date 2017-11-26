(function() {
    'use strict';

    angular.module('app').service('taskServicePut', function($http){
        this.atualizarTarefa = function(objeto){
            return $http.put('http://localhost:8083/todo/update', objeto);
        }

    });
})();
