/* O código abaixo tem um erro de escopo. 
Identifica e corrige.
*/

function testeEscopo() {
    if (true) {
      var a = "Com var";
      let b = "Com let";
    }
    console.log(a); // Funciona? Sim, var é declarada globalmente
    console.log(b); // Funciona? Não, let é declarado apenas no bloco
  }

function testeEscopo2() {
    if (true) {
        var a = "Com var";
    }
    let b = "Com let";
    console.log(a);
    console.log(b);
}
  
  testeEscopo2();