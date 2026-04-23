function buscarMunicipios() {
    const nome = document.getElementById("uf").value.toUpperCase();
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "Carregando...";

    fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`)
        .then(response => response.json())
        .then(dados => {
            resultado.innerHTML = "";

            if (dados.length === 0) {
                resultado.innerHTML = "Nenhum nome encontrado.";
                return;
            }

            dados[0].res.forEach(item => {
                const div = document.createElement("div");
                div.textContent = `Período: ${item.periodo} - Frequência: ${item.frequencia}`;
                resultado.appendChild(div);
            });
        })
        .catch(error => {
            resultado.innerHTML = "Erro ao buscar dados.";
            console.error(error);
        });
}