/* Objeto com método personalizado */

/* Crie um objeto livro com:
    - titulo: string
    - autor: string
    - lido: boolean
   Adicione um método resumo() que retorne:
    "O livro [titulo] de [autor] já foi lido." (se lido for true)
    "O livro [titulo] de [autor] ainda não foi lido." (se lido for false)
*/

function Livro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.lido = false;

    // arrow function e o this
    this.resumo = () => {
        return this.lido ? `O livro ${titulo} de ${autor} já foi lido`: `O livro ${titulo} de ${autor} ainda não foi lido`;
    };
    
    this.marcarLido = () => {
        this.lido = true;
    }
}

// Externalizar os métodos com prototype
Livro.prototype.resumo2 = function(){
    return this.lido
        ? `O livro ${this.titulo} de ${this.autor} já foi lido`
        : `O livro ${this.titulo} de ${this.autor} ainda não foi lido`
};

Livro.prototype.marcarLido2 = function() {
    this.lido = true;
}

let livro = new Livro("Anne de Green Gables", "L.M. Montgomery");

console.log(livro.resumo2()) 
livro.marcarLido2()
console.log(livro.resumo())

