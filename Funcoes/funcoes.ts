// Conjunto de código que executa uma tarefa especifica
// Facilita a reutilização de código
// Facilita a manutenção de código
// Facilita a leitura de código
// Facilita a testes de código

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

// ** No livro Clean Code recomenda-se que se funções tenham o minimo de parâmetros possivel**


// Exemplo - Soma de dois números
function somarumeros(a: number, b: number): number {
    return a + b;
}

const resultado = somarumeros(1, 2);
console.log(resultado);

// Exemplo 2 - função anônima - função sem nome
const saudar = function (mensagem: string) {
    return mensagem;
}

console.log(saudar("Olá"));

// Exemplo 3 - Arrow Function - função flecha ( não precisa de palavra reservada function)
const saudarArrow = (mensagem: string) => { // a seta => substitui a palavra function
    return mensagem;
}

console.log(saudarArrow("Olá"));

// Exemplo 4 function constructor
const saudar_04 = new Function('mensagem', 'return " Fala " + mensagem');
console.log(saudar_04("Galera"));


// Optional Parameters
// Para tornar um parâmetro opcional, basta adicionar um ? após o nome do parâmetro
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
type Pessoa = {
    idFuncionario: number;
    nome: string;
    idade?: number; // Parâmetro opcional
    email?: string; // Parâmetro opcional
};

let pessoa: Pessoa;

pessoa = {
    idFuncionario: 10,
    nome: "Maria"
};

// Default Parameters
// Parâmetros padrão - valores padrão para parâmetros opcionais
// Se nenhum valor for passado, o valor padrão será usado
// Se um valor for passado, o valor passado será usado

// Sintaxe
// function nome(param_1[:tipo], param_2[:tipo] = valorPadrao) {
//     // código a ser executado
// }

// Exemplo
function descontoCompra(preco: number, desconto = 0.08) {
    return preco * (1 - desconto); // retorna o valor com 8% de desconto por padrão
}

console.log(descontoCompra(100)); // 8 % de desconto = 8
console.log(descontoCompra(100, 0.10)); // 10% de desconto = foi passado como parâmetro

// Exemplo 2
function exibirMensagem(mensagem: string, saudar = "Fala, pessoal") {
    return `${saudar}, ${mensagem}!`;
}

// Rest Parameters
// Não restringe o numero de argumentos passados para a função
// Porém todos os argumentos devem ser do mesmo tipo

// Sintaxe
// function nome(...parametros: tipo[]) {
//     // código a ser executado
// }

// Exemplo
function somarNumeros(...numeros: number[]) { // recebe quantos números forem necessários
    let total = 0;
    numeros.forEach((numero) => { // varrer o array de números
        total += numero;
    });
    return total;
}

console.log(somarNumeros(30,20)) // 50
console.log(somarNumeros(10,20,30,40,50)) // 150

// Exemplo 2
function listarFrutas(frase: string, ...frutas: string[]) {
    return frase + " " + frutas.join(", ");
}

console.log(listarFrutas("Voce precisa comprar", "Maçã", "Banana", "Laranja"));
console.log(listarFrutas("Voce precisa comprar", "Uva", "Pera", "Manga", "Melancia"));


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
