/* 
    Criar uma função que recebe uma string de palavras misturadas e retorna uma string contendo 
    uma frase, seguindo um modelo fixo de frase (sujeito + verbo + complemento)
*/

// Definição da estrutura: Sujeito + Verbo + Complemento
const estrutura = ["eu", "gosto", "de", "programar", 
    "ela", "adora", "estudar"
];

// Definição da estrutura como um objeto classificador de palavras
const estrutura2 = {
    sujeito: ["eu", "tu", "ela", "ele", "nós", "vós", "eles"],
    verbo: ["gosto", "adora", "odeia", "prefere", "deitar"],
    complemento: ["de", "programar", "estudar", "viajar", "nele"]

}

// Recebe uma palavra e retorna o tipo de acordo com a estrutura
function identificarTipo(palavra) {
    // Percorrendo cada tipo como array
    for (let tipo in estrutura2) {
        // Verifica se o tipo contêm a palavra
        if (estrutura2[tipo].includes(palavra)) {
            return tipo; // Retorna o tipo correspondente
        }
    }

    return "desconhecido"; // Caso a palavra não esteja na estrutura
    
}

function organizarFrase(palavras) {

    // Objeto frase com a palavra ordenada
    let frase = {
        sujeito: "",
        verbo: "",
        complemento: []
    };

    // Percorrendo cada elemento da palavra
    palavras.forEach(palavra => {

        // Identificar o tipo da palavra
        let tipo = identificarTipo(palavra);

        // Se for sujeito, e a frase ainda não tiver sujeito, define para a frase
        if (tipo === "sujeito" && !frase.sujeito) {
            frase.sujeito = palavra;
        }
        
        // Se for verbo, e a frase ainda não tiver verbo, define para o verbo
        else if (tipo === "verbo" && !frase.verbo) {
            frase.verbo = palavra;
        }

        // Se for um complemento, adiciona na lista de complementos da frase
        else if (tipo === "complemento") {
            frase.complemento.push(palavra);
        }
    });
    
    return `${frase.sujeito} ${frase.verbo} ${frase.complemento.join(" ")}`.trim();
    // Ordenar as palavras de acordo com a estrutura
    // return `palavras.sort((a, b) => estrutura.indexOf(a) - estrutura.indexOf(b)).join(" ");`
}

const palavras = ["de", "gosto", "estudar", "programar", "adora", "eu", "ela", "jadice"];
console.log(organizarFrase(palavras));