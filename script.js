function adicionarItem() {

    let input = document.getElementById("item");
    let categoria = document.getElementById("categoria");

    let valor = input.value;

    if (valor === "") {
        alert("Digite um item!");
        return;
    }

    // cria <li>
    let li = document.createElement("li");

    // span pro texto (melhor organização)
    let span = document.createElement("span");
    span.textContent = valor; // Coloca o texto dentro do span
    

    // botão excluir
    let btnExcluir = document.createElement("button");
    btnExcluir.textContent = "❌";

    btnExcluir.onclick = function() {
        li.remove();
    };

    // marcar como comprado (só no texto)
    span.onclick = function() {
        span.style.textDecoration = "line-through";
    };

    // monta o item
    li.appendChild(span);
    li.appendChild(btnExcluir);

    // adiciona na lista correta
    let lista = document.getElementById(categoria.value);
    lista.appendChild(li);

    // limpa o input
    input.value = "";
}