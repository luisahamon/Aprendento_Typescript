// Usamos quando a função ou método não retorna nada
// Retorna undefined implicitamente - representa ausencia de dados
// Função que não retorna nada - void
function exibirMensagem(): void {
    console.log("Olá, mundo!");
}

exibirMensagem();

// Exemplo 2 - funções
function logError(message: string){ // void implicito - mas é boa prática explicitar
    console.error(message);
}

logError("Erro encontrado!");

// Exemplo 3 - funções
const logError2 = (errorMessage: string): void => {
    console.error(errorMessage);
}

logError2("Erro encontrado!");

// Exemplo 4 - variáveis
let variavelVoid: void;
// variavelVoid = 1; // Erro
variavelVoid = undefined;
// variavelVoid = null; // Erro por padrão mas pode ser modificado no tsconfig.json
// parametro: strictNullChecks - quando true, null e undefined são tipos primitivos separados, dá erro