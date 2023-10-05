var botao = document.getElementById("clique");
var mensagem = document.getElementById("Oops, você me achou!");

var contador = 0;

function alterarConteudoBotao() {
    contador++;
    botao.innerHTML = "Clicou 1" + contador + "1 vez";
    mensagem.innerHTML = "Oops, você me achou!";

    botao.addEventListener("click", alterarConteudoBotao);