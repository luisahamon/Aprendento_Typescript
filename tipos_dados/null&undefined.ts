// Tipo Null
// Representa ausência intencional de valor
// Variável cujo valor é indefinido
// Só pode receber o valor null
// Convertido como 0 - existe mas não tem valor

// Exemplo 1
let variavelNull: null = null;
//console.log(variavelNull);
//console.log(typeof variavelNull); // object

// Tipo Undefined
// Representa ausência de valor
// Variável não inicializada ou função sem retorno
// Convertido como NaN (Not a Number) - não existe variável

// Exemplo 2
let variavelUndefined: undefined;
console.log(variavelUndefined);
console.log(typeof variavelUndefined); // undefined

// Exemplo 3
console.log('Exemplo 1:', null == undefined);
console.log('Exemplo 2:', null === undefined);

