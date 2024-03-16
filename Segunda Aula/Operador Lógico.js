/* Operadores Lógicos 

- && (AND) RETORNA SE OS VALORES DESSA COMBINAÇÃO SÃO TRUE OU FALSE.

*/

var x = 3;
var y = 7;

console.log(x === 3);
console.log(x === 3 && y === 7); // os dois valores são iguais
console.log(x === 3 && y === 4); // y não é igual a 4

/* || (OR) TESTA SE QUALQUER UM OU PELO MENOS É VERDADEIRO. */

console.log(x === 3 || y === 3); // retorna true porque o x é igual a 3

/* ! (NOT) INVERTE OS VALORES. ((FORMATO NÃO UTILIZADO)) */

console.log(! x === 3); // é true, mas o (!) inverte o valor.
console.log(x != 3);
console.log(x !== 3);
console.log(x === 3);
