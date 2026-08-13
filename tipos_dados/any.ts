// Tipo any em TypeScript: flexível, mas que reduz a segurança de tipos.

// O tipo any é o mais genérico do TypeScript.
// É usado quando não se sabe o tipo de dado que será recebido ou retornado.
// Quando nenhum tipo é informado e não há inferência, o TypeScript pode assumir any.
// Evite usar any, pois a variável passa a se comportar como JavaScript, perdendo a tipagem.

let valorQualquer: any = 10;

// Por que o any é perigoso
const a: any = 888;
const b: any = ['Olá'];

const c = a + b;

/**
 * Aqui deveria dar erro por somar tipos diferentes, mas como os dois são any, o código é aceito.
 */

// console.log(c);

let frase; // o tipo da variável será inferido como any
frase = "Olá, tudo bem?";
// console.log(frase); // aqui 'frase' é do tipo string

// Uso correto do any
const formulario: { [campoFormulario: string]: any } = {
  nome: "João",       // string
  idade: 30,          // number
  email: "joao@email.com", // string
  matriculado: true   // boolean
};

console.log(formulario);
// Nesse caso o any faz sentido, pois o objeto tem diferentes tipos de dados (dinâmicos).
