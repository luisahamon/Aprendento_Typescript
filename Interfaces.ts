// Interfaces em TypeScript: contratos que definem propriedades, métodos e eventos.

// Uma interface é um contrato sintático que uma entidade deve obedecer.
// As interfaces definem propriedades, métodos e eventos.

// Exemplo 1
interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

const pessoa: Pessoa = {
    nome: "João",
    sobrenome: "Silva",
    idade: 30
};

function exibirNome(pessoa: Pessoa) {
    console.log(pessoa.nome);
}

function exibirSobrenome(pessoa: Pessoa) {
    console.log(pessoa.sobrenome);
}

function exibirIdade(pessoa: Pessoa) {
    console.log(pessoa.idade);
}

exibirNome(pessoa);
exibirSobrenome(pessoa);
exibirIdade(pessoa);

// Exemplo 2 — propriedade opcional
interface livro {
    titulo: string;
    autor: string;
    paginas?: number; // opcional
}

const livro: livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien"
};

console.log(livro.titulo);
console.log(livro.autor);

// Exemplo 3 — propriedade somente leitura
interface carro {
    readonly modelo: string; // somente leitura
    ano: number;
    valor?: number; // opcional
}

const carro: carro = {
    modelo: "Fiat", // somente leitura, não poderá ser alterado
    ano: 2020,
    valor: 50000 // opcional
};

console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.valor);

// Exemplo 4 — interface com métodos
interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(tipoComida: string): void;
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }

    comer(tipoComida: string): void {
        console.log(`O gato come ${tipoComida}`);
    }
}

const gato = new Gato("Mingau", 2, true);
gato.comer("ração");
console.log(gato);

// Exemplo 5: interface vs type alias

interface Pessoa_02 {
    nome: string;
    sobrenome: string;
    idade: number;
}

type Pessoa_03 = {
    nome: string;
    sobrenome: string;
    idade: number;
};

// Extensão de interfaces
interface Animal {
    nome: string;
    idade: number;
    tamanho: string;
}

interface Cachorro extends Animal {
    raca: string; // estende a interface Animal adicionando a propriedade raca
}

const cachorro: Cachorro = {
    nome: "Rex",
    idade: 2,
    tamanho: "grande",
    raca: "Labrador"
};

console.log(cachorro);

// Exemplo 2 — extensão com modificação
interface Funcionario {
    id: number;
    cargo: string;
    salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'salario'> { // Omit remove a propriedade salario
    linguagem: string; // adiciona a propriedade linguagem
}

const desenvolvedor: Desenvolvedor = {
    id: 1,
    cargo: "Desenvolvedor",
    linguagem: "TypeScript"
};

console.log(desenvolvedor);
