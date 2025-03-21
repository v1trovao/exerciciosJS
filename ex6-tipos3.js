/* 
Dado um array de valores misturados, cria uma função que retorna um objeto mostrando quantos itens são number, string, boolean, etc.

📌 Dica: Usa typeof e um objeto pra contar os tipos.
*/

function contarTipos(valores) {

    // Objeto contador
    let contador = {};

    // of para percorrer cada valor do array 
    // se fosse in, seria por indices;
    for (let valor in valores) {
        // Variável temporária para armazenar o tipo de dado do valor
        let tipo = typeof valores[valor];
        console.log(valores[valor], tipo);
        // Faz o incremento para cada tipo***
        // inicializa a contagem do tipo
        contador[tipo] = (contador[tipo] || 0) + 1;
    }

    return contador;

}

function contarTipos2(valores) {
    let contador = {};
  
    for (let valor of valores) {
      let tipo = typeof valor;
      contador[tipo] = (contador[tipo] || 0) + 1;
    }
  
    return contador;
  }
  

let dados = [42, "Jadice", true, null, NaN, { nome: "Socorro"}];
console.log(contarTipos(dados));