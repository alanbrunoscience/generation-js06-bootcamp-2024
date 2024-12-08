/* Operadores Relacionais

- Os Operadores Relacionais são utilizados para comparar valores entre variáveis e expressões do mesmo tipo e criar declarações condicionais. Esses operadores são usados com o intuito de criar expressões do tipo verdadeiro (true) ou falso (false), fundamentais para as declarações condicionais. O retorno da comparação é sempre um valor do tipo Lógico.


|  Operador  |         Descrição         |
|     >      |        Maior do que       |
|     >=     |   Maior do que ou igual   |
|     <      |        Menor do que       |
|     <=     |   Menor do que ou igual   |
|     ==     |           Igual           |
|     ===    |     Estritamente igual    |
|     !==    |   Estritamente Diferente  |

* ===	Estritamente Igual (compara tipo e valor)
* !==	Estritamente Diferente (compara tipo e valor)

1 == "1" // true

1 === "1" // false

*/

let numString = "1";
let num = 1;

console.log("Comparação: ", numString == num);
console.log("Comparação Estritamente Igual: ", numString === num);