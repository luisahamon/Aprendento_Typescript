// Tipo object em TypeScript: representa todos os valores que não são primitivos.

// Exemplo 1
const pessoa: object = {
    nome: "João",
    idade: 30
};
// console.log(pessoa);

// Exemplo 2 — função com objeto literal
function onboarding(funcionario: { nome: string }) {
    return `Bem-vindo ${funcionario.nome}!`;
}

// console.log(onboarding({ nome: "João" }));

// Terminologia:
// - função: onboarding
// - objeto: funcionario
// - parâmetro/propriedade: nome

// Exemplo 3 — objects nomeados com interface
interface pessoa {
    nome: string;
    idade: number;
}

function onboarding2(pessoa: pessoa) {
    return `Bem-vindo ${pessoa.nome}!`;
}

// console.log(onboarding2({ nome: "João", idade: 30 }));

// Exemplo 4 — object com type alias
 type pessoa2 = {
    nome: string;
    funcao: string;
    tecnologias: string[];
};

function onboarding3(pessoa: pessoa2) {
    return `Bem-vindo ${pessoa.nome}! Você trabalha como ${pessoa.funcao} e usa ${pessoa.tecnologias.join(", ")} como tecnologias.`;
}

// console.log(onboarding3({ nome: "João", funcao: "Desenvolvedor", tecnologias: ["JavaScript", "TypeScript"] }));

// Exemplo 5 — object com interface e propriedade opcional
interface pessoa3 {
    nome: string;
    funcao: string;
    tecnologias: string[];
    salario?: number; // propriedade opcional
}

function onboarding4(pessoa: pessoa3) {
    return `Bem-vindo ${pessoa.nome}! Você trabalha como ${pessoa.funcao} e usa ${pessoa.tecnologias.join(", ")} como tecnologias.`;
}

// console.log(onboarding4({ nome: "João", funcao: "Desenvolvedor", tecnologias: ["JavaScript", "TypeScript"], salario: 5000 }));
// console.log(onboarding4({ nome: "Maria", funcao: "Designer", tecnologias: ["Figma", "Photoshop"] }));

// Exemplo 6 — readonly (propriedade comum em linguagens tipadas)
interface pessoa4 {
    nome: string;
    funcao: string;
    tecnologias: string[];
    readonly salario: number; // propriedade que não pode ser alterada
}

function onboarding5(pessoa: pessoa4) {
    return `Bem-vindo ${pessoa.nome}! Você trabalha como ${pessoa.funcao} e usa ${pessoa.tecnologias.join(", ")} como tecnologias.`;
}

// console.log(onboarding5({ nome: "João", funcao: "Desenvolvedor", tecnologias: ["JavaScript", "TypeScript"], salario: 5000 }));

// Exemplo 7 — tipos de extensão (herança entre interfaces)
interface Mae {
    nome: string;
    idade: number;
}

interface Pai {
    nome: string;
    idade: number;
}

interface Filha extends Mae, Pai {
    // herda nome e idade de Mae e Pai — não precisa declarar novamente
    sobrenome: string;
}

const filha: Filha = {
    nome: "Maria",
    idade: 20,
    sobrenome: "Silva"
};
// console.log(filha);

// Exemplo 8 — generics com objects
 type usuario = {
    nome: string;
    email: string;
};

// function acessarSistema(usuario: usuario) {
//     return usuario;
// }

// console.log(acessarSistema({ nome: "João", email: "joao@gmail.com" }));

 type admin = {
    nome: string;
    email: string;
    admin: boolean;
};

const Usuario: usuario = {
    nome: "João",
    email: "joao@gmail.com"
};

const Admin: admin = {
    nome: "João",
    email: "joao@gmail.com",
    admin: true
};

function acessarSistema<T>(usuario: T) { // função genérica que recebe um tipo T
    return usuario;
}

console.log(acessarSistema<usuario>(Usuario));
console.log(acessarSistema<admin>(Admin));
