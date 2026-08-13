// Programação Orientada a Objetos em TypeScript: classes, modificadores de acesso e readonly.

// Elementos de uma classe:
// - Fields (campos)
// - Methods (métodos)
// - Constructors (construtores)
// - Classes aninhadas e interfaces — uma classe pode conter outras classes e interfaces

// Sintaxe
// class NomeDaClasse {
//     campo;
//     constructor() {
//     }
//     metodo;
// }

// Exemplo 1
class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string) { // construtor
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(): string { // método
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa("João", "Silva");
// console.log(pessoa.nomeCompleto());

// Exemplo 2 — sem constructor
class Estudante {
    codigoEstudante!: number; // ! indica que o campo será inicializado posteriormente
    nomeEstudante!: string;   // ! indica que o campo será inicializado posteriormente
}

const estudante = new Estudante();
estudante.codigoEstudante = 8764;
estudante.nomeEstudante = "João";
console.log(estudante.nomeEstudante);

// Modificadores de acesso das classes:
// - public: acessível de qualquer lugar (padrão)
// - private: acessível apenas dentro da classe
// - protected: acessível apenas dentro da classe e suas subclasses (filhas)

// Exemplo 1 — modificador public
class EstudantePublico {
    public codigoEstudante: number;
    public nomeEstudante: string;

    constructor(codigo: number, nome: string) {
        this.codigoEstudante = codigo;
        this.nomeEstudante = nome;
    }
}

const estudantePublico = new EstudantePublico(123, "João");
console.log(estudantePublico.codigoEstudante);
console.log(estudantePublico.nomeEstudante);

// Exemplo 2 — modificador private
class EstudantePrivado {
    private codigoEstudante: number;
    private nomeEstudante: string;

    constructor(codigo: number, nome: string) {
        this.codigoEstudante = codigo;
        this.nomeEstudante = nome;
    }

    retornarDados(): { codigo: number, nome: string } {
        return {
            codigo: this.codigoEstudante,
            nome: this.nomeEstudante
        };
    }
}

const estudantePrivado = new EstudantePrivado(456, "Maria");
console.log(estudantePrivado.retornarDados()); // o acesso só é possível pelo método da classe

// Exemplo 3 — modificador protected
class EstudanteProtegido {
    protected codigoEstudante: number;
    protected nomeEstudante: string;

    constructor(codigo: number, nome: string) {
        this.codigoEstudante = codigo;
        this.nomeEstudante = nome;
    }
}

class Pessoa_03 extends EstudanteProtegido {
    private curso: string;

    constructor(codigo: number, nome: string, curso: string) {
        super(codigo, nome);
        this.curso = curso;
    }

    retornarDados(): { codigo: number, nome: string, curso: string } {
        return {
            codigo: this.codigoEstudante,
            nome: this.nomeEstudante,
            curso: this.curso
        };
    }
}

const estudanteProtegido = new Pessoa_03(789, "Pedro", "TS");
console.log(estudanteProtegido.retornarDados());

// Readonly
// Torna uma propriedade somente leitura, ou seja, não pode ser modificada após a inicialização.

// Exemplo
class Funcionario {
    readonly dataNascimento: Date; // apenas leitura

    constructor(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}

const funcionario = new Funcionario(new Date(1990, 1, 1));
console.log(funcionario.dataNascimento);

// Exemplo 2 — parâmetro readonly no construtor
class Funcionario_02 {
    constructor(readonly dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}

// Exemplo 3
class Funcionario_03 {
    nome: string;
    readonly codigoFuncionario: number;

    constructor(nome: string, codigo: number) {
        this.nome = nome;
        this.codigoFuncionario = codigo;
    }
}

// Exemplo 4 — readonly com interface
interface Pessoa {
    nome: string;
    idade: number;
}

// const pessoa_4: Readonly<Pessoa> = {
//     nome: "João",
//     idade: 30
// };

// pessoa_4.nome = "Maria"; // Erro: Cannot assign to 'nome' because it is a read-only property
