(function() {
    'use strict';

    angular.module('calculadora').controller('dividir', function ($scope) {
      $scope.calculo = {valorA:0, valorB:0, resultado:0};
      $scope.dividir = function (calculo) {
        if (calculo.valorB == 0) {
          calculo.resultado = 'Impossivel dividir por ZERO'
        }else{
          calculo.resultado = parseFloat(calculo.valorA) / parseFloat(calculo.valorB);
        }
      }
    });
})();
