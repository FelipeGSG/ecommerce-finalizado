var listaDeDesejos = []
listaDeDesejos.length = 14
listaDeDesejos.fill(0)

var idJogoJson;

function buscar(id){
// Função que carrega o JSON para consumir a API e processa os dados JSON
fetch('jogos.json').then(resposta => resposta.json()).then(corpo =>{
        corpo.forEach(jogo => {
            if(id == jogo.id){
                encontrado = true
                document.getElementById("backgroundPopUpProduto").style.display ="flex"

                document.getElementById("imagemJogo").src = jogo.imagem
                document.getElementById("nomeJogo").innerHTML = jogo.nome
                document.getElementById("dataLancamentoJogo").innerHTML = jogo.data_lancamento
                document.getElementById("avaliacaoJogo").innerHTML = jogo.avaliacao 
                document.getElementById("precoJogo").innerHTML = jogo.preco

                document.getElementById("adicionarDesejo").checked = false

                if(listaDeDesejos.includes(id) == true){
                    document.getElementById("adicionarDesejo").checked = true

                }
                idJogoJson = id
            }
            
        })
    })
}
function comprou(){
    Swal.fire({
        title: "Compra realizada ",
        text: "a compra do jogo foi realizada com sucesso",
        icon: "success"
      });
}

