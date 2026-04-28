let palavras = [
    {
        palavra: "pokemon",
        dica: "Desenho e jogo famoso com criaturas"
    },
    {
        palavra: "javascript",
        dica: "Linguagem usada para deixar o site interativo"
    },
    {
        palavra: "html",
        dica: "Estrutura de uma página web"
    },
    {
        palavra: "css",
        dica: "Usado para deixar a página bonita"
    },
    {
        palavra: "natal",
        dica: "Capital do Rio Grande do Norte"
    }
];

let palavraEscolhida = "";
let dicaEscolhida = "";
let letrasCertas = [];
let letrasUsadas = [];
let tentativas = 6;

function iniciarJogo() {
    let sorteio = Math.floor(Math.random() * palavras.length);

    palavraEscolhida = palavras[sorteio].palavra;
    dicaEscolhida = palavras[sorteio].dica;

    letrasCertas = [];
    letrasUsadas = [];
    tentativas = 6;

    document.getElementById("dica").innerHTML = "Dica: " + dicaEscolhida;
    document.getElementById("mensagem").innerHTML = "";

    mostrarPalavra();
    atualizarInformacoes();
}

function mostrarPalavra() {
    let palavraNaTela = "";

    for (let i = 0; i < palavraEscolhida.length; i++) {
        let letraAtual = palavraEscolhida[i];

        if (letrasCertas.includes(letraAtual)) {
            palavraNaTela += letraAtual;
        } else {
            palavraNaTela += "_";
        }
    }

    document.getElementById("palavra").innerHTML = palavraNaTela;

    if (!palavraNaTela.includes("_")) {
        document.getElementById("mensagem").innerHTML = "Parabéns! Você acertou a palavra!";
    }
}

function chutarLetra() {
    let letra = document.getElementById("letra").value.toLowerCase();

    if (letra === "") {
        document.getElementById("mensagem").innerHTML = "Digite uma letra!";
        return;
    }

    if (letrasUsadas.includes(letra)) {
        document.getElementById("mensagem").innerHTML = "Você já tentou essa letra!";
        document.getElementById("letra").value = "";
        return;
    }

    letrasUsadas.push(letra);

    if (palavraEscolhida.includes(letra)) {
        letrasCertas.push(letra);
        document.getElementById("mensagem").innerHTML = "Boa! Essa letra existe.";
    } else {
        tentativas--;
        document.getElementById("mensagem").innerHTML = "Ops! Essa letra não existe.";
    }

    if (tentativas === 0) {
        document.getElementById("mensagem").innerHTML = "Fim de jogo! A palavra era: " + palavraEscolhida;
    }

    document.getElementById("letra").value = "";

    mostrarPalavra();
    atualizarInformacoes();
}

function atualizarInformacoes() {
    document.getElementById("tentativas").innerHTML = "Tentativas restantes: " + tentativas;
    document.getElementById("letrasUsadas").innerHTML = "Letras usadas: " + letrasUsadas.join(", ");
}

function reiniciarJogo() {
    iniciarJogo();
}

iniciarJogo();