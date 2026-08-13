// Getters e setters em TypeScript: controle de acesso e modificação de propriedades.

// get
// Usado para acessar valores de propriedades privadas.
// Sintaxe: get nomeMetodo() { return this._nome; }


// Exemplo
class Quadrado {
    private _largura = 6;
    private _altura = 6;

    get calcularQuadrado() {
        return this._largura * this._altura;
    }
}

const quadrado = new Quadrado();
console.log(quadrado.calcularQuadrado);

// Exemplo 2
class Estudante {
    private _nome = "Luisa Hamon";
    private _semestre: number = 0;
    private _curso: string = "";

    public get nomeEstudante() {
        return this._nome;
    }
}

const estudante = new Estudante();
console.log(estudante.nomeEstudante);

// set
// Usado para modificar valores de propriedades privadas.
// Sintaxe: set nomeMetodo(valor) { this._nome = valor; }

// Exemplo
class Pessoa {
    nome: string = "";

    retornarNome(setNome: string) {
        this.nome = setNome;
    }
}

const pessoa = new Pessoa();
pessoa.retornarNome("Luisa");
console.log(pessoa.nome);

// Exemplo 2
class Estudante2 {
    public nome: string;
    public semestre: number;
    public curso: string;

    constructor(nomeEstudante: string, semestreEstudante: number, cursoEstudante: string) {
        this.nome = nomeEstudante;
        this.semestre = semestreEstudante;
        this.curso = cursoEstudante;
    }

    public get cursoEstudante() {
        return this.curso;
    }

    public set cursos(setCurso: string) {
        this.curso = setCurso;
    }
}

const estudante2 = new Estudante2("Luisa", 1, "ADS");
console.log(estudante2.cursoEstudante);
estudante2.cursos = "SI"; // alterando o valor do curso
console.log(estudante2.cursoEstudante);
