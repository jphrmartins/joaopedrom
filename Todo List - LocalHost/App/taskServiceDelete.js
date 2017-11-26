(function() {
    'use strict'

    angular.module('app').service('taskServiceDelete', function($http){
        this.deletarTarefa = function(){
            return $http.delete('http://localhost/todo/delete/:', 2);   
        }
    });
})();