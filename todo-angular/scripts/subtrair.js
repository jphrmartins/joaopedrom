(function() {
    'use strict';

    angular.module('calculadora').controller('subtrair', function ($scope) {
      $scope.calculo = {valorA:0, valorB:0, resultado:0};
      $scope.subtrair = function (calculo) {
        calculo.resultado = parseFloat(calculo.valorA) - parseFloat(calculo.valorB);
      }
    });
})();
