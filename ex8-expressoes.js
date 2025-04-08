/* 
Ex1: Crie um objeto usuario com as seguintes propriedades:
    -> nome: uma string
    -> idade: um número
    -> ativo: um valor booleano
    -> hobbies: um array de strings

    Depois, crie uma função chamada exibirUsuario que 
    retorne uma string com o nome e idade do usuário 
    no formato: "Usuário Ana, 25 anos."
*/

let nome = window.prompt("Qual o seu nome?");
let idade = window.prompt("Qual sua idade? ");
let hobbie = window.prompt("Qual seu hobbie principal?");

// Função que cria um novo objeto Usuário
function Usuario(nome, idade, hobbie) {
    this.nome = nome;
    this.idade = idade;
    this.ativo = true;
    this.hobbies = [hobbie];
}

const exibirUsuario = (usuario) => {
    return `Usuário ${usuario.nome}, ${usuario.idade} anos, hobbies: ${usuario.hobbies[0]}`
}

let usuario = new Usuario(nome, idade, hobbie);
console.log(exibirUsuario(usuario));



