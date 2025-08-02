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

async function carregarJogos(criterio){
    await fetch("jogos.json").then(response => response.json())
    .then(jogos =>{
        let jogosSorted = []

        switch (criterio) {
            case "popularidade":
                jogosSorted = jogos
                    .slice(0, 10);

                break;
            case "preco":
                jogosSorted = jogos
                    .filter(jogo => jogo.preco != null)
                    .sort((a,b) => a.preco - b.preco)
                    .slice(0, 10);

                break;
            case "recente":
                const parseData = (dataStr) => {
                    const [dia, mes, ano] = dataStr.split('/');
                    return new Date(`${ano}-${mes}-${dia}`);
                };

                jogosSorted = jogos
                    .filter(jogo => jogo.data_lancamento != null)
                    .sort((a, b) => parseData(b.data_lancamento) - parseData(a.data_lancamento))
                    .slice(0, 10);
                    
                break;
            case "avaliacao":
                jogosSorted = jogos
                    .filter(jogo => jogo.avaliacao != null)
                    .sort((a,b) => parseFloat(b.avaliacao) - parseFloat(a.avaliacao))
                    .slice(0, 10);
                break;
            case "lancamento":
                jogosSorted = jogos
                    .filter(jogo => jogo.data_lancamento == null)
                    
                break;
            default:
                break;
        }

        jogosSorted.forEach(jogo =>{
            const div = document.createElement("div")
            div.classList.add("produto")
            div.style.backgroundImage = `url(${jogo.imagem})`
            div.setAttribute("onclick", `buscar(${jogo.id})`)

            const divInfo = document.createElement("div")
            divInfo.classList.add("informacaoTexto")

            const titulo = document.createElement("h2")
            titulo.textContent = jogo.nome

            divInfo.appendChild(titulo)
            
            if(criterio != "lancamento"){
        
                const info = document.createElement("h4")
                info.textContent = "R$"+jogo.preco + "   "
    
                const span = document.createElement("span")
                span.innerHTML = "&nbsp; &nbsp; &nbsp;" + jogo.avaliacao + " - "
                const numStars = Math.round(parseFloat(jogo.avaliacao))
    
                for(let i = 0; i < numStars; i++) {
                    span.innerHTML+= "<img src='IMG/estrela.png' width='14px' alt='star'>"
                }

                info.appendChild(span)
                divInfo.appendChild(info)
            }

            div.appendChild(divInfo)

            try {
                document.getElementById(criterio).appendChild(div)
            } catch (error) {
                console.log(criterio, error)
            }
        })

    })
}

carregarJogos("preco")
carregarJogos("recente")
carregarJogos("popularidade")
carregarJogos("avaliacao")
carregarJogos("lancamento")

