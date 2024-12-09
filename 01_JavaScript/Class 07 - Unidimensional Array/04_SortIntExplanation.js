/* 

Na prática, o método sort() converte todos os elementos do array em strings e faz a comparação entre os elementos de acordo com o código Unicode de cada elemento. Isso significa que, a classificação funciona relativamente bem com strings, mas não funciona corretamente com números.

Para classificar números corretamente, precisamos utilizar uma função de comparação, que define a ordem de classificação desejada, como vemos no exemplo abaixo:

*/

let vetorNumeros = [10, 15, 5, 70, 140];

// Função de Comparação - Ordem Crescente
function compareAsc(a, b) {
  return a - b;
}

// O método sort() recebe a Função de Compração como parâmetro
vetorNumeros.sort(compareAsc)

console.log("Array em Ordem Crescente:\n");

for (let indice = 0; indice < vetorNumeros.length; indice++) {
  console.log(vetorNumeros[indice]);
}

// Função de Comparação - Ordem Decrescente
function compareDesc(a, b) {
    return b - a;
}

// O método sort() recebe a Função de Comparação como parâmetro
vetorNumeros.sort(compareDesc)

console.log("\nArray em Ordem Decrescente:\n");

for (let indice = 0; indice < vetorNumeros.length; indice++) {
  console.log(vetorNumeros[indice]);
}

/*

Quando passamos como parâmetro do Método sort() uma função de comparação, o Método sort() fará a ordenação do vetor utilizando a função de comparação como critério de ordenação.

A função de comparação acima, recebe dois elementos do array como argumentos e retorna:

- Um número negativo se o primeiro elemento deve ser classificado antes do segundo;
- Um número positivo se o segundo elemento deve ser classificado antes do primeiro;
- O número 0 se os dois elementos são iguais.

*/