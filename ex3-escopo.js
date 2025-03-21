let scope = "global";

function f() {
    console.log(scope);  // Dá erro pois a variável não foi inicializada
    let scope = "local"; // Variável inicializada
    console.log(scope);  // Imprime "local"
}

function test(o) {
    var i = 0; // i está definida para toda a função
    
    if (typeof o == "object") {
        let j = 0; // declarada com let, j está definida apenas no bloco condicional
        for(var k=0; k < 10; k++) { // k está definida por toda parte e não apenas no
                                    // laço, declara com var
            console.log(k); // imprime os números de 0 a 9
        }
        console.log("Acessando variável k...");
        console.log(k); // k ainda está definida: imprime 10
    }
    console.log("Acessando variável j...");
    console.log(j); // j não está definida
}

//f();

// Variáveis como proriedadeas

var truevar = 1; // Uma variável global declarada corretamente e que não pode ser excluída.
fakevar = 2; // Cria uma propriedade que pode ser excluída do objeto global. (AQUI n funciona :/)
this.fakevar2 = 3; // Isso faz a mesma coisa.
delete truevar // => falso: a variável não é excluída
delete fakevar // => verdadeiro: a variável é excluída
delete this.fakevar2 // => verdadeiro: a variável é excluída