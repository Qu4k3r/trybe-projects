/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const { type } = require('os');
const productDetails = require('../src/productDetails');
const obj = productDetails('obj1', 'obj2');
const productIds = [productDetails()[0].details.productId, productDetails()[1].details.productId];

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails()), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(productDetails()[0] && productDetails()[1] instanceof Object, true);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(obj[0], obj[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(productIds[0].endsWith('123') && productIds[1].endsWith('123'), true);
  });
});
