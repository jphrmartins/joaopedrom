(function () {
  'use strict'

  angular.module('calculadora').controller('calculadoraControl', function ($scope) {
    $scope.calculo = {valorA: 0, valorB: 0, resultado: ''};

    $scope.somar = function (calculo) {
      calculo.resultado = parseFloat(calculo.valorA) + parseFloat(calculo.valorB);
    }

    $scope.dividir = function (calculo) {
      if (calculo.valorB == 0) {
        calculo.resultado = 'Impossivel dividir por 0';
      }else{
        calculo.resultado = parseFloat(calculo.valorA) / parseFloat(calculo.valorB);
      }
    }

    $scope.multiplicar = function (calculo) {
      calculo.resultado = parseFloat(calculo.valorA) * parseFloat(calculo.valorB);
    }

    $scope.subtrair = function (calculo) {
      calculo.resultado = parseFloat(calculo.valorA) - parseFloat(calculo.valorB);
    }

  });
})();
