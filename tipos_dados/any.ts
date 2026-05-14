// Tipo Any
// É o tipo mais genérico do TypeScript
// É usado quando não se sabe o tipo de dado que será recebido/retornado
// Any é o tipo padrão do TypeScript - se não colocar o tipo na variável, ela será do tipo Any
// Evitar usar Any, pois perde-se a tipagem do TypeScript, a variável passa a se comportar como JavaScript

let valorQualquer: any = 10;

// Porque o Any é perigoso
const a: any = 888;
const b: any = ['Olá'];

const c = a + b;

/**
 * aqui deveria dar erro por somar tipos diferentes mas como os dois são any vai rodar
 */

// console.log(c);

let frase; // o tipo da variável será inferido como any
frase = "Olá, tudo bem?";
// console.log(frase); // aqui 'frase' é do tipo string

// Uso correto do Any
const formulario: { [campoFormulario: string]: any } = {
  nome: "João", // string
  idade: 30, // number
  email: "joao@email.com", // string
  matriculado: true // boolean
};
console.log(formulario);
// Nesse caso o Any faz sentido pois o objeto tem diferentes tipos de dados (tipos dinâmicos)