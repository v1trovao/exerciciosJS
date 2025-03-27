/* 
    Criar uma função que recebe uma string de palavras misturadas e retorna uma string contendo 
    uma frase, seguindo um modelo fixo de frase (sujeito + verbo + complemento)
*/

// Definição da estrutura: Sujeito + Verbo + Complemento
const estrutura = ["eu", "gosto", "de", "programar", 
    "ela", "adora", "estudar"
];

function organizarFrase(palavras) {

    // Ordenar as palavras de acordo com a estrutura
    return palavras.sort((a, b) => estrutura.indexOf(a) - estrutura.indexOf(b)).join(" ");
}

const palavras = ["gosto", "programar", "eu", "de"];
console.log(organizarFrase(palavras));