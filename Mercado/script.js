function adicionarItem() {

    let input = document.getElementById("item");
    let categoria = document.getElementById("categoria");

    let valor = input.value;

    if (valor === "") {
        alert("Digite um item!");
        return;
    }


    let li = document.createElement("li");


    let span = document.createElement("span");
    span.textContent = valor; // Coloca o texto dentro do span
    

    let btnExcluir = document.createElement("button");
    btnExcluir.textContent = "❌";

    btnExcluir.onclick = function() {
        li.remove();
    };

    span.onclick = function() {
        span.style.textDecoration = "line-through";
    };


    li.appendChild(span);
    li.appendChild(btnExcluir);

    let lista = document.getElementById(categoria.value);
    lista.appendChild(li);

    input.value = "";
}