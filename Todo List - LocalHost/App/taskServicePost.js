(function() {
    'use strict';

    angular.module('app').service('taskServicePost', function($http){
        this.empurrarTarefa = function(objeto){
            return $http.post('http://localhost:8083/todo/add',  objeto);
        }
    });
})();