(function() {
    'use strict'

    angular.module('app').service('taskServiceDelete', function($http){
        this.deletarTarefa = function(id){
            return $http.delete('http://localhost:8083/todo/delete/' + id);   
        }
    });
})();