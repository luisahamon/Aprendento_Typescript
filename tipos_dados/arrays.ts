// Arrays em TypeScript

let animais : string[] = ['Cachorro', 'Gato', 'Coelho'];
//console.log(animais[1]);

let frutas : Array<string> = ['abacaxi', 'banana', 'laranja']; // outra sintaxe para array
//console.log(frutas[1]);

let numeros : number[] = [1, 2, 3, 4, 5];
//console.log(numeros[2]);

let idiomas : Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
//console.log(idiomas);
idiomas.push('Alemão'); // adiciona um novo idioma ao array
//console.log(idiomas);
let tamanho_idiomas = idiomas.length; // obtém o tamanho do array
//console.log(`Número de idiomas: ${tamanho_idiomas}`);

// spread operator para copiar arrays
let copia_idiomas = [...idiomas, 'Italiano', 'Chinês'];
//console.log(copia_idiomas);

let linguagens : Array<string> = ['JavaScript', 'TypeScript', 'Ruby', 'Python'];
function funcaolinguagens(linguagens: string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
// funcaolinguagens(linguagens);
