// estrutura de confição
/*
var jogador1 = 0;
var jogador2 = 1;
var placar;

// if, if aninhado e if ternário
jogador1 != -1 && jogador2 != -1
  ? console.log('Os jogadores são válidos')
  : console.log('Jogadores inválidos');

if (jogador1 > 0 && jogador2 == 0) {
  console.log('Jogador 1 marcou ponto!');
  placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 == 0) {
  console.log('Jogador 2 marcou ponto!');
  placar = jogador2 > jogador1;
} else {
  console.log('Ninguém marcou ponto.');
}

// switch case
switch (placar) {
  case (placar = jogador1 > jogador2):
    console.log('Jogador 1 ganhou');
    break;
  case (placar = jogador2 > jogador1):
    console.log('Jogador 2 ganhou');
    break;
  default:
    console.log('Ninguém ganhou');
    break;
}
*/

// estruturas de repetição

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {
  propriedade1: 'valor1',
  propriedade2: 'valor2',
  propriedade3: 'valor3',
};

// for
console.log('for');
for (let indice = 0; indice < array.length; indice++) {
  console.log(indice);
}

// for/in
console.log('for/in');
for (let i in array) {
  console.log(i);
}

// for/in com object
console.log('for/in com object');
for (i in object) {
  console.log(i);
}

// for/of
console.log('for/of');
for (i of array) {
  console.log(i);
}

// for/of com object
console.log('for/of com object');
for (i of object.propriedade1) {
  console.log(i);
}

// while
console.log('while');
var a = 0;
while (a < 10) {
  a++;
  console.log(a);
}

// do/while
console.log('do/while');
do {
  a++;
  console.log(a);
} while (a < 15);