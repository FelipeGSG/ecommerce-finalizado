function buscar(id){
    // Função que carrega o JSON para consumir a API e processa os dados JSON
fetch('jogos.json').then(resposta => resposta.json()).then(corpo =>{
        // var identificar = document.getElementById('input').value
        // var encontrado = false;

        corpo.forEach(jogo => {
            if(id == jogo.id){
                encontrado = true
                document.getElementById("backgroundPopUpProduto").style.display ="flex"
                document.getElementById("imagemJogo").src = jogo.imagem
                document.getElementById("nomeJogo").innerHTML = jogo.nome
                document.getElementById("dataLancamentoJogo").innerHTML = jogo.data_lancamento
                console.log(jogo.avaliacao)
                document.getElementById("avaliacaoJogo").textContent = jogo.avaliacao
                document.getElementById("precoJogo").innerHTML = "jogo"
                // document.getElementById("aguardando").innerHTML = ""
                // document.getElementById('erro').innerHTML = " "
            }
            
        })
    })
}