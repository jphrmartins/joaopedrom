(function() {
    'use strict';

    angular.module('calculadora').controller('multiplicar', function ($scope) {
      $scope.calculo = {valorA:0, valorB:0, resultado:0};
      $scope.multiplicar = function (calculo) {
        calculo.resultado = parseFloat(calculo.valorA) * parseFloat(calculo.valorB);
      }
    });
})();
