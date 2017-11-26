(function() {
    'use strict';

    angular.module('app').service('taskServiceGet', function($http){
        this.obterTarefa = function(){
            return $http.get('http://localhost:8083/todo/');
        }

    });
})();
