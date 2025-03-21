/* Cria uma função que recebe um número como string, 
   converte pra Number e verifica:
   - Se é um número inteiro
   - Se é NaN
   - Se é um número decimal
📌 Dica: Usa Number.isInteger() e isNaN().
*/
let res;

function verificarNumero(valor){
    let num = Number(valor);
    if (Number.isNaN(num)) {
        console.log("Não é do tipo número");
    }

    if (Number.isInteger(num)) {
        console.log("É inteiro");
    } 
    
    // Vai imprimir msm se não número, tentar encadear as condicionais, com if-else if-else
    if (num%10 != 0) {
        console.log("É decimal");
    }
}

// do chat
function verificarNumero2(valor) {
    let numero = Number(valor);
    
    // Verifica se não é número com isNaN()
    if (isNaN(numero)) {
      console.log("Não é um número válido!");
    
    // Verifica se o número é inteiro com isInteger()
    } else if (Number.isInteger(numero)) {
      console.log("É um número inteiro.");
    
    // Se passar dos dois casos, conclui-se que é decimal
    } else {
      console.log("É um número decimal.");
    }
  }

verificarNumero("abc");