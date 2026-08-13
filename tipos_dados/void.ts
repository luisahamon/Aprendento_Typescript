// Tipo void em TypeScript: funções e variáveis sem retorno de valor.

// Usamos void quando a função ou método não retorna nada.
// Retorna undefined implicitamente — representa ausência de dados.

// Função que não retorna nada — void
function exibirMensagem(): void {
    console.log("Olá, mundo!");
}

exibirMensagem();

// Exemplo 2 — função sem retorno explícito (void implícito)
function logError(message: string) { // void implícito, mas é boa prática explicitar
    console.error(message);
}

logError("Erro encontrado!");

// Exemplo 3 — arrow function com void
const logError2 = (errorMessage: string): void => {
    console.error(errorMessage);
};

logError2("Erro encontrado!");

// Exemplo 4 — variáveis do tipo void
let variavelVoid: void;
// variavelVoid = 1; // Erro
variavelVoid = undefined;
// variavelVoid = null; // Erro por padrão, mas pode ser modificado no tsconfig.json
// Parâmetro: strictNullChecks — quando true, null e undefined são tipos primitivos separados.
