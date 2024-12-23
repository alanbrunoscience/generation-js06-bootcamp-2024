/* Callback

- Uma função Callback é uma função passada como argumento de outra função, que é então invocada dentro da função externa para completar algum tipo de rotina ou ação.

*/

export function function01() {
    // Function body
}

export function function02(calls_Function01: any) {
    // Function body
    calls_Function01();
}

function02(function01);

// Observe que a função chamada function02(), recebe como parâmetro a função chamada function01(). A relação entre as duas funções foi criada através da função de Callback chamada calls_Function01().