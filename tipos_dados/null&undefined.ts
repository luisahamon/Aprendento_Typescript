// Tipos null e undefined em TypeScript: ausência de valor.

// Tipo null
// Representa a ausência intencional de valor.
// Uma variável cujo valor é nulo.
// Só pode receber o valor null.

// Exemplo 1
let variavelNull: null = null;
// console.log(variavelNull);
// console.log(typeof variavelNull); // object

// Tipo undefined
// Representa a ausência de valor.
// Uma variável não inicializada ou função sem retorno.

// Exemplo 2
let variavelUndefined: undefined;
console.log(variavelUndefined);
console.log(typeof variavelUndefined); // undefined

// Exemplo 3 — comparação
console.log('Exemplo 1:', null == undefined);
console.log('Exemplo 2:', null === undefined);
