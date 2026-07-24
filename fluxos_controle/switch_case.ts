// É uma estrutura de controle não muito performática então não é muito utilizada
// Sintaxe do switch case
/*
switch (expressao) {
    case valor1:
        // codigo
        break;
    case valor2:
        // codigo
        break;
    default:
        // codigo
        break;
}
*/

// Exemplo prático
const dia: number = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
        break;
}
