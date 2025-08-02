function condicionalAnimacao(){
    if(config.hasAnimation === true){
        document.getElementsByClassName("slider")[0].style.animation = " 30s infinite linear normal running sliderInicio"
    } else if(config.hasAnimation === false){
        document.getElementsByClassName("slider")[0].style.animation = "30s infinite linear normal running none"
    }
}

function addCategoria(texto, e, category){
    if(!texto || !e || !category) return

    e.disabled = true
    
    const div = document.createElement("div")
    div.classList.add("escolhido")

    const span = document.createElement("h2")
    span.innerHTML = texto

    const img = document.createElement("img")
    img.src = 'IMG/delete.svg'
    img.setAttribute("onclick", `removeCategoria('${texto}', this)`)
    img.width = '30'

    div.appendChild(span)
    div.appendChild(img)

    if(category == "plataforma"){
        document.getElementById("plataformasEscolhidas").appendChild(div)
    } else if(category == "genero"){
        document.getElementById("generosEscolhidos").appendChild(div)
    }

    searchCategories()
}

function limparCategorias(id){

    var botoesDesativados = document.querySelectorAll('button[class="botaoCategoria"][disabled]') 
    for(let i = 0; i<botoesDesativados.length;i++){
        botoesDesativados[i].disabled = false
    }

    document.getElementById(id).innerHTML = ""
}

function removeCategoria(texto, e){
    e.parentNode.remove()
    var element = document.querySelector(`button[onclick^="addCategoria('${texto}'"]`)
    element.disabled = false
}

async function searchCategories(){
    let chosenCategories = document.querySelectorAll(".escolhido h2")
    chosenCategories = [...chosenCategories].map(c => {
        return c.innerText
    })

    let idMatches = []

    await fetch("jogos.json").then(response => response.json())
    .then(jogos =>{
        jogos.forEach(jogo =>{
            jogo.generos.forEach(genero =>{
                if(chosenCategories.includes(genero) && idMatches.includes(jogo.id) == false){
                    idMatches.push(jogo.id)
                }
            })

            jogo.plataformas.forEach(plataforma =>{
                if(chosenCategories.includes(plataforma) && idMatches.includes(jogo.id) == false){
                    idMatches.push(jogo.id)
                }
            })
        })
    })

    loadGamesWithCategory(idMatches)
}

function loadGamesWithCategory(array){
    document.getElementById("categoriaResultados").innerText = array.length + " resultados encontrados"

    //pendente para carregar cards
}

document.addEventListener("DOMContentLoaded", async() =>{
    let plataformas = {}
    let generos = {}
    
    await fetch("jogos.json").then(response => response.json())
    .then(jogos =>{
        jogos.forEach(jogo => {
            jogo.plataformas.forEach(item =>{
                plataformas[item] ? plataformas[item] += 1 : plataformas[item] = 1
            })
            jogo.generos.forEach(item =>{
                generos[item] ? generos[item] += 1 : generos[item] = 1
            })
        });

        // console.log(plataformas, Object.keys(plataformas).length)
        // console.log(generos, Object.keys(generos).length)
    })


    for(let key in generos){
        const button = document.createElement("button")
        button.classList.add("botaoCategoria")
        button.setAttribute("onclick", `addCategoria('${key}', this, 'genero')`)
        button.innerText = key

        document.getElementById("generos").appendChild(button)
    }

    for(let key in plataformas){
        const button = document.createElement("button")
        button.classList.add("botaoCategoria")
        button.setAttribute("onclick", `addCategoria('${key}', this, 'plataforma')`)
        button.innerText = key

        document.getElementById("plataformas").appendChild(button)
    }
})