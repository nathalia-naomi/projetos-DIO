// tipos primitivos

// boolean
var boleano = false;
console.log(typeof boleano);

// number
var numero = 1;
console.log(typeof numero);

// string
var nome = 'nathaila';
console.log(typeof nome);

// function
var funcao = function () {};
console.log(typeof funcao);

var variavel1 = 'nathalia';
let variavel2 = 'naomi';
const variavel3 = 40;
console.log(variavel1);
console.log(variavel2);
console.log(variavel3);

var escopoGlobal = 'global';

function escopoLocal() {
  let escopoLocalInterno = 'local';
  console.log(escopoGlobal);
  console.log(escopoLocalInterno);
}

escopoLocal();

// atribuicao

var atribuicao = 'input';

// comparacao
var comparacao = '0' == 0;
console.log(comparacao);

// comparacaoIdentica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// adicao
var adicao = 1 + 1;
console.log(adicao);

// subtracao
var subtracao = 2 - 1;
console.log(subtracao);

// multiplicacao
var multiplicacao = 2 * 3;
console.log(multiplicacao);

// divisaoReal
var divisaoReal = 6 / 2;
console.log(divisaoReal);

// divisaoInteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// potencicao
var potencicao = 2 ** 10;
console.log(potencicao);

// maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor que
var menorQue = 5 < 2;
console.log(menorQue);

// maior Ou Igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// menor Ou Igual
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

// e &&
var e = true && false;
console.log(e);

// ou ||
var ou = true || false;
console.log(ou);

// nao !
var nao = !true;
console.log(nao);
