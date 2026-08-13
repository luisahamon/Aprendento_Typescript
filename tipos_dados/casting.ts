// Type casting em TypeScript: conversão explícita entre tipos.

// Permite converter uma variável de um tipo para outro tipo.
// Pode ser feito de duas formas:
// 1. Usando o operador as
// 2. Usando o operador <> (angle brackets)

// Exemplo 1: usando o operador as
let valor: any = "123";
let numero: number = valor as number;

// Exemplo 2: usando o operador <> (angle brackets)
let valor2: any = "456";
let numero2: number = <number>valor2;

// É parecido com a sintaxe de C# e Java.
