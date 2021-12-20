// array/vetores
/*
// declarar
let a = ['string', 1, true];

// guarda váro=ios tipos de valores
let array = [
  'str',
  1,
  true,
  ['array'],
  ['outro array', ['array dentro do outro'], 5],
  false,
];
console.log(array);

// forEach() - itera o array
array.forEach(function (item, index) {
  //console.log(item, index);
});

// push() add item no final
array.push('novo item');
console.log(array);

// pop() remove item no final
array.pop();
console.log(array);

// shift() remove item no inicio
array.shift();
console.log(array);

// unshift() add item no inicio
array.unshift(true);
console.log(array);

// indexOf() retorna o indice de um valor
console.log(array.indexOf(true));

// splice() remove ou substitui um item pelo índice
array.splice(0, 3, 8, 'splice');
console.log(array);

// slice() retorna uma parte de um array existente
let novoArray = array.slice(1, 3);
console.log(array);
console.log(novoArray);
*/

// objetos

let object = {
  string: 'string',
  number: 1,
  boolean: true,
  array: ['array'],
  objetoInterno: { string: 'string' },
};
/*
console.log(object);
console.log(object.array);
console.log(object.boolean);
console.log(object.objetoInterno);
*/

var arrayInterno = object.array;
console.log(arrayInterno);

var {} = object;
