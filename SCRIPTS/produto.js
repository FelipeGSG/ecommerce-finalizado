var listaDeDesejos = []
listaDeDesejos.length = 14
listaDeDesejos.fill(0)

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
                // console.log(jogo.avaliacao)
                document.getElementById("avaliacaoJogo").innerHTML = jogo.avaliacao 
                document.getElementById("precoJogo").innerHTML = jogo.preco
                // document.getElementById("aguardando").innerHTML = ""
                // document.getElementById('erro').innerHTML = " "
                salvarDesejos(id)
            }
            
        })
    })
}

function salvarDesejos(id){
    if(document.getElementById("adicionarDesejo").checked == true){
        console.log("adicionado")
        listaDeDesejos[id-1] = id
        
    } else{
        if(listaDeDesejos[id-1] == id){
            listaDeDesejos[id-1] = 0
        }
    }

    document.getElementById("adicionarDesejo").checked = false
}