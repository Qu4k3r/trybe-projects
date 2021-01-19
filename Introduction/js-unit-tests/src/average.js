/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const verifyArray = arr => arr.length > 0;
const verifyElement = (arr) => {
  let isTrue = true;
  arr.forEach((element) => {
    if (typeof (element) !== 'number') {
      isTrue = false;
    }
  });
  return isTrue;
};

const average = (arr) => {
  if (!verifyArray(arr) || !verifyElement(arr)) {
    return undefined;
  }
  let sumOfAll = 0;
  arr.forEach((element) => {
    sumOfAll += element;
  });
  return Math.round(sumOfAll / arr.length);
};

module.exports = average;
