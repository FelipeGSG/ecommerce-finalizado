const table = document.getElementById("tabelaListaDesejos")

function salvarDesejos(id){
    if(document.getElementById("adicionarDesejo").checked == true){
        if(listaDeDesejos.includes(id) == false){
            listaDeDesejos[id-1] = id
            criarElementoLista(id)
        }
    } else{
        if(listaDeDesejos.includes(id) == true){
            listaDeDesejos[id-1] = 0
            console.log("ZA HANDO GA KESU")
            document.getElementById(`id${id}`).remove()
        }
    }
    document.getElementById("adicionarDesejo").checked = false
    salvarDesejoLocalStorage()

}


function criarElementoLista(id){
    const tr = document.createElement("tr")
    tr.setAttribute("id", `id${id}`)
    const td = document.createElement("td")
    td.style.display = "flex"

    const img = document.createElement("img")
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const h4 = document.createElement("h4")
    const button = document.createElement("button")
    button.innerHTML = "Excluir"
    button.classList.add("buttonExcluirDesejo")
    button.onclick = function deletarParentNode(){
        tr.remove()
        listaDeDesejos[id-1] = 0
        salvarDesejos(id)
    }
        fetch('jogos.json').then(resposta => resposta.json()).then(corpo =>{

            corpo.forEach(jogo => {
                    if(jogo.id == listaDeDesejos[id-1]){
                        img.src = jogo.imagem
                        h2.innerHTML = jogo.nome
                        h4.innerHTML = "R$"+jogo.preco

                        td.appendChild(img)
                        td.appendChild(div)
                        
                        div.appendChild(h2)
                        div.appendChild(h4)
                        div.appendChild(button)

                        tr.appendChild(td)
                        table.appendChild(tr)
                    }
            })

        })
}

function salvarDesejoLocalStorage(){
    var arraySomenteDesejos = listaDeDesejos.filter((e) => e > 0)
    localStorage.setItem("desejos", arraySomenteDesejos)
}

function carregarLocalStorage(){
    var desejos = localStorage.getItem("desejos").split(",")

    for(let i = 0; i<desejos.length; i++){
        listaDeDesejos[desejos[i]-1] = parseInt(desejos[i])
    }
    console.log(listaDeDesejos)
    salvarDesejos()

    for(let i= 0; i< listaDeDesejos.length; i++){
        if(listaDeDesejos[i] !== 0){
            criarElementoLista(listaDeDesejos[i])
        }
    }
}

carregarLocalStorage()