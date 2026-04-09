function adicionar() {
    // pegar o texto do input
    let texto = document.getElementById("titulo").value;

    // pegar a prioridade
    let prioridade = document.getElementById("prioridade").value;

    // verificar se está vazio
    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    // criar um elemento (div)
    let tarefa = document.createElement("div");

    // adicionar classes
    tarefa.classList.add("tarefa");
    tarefa.classList.add(prioridade);

    // conteúdo da tarefa
    tarefa.innerHTML = `
        <strong>${texto}</strong><br><br>

        <button onclick="editar(this)">Editar</button>
        <button onclick="excluir(this)">Excluir</button>
        <button onclick="avancar(this)">Avançar</button>
    `;

    // adicionar na coluna "A fazer"
    document.getElementById("afazer").appendChild(tarefa);

    // limpar o campo
    limpar();
}

function limpar() {
    document.getElementById("titulo").value = "";
}

function editar(botao) {
    let tarefa = botao.parentElement;

    let novoTexto = prompt("Editar tarefa:");

    if (novoTexto !== null && novoTexto !== "") {
        tarefa.querySelector("strong").innerText = novoTexto;
    }
}

function excluir(botao) {
    let tarefa = botao.parentElement;
    tarefa.remove();
}

function avancar(botao) {
    let tarefa = botao.parentElement;

    let colunaAtual = tarefa.parentElement.id;

    if (colunaAtual === "afazer") {
        document.getElementById("fazendo").appendChild(tarefa);

    } else if (colunaAtual === "fazendo") {
        document.getElementById("feito").appendChild(tarefa);

    } else {
        // se estiver em "feito", exclui
        tarefa.remove();
    }
}