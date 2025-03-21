/* 
Cria uma função que recebe um valor e imprime se 
ele é null, undefined ou NaN.

📌 Dica:
 - null === null sempre é verdadeiro.
 - typeof undefined retorna "undefined".
 - NaN não é igual a ele mesmo (NaN !== NaN).
*/

function verificaTipo(valor) {
    console.log(valor);
    if (valor === null) {
        console.log("Tipo null");
    } else if (typeof valor === undefined) {
        console.log("Tipo undefined");
    } else if (Number.isNaN(valor)) {
        console.log("Tipo NaN");
    } else {
        console.log("Dado: ", typeof valor)
    }
}


verificaTipo("jadice");


