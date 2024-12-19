/* Estrutura try-catch-finally

A estrutura try-catch-finally é utilizada pelo TypeScript para capturar e tratar um erro ou exceção. Ela é composta por 3 estruturas básicas:

- try: é usada para indicar um bloco de código que possa lançar (throw) uma exceção. Caso ocorra uma exceção em algum ponto, o restante do código contido no bloco try não será executado. O bloco try não pode ser declarado sozinho, portanto, precisa estar seguido de um ou vários blocos catch e/ou de um bloco finally;

- catch: serve para capturar as exceções e tratar o erro. Esse bloco será executado somente se o bloco try apresentar alguma exceção. Numa estrutura try-catch-finally você pode criar apenas um bloco catch e para identificar o tipo da exceção utilizaremos um laço condicional;

- finally: é um bloco opcional, mas caso seja construído, ele sempre será executado, a menos que seja forçada sua parada, por exemplo, com o comando process.exit(0), que força a finalização da aplicação TypeScript, na instrução catch. Geralmente utilizamos o bloco finally quando precisamos executar algum código, independente se ocorrer a Exception ou não.

*/

try {

} catch(error) {

} finally {

}

/*

O Bloco try contém o código que pode lançar (throw) uma exceção. Ele consiste na palavra – chave try seguida por um bloco de código entre chaves.

O Bloco Catch captura e trata as exceções. Ele começa com a palavra-chave catch. Dentro dos parênteses deve ser inserido um parâmetro do tipo any, geralmente nomeado como e ou error, que será utilizado para identificar o tipo da exceção, ou seja, o tipo do erro. O bloco de código entre as chaves será executado quando uma exceção acontecer, ou seja, o que fazer em caso de erro. Para definir ações específicas para cada tipo de erro, utilizaremos um Laço Condicional em conjunto com a instrução instanceof, que verifica qual é o tipo do erro que foi capturado pelo parâmetro error.

O Bloco Finally é um Bloco opcional, Caso seja construído, quase sempre ele será executado. Geralmente ele contém código de liberação de recursos do sistema. Exemplo: finalizar a conexão com uma Banco de dados.

*/