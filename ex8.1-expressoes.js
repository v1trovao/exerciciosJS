/* 
Ex2: Crie uma função construtora 
     chamada Tarefa que receba:

     -> descrição (string)
     -> prioridade (número)

     Ao criar uma nova Tarefa, ela deve ter:
     -> a descrição e prioridade recebidas
     -> uma propriedade concluida iniciando como false

    Instancie duas tarefas com new e exiba suas propriedades.
*/

window.alert("Registro de tarefas");

let desc = window.prompt("Descrição da tarefa: ");
let prio = window.prompt("Qual a prioridade (de 1 a 5)?");

function Tarefa(descricao, prioridade) {
    this.descricao = descricao;
    this.prioridade = prioridade
    this.concluida = false;
}

const exibirTarefa = (tarefa) => {
    if (tarefa.concluida) 
        return `-> ${tarefa.descricao}, Prioridade: ${tarefa.prioridade}, Concluída`
    else
        return `-> ${tarefa.descricao}, Prioridade: ${tarefa.prioridade}, Pendente`
}

const marcarConcluida = (tarefa) => {
    if (!tarefa.concluida)
        tarefa.concluida = true;
    else 
        tarefa.concluida = false;
}

let tarefa1 = new Tarefa(desc, prio);
let tarefa2 = new Tarefa("Pedir ajuda", 3);

console.log(exibirTarefa(tarefa1));

marcarConcluida(tarefa2);

console.log(exibirTarefa(tarefa2));





