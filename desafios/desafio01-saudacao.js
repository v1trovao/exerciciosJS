/* Função dinâmica + invocação */

/* 
    Escreva uma função chamada gerarSaudacao que aceite um 
    nome como argumento e retorne:
        "Olá, [nome]! Seja bem-vind*! "
    Depois, armazene esse retorno numa variável e imprima 
    com console.log
*/

const gerarSaudacao = (nome) => {
    return `Olá, ${nome}! Seja bem-vind*`
}

// Final da saudação conforme genero, com lógica condicional encadeada
const gerarSaudacao2 = (nome, genero = "*") => {
    let final = genero === "f" ? "a" : genero === "m" ? "o": "*";
    return `Olá, ${nome}! Seja bem-vind${final}`;
}

let nome = window.prompt("Olá, digite seu nome: ");
let sexo = window.prompt("Sexo: (m, f)");

// Validação de entrada
if (!nome) {
    console.log("Nome inválido. Por favor, tente novamente!");
} else {
    let msg = gerarSaudacao2(nome, sexo);
    console.log(msg);
}
