const condicao = true;
// sintaxe while - evitar o uso pois consome muita memória, preferir usar array
while (condicao) {
    // codigo
}

// exemplo
let contador = 0;
while (contador < 5) {
    //console.log(contador);
    contador++;
}

// sintaxe do-while
do {
    // codigo
} while (condicao);

// exemplo
let contador2 = 0;
do {
   // console.log(contador2);
    contador2++;
} while (contador2 < 5);

// exemplo 3
let numero  = 1;
while (numero < 20) {
    if (numero % 5 == 0) {
        console.log("O primeiro múltiplo de 5 é: " + numero);
        break;
    }
    numero++;
}

