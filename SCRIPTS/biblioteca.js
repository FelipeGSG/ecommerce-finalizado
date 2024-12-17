function carregarLoja(){

    fetch("jogos.json")
    .then(response => response.json())
    .then(jogos =>{
        jogos.forEach(jogo => {
            var divMae = document.createElement("div")
            divMae.classList.add("divMaeProduto")
            
            var div = document.createElement("div")
            div.style.background = `url(${jogo.imagem})`
            div.classList.add("divImgProduto")

            var p = document.createElement("p")
            p.innerHTML = jogo.nome

            divMae.appendChild(div)
            divMae.appendChild(p)
            document.querySelector("main").appendChild(divMae)
        })
    })
}

carregarLoja()