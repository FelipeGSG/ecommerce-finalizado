var animacaoLigada = true

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

localStorageAnimacao()
condicionalAnimacao()