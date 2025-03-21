// 1. Criar variáveis 'firstName' e 'last_name'
// 2. Atribuir valor a elas
// 3. Criar a variável 'adress' e atribuir o valor 'Rua dos dogs'
// 4. Reatribuir um novo valor para address 'Rua dos Gatinhos'
// 5. Imprimir no console todos os valores

const firstName = "Jadice";
const lastName = "Karai";
let address = "Rua dos Cachorros";

console.log("Nome da rua: " + address);

address = "Rua dos Gatos";

console.log("Novo nome da rua: " + address);
console.log("Me chame de: " + firstName + " " + lastName);

const mostrarMensagem = () => alert("Me chame de:" + firstName + " " + lastName)

mostrarMensagem();