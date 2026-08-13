// Funções em TypeScript: declaração, anônimas, arrow functions, parâmetros opcionais,
// padrão, rest parameters e constructors.

// Uma função é um conjunto de código que executa uma tarefa específica:
// - facilita a reutilização de código;
// - facilita a manutenção;
// - facilita a leitura;
// - facilita os testes.

// Sintaxe de uma função
// function nomeDaFuncao() {
//     // código a ser executado
// }

// function nomeDaFuncao(parametro1: tipo, parametro2: tipo) {
//     // código a ser executado
// }

// function nomeDaFuncao(parametro1: tipo, parametro2: tipo): tipo {
//     // código a ser executado
//     return valor;
// }

// ** No livro Clean Code recomenda-se que as funções tenham o mínimo de parâmetros possível. **

// Exemplo — soma de dois números
function somarNumeros(a: number, b: number): number {
    return a + b;
}

const resultado = somarNumeros(1, 2);
console.log(resultado);

// Exemplo 2 — função anônima (função sem nome)
const saudar = function (mensagem: string) {
    return mensagem;
}

console.log(saudar("Olá"));

// Exemplo 3 — arrow function (não precisa da palavra reservada function)
const saudarArrow = (mensagem: string) => { // a seta => substitui a palavra function
    return mensagem;
}

console.log(saudarArrow("Olá"));

// Exemplo 4 — function constructor
const saudar_04 = new Function('mensagem', 'return " Fala " + mensagem');
console.log(saudar_04("Galera"));

// Optional Parameters
// Para tornar um parâmetro opcional, basta adicionar um ? após o nome do parâmetro.
function saudarPessoa(nome: string, sobrenome?: string) { // os parâmetros obrigatórios devem ser declarados antes dos opcionais
    if (sobrenome) {
        return `Olá, ${nome} ${sobrenome}!`;
    }
    return `Olá, ${nome}!`;
}

console.log(saudarPessoa("João"));
console.log(saudarPessoa("João", "Silva"));

// Exemplo 02
function mensagemLog(mensagem: string, usuarioId?: number) {
    const dataLog = new Date().toLocaleTimeString();
    console.log(dataLog, mensagem, usuarioId || "Usuário não identificado");
}

mensagemLog("Usuário logado com sucesso", 123);

// Exemplo 3
// Propriedades opcionais em um type alias
 type Pessoa = {
    idFuncionario: number;
    nome: string;
    idade?: number; // propriedade opcional
    email?: string; // propriedade opcional
};

let pessoa: Pessoa;

pessoa = {
    idFuncionario: 10,
    nome: "Maria"
};

// Default Parameters
// Parâmetros padrão definem valores iniciais para parâmetros opcionais:
// - se nenhum valor for passado, o padrão é usado;
// - se um valor for passado, o valor passado é usado.

// Sintaxe
// function nome(param_1[:tipo], param_2[:tipo] = valorPadrao) {
//     // código a ser executado
// }

// Exemplo
function descontoCompra(preco: number, desconto = 0.08) {
    return preco * (1 - desconto); // retorna o valor com 8% de desconto por padrão
}

console.log(descontoCompra(100)); // 8% de desconto = 92
console.log(descontoCompra(100, 0.10)); // 10% de desconto, pois foi passado explicitamente

// Exemplo 2
function exibirMensagem(mensagem: string, saudar = "Fala, pessoal") {
    return `${saudar}, ${mensagem}!`;
}

// Rest Parameters
// Não restringe o número de argumentos passados para a função,
// porém todos os argumentos devem ser do mesmo tipo.

// Sintaxe
// function nome(...parametros: tipo[]) {
//     // código a ser executado
// }

// Exemplo
function somarVariosNumeros(...numeros: number[]) { // recebe quantos números forem necessários
    let total = 0;
    numeros.forEach((numero) => { // percorre o array de números
        total += numero;
    });
    return total;
}

console.log(somarVariosNumeros(30, 20)); // 50
console.log(somarVariosNumeros(10, 20, 30, 40, 50)); // 150

// Exemplo 2
function listarFrutas(frase: string, ...frutas: string[]) {
    return frase + " " + frutas.join(", ");
}

console.log(listarFrutas("Você precisa comprar", "Maçã", "Banana", "Laranja"));
console.log(listarFrutas("Você precisa comprar", "Uva", "Pera", "Manga", "Melancia"));

// Exemplo 3
class Produtos {
    public exibirProdutos(...produtos: string[]): void {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}

const departamentoInformatica: Produtos = new Produtos();
departamentoInformatica.exibirProdutos("Notebook", "Mouse", "Teclado", "Monitor");
