var animacaoLigada = true
var categoriaSelecionada = []

function toggleAnimacao(){
    animacaoLigada= !animacaoLigada
    localStorage.setItem("animacaoLigada", animacaoLigada)

    condicionalAnimacao()
}

function localStorageAnimacao(){
    if(localStorage.getItem("animacaoLigada") != null){
        animacaoLigada = localStorage.getItem("animacaoLigada")
        condicionalAnimacao()
        return
    }
    condicionalAnimacao()
}

function condicionalAnimacao(){
    if(animacaoLigada === true || animacaoLigada == "true"){
        document.getElementsByClassName("slider")[0].style.animation = " 30s infinite linear normal running sliderInicio"
    } else if(animacaoLigada === false || animacaoLigada == "false"){
        document.getElementsByClassName("slider")[0].style.animation = "30s infinite linear normal running none"
    }
}

function addCategoria(texto, e){
    e.disabled = true
    
    divMae = document.getElementById("categoriaEscolhida")

    var div = document.createElement("div")
    div.classList.add("escolhido")
    var span = document.createElement("h2")
    span.innerHTML = texto
    var img = document.createElement("img")
    img.src = 'IMG/delete.svg'
    img.setAttribute("onclick", `removeCategoria('${texto}', this)`)
    img.width = '30'
    div.appendChild(span)
    div.appendChild(img)

    divMae.appendChild(div)
}

function limparCategorias(){
    var botoesDesativados = document.querySelectorAll('button[class="botaoCategoria"][disabled]') 
    for(let i = 0; i<botoesDesativados.length;i++){
        botoesDesativados[i].disabled = false
    }

    document.getElementById("categoriaEscolhida").innerHTML = ""
}

function removeCategoria(texto,e){
    e.parentNode.remove()
    var element = document.querySelector(`button[onclick="addCategoria('${texto}', this)"]`)
    element.disabled = false
}

localStorageAnimacao()
condicionalAnimacao()