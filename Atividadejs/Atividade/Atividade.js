let clientes = [];
let continuar;

do {
    let nome = prompt("Insira o nome do cliente:");
    
    if (nome) {
        clientes.push(nome);
    }
    
    continuar = prompt("Deseja inserir mais nomes? (sim/não)").toLowerCase();
    
} while (continuar === "sim");

console.log("Lista de clientes cadastrados:", clientes);
alert("Clientes cadastrados:\n" + clientes.join("\n"));