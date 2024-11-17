if(localStorage.getItem("logado") == null){
    localStorage.setItem("logado", false)
}

function displayUsuario(){
    const displayNome = document.getElementById("displayNomeUsuario")
    const displayEmail = document.getElementById("displayEmail")
    const button = document.getElementById("buttonLogarSair")
    
    if(localStorage.getItem("logado") == "false"){
        displayNome.innerHTML = "Usuário"
        displayEmail.innerHTML = "Sem email definido"
        button.innerHTML = "Logar"
        document.getElementById("nomeUsuario").innerHTML = "Usuário"

        try {
            document.getElementById("bemVindoUsuario").innerHTML = "usuario"
        } catch (error) {
        }
    }
    
    else if(localStorage.getItem("logado") == "true"){
        displayNome.innerHTML = localStorage.getItem("nome")
        document.getElementById("nomeUsuario").innerHTML = localStorage.getItem("nome")

        try {
            document.getElementById("bemVindoUsuario").innerHTML = localStorage.getItem("nome")
        } catch (error) {
        }
        if(localStorage.getItem("email") != null){
            displayEmail.innerHTML = localStorage.getItem("email")
        } else{
            displayEmail.innerHTML = "Oops! você não inseriu um email!"
        }
        button.innerHTML = "Sair"
    }
    esvaziarInput()

}

function botaoSairLogar(){
    if(localStorage.getItem("logado") == "false"){
        window.location.href = "quemSomos.html"
    } else{
        sairConta()
    }
}
 displayUsuario()

// -------------------------------------------------------
function cadastrar(){
    var nome = document.getElementById("login-nome-input").value
    var email = document.getElementById("login-email-input").value
    var senha = document.getElementById("login-senha-input").value

    if(nome == "" || senha == ""){
        return
    }
    localStorage.setItem("nome", nome)
    localStorage.setItem("logado", true)
    if(email != ""){
        localStorage.setItem("email", email)
    }

    displayUsuario()

    var nome = document.getElementById("login-nome-input").value = "" 
    var email = document.getElementById("login-email-input").value = ""
    var senha = document.getElementById("login-senha-input").value = ""

}

function sairConta(){
    localStorage.setItem("logado", false)
    displayUsuario()
}

function esvaziarInput(){
    if(window.location.href == "quemSomos.html"){
        document.getElementById("login-nome-input").value = ""
        document.getElementById("login-email-input").value = ""
        document.getElementById("login-senha-input").value = ""
    }
}

// -------------------------------------------------------
var elementoAberto = "inicio"

document.body.addEventListener("keyup", (event, elemento) =>{
    elemento = elementoAberto
    if(event.key === "Escape" && elementoAberto == "inicio"){
        window.location.href = "index.html"
    } else if(event.key === "Escape" && elementoAberto != "inicio"){
        elementoAberto.style.display = "none"
        elementoAberto = "inicio"
    }
})
// -------------------------------------------------------
// programação referente ao contraste do site:
var isAltoContraste = false

if(localStorage.getItem("altoContraste") == "true"){
    isAltoContraste = true
    mudarElementosContraste()
} else if(localStorage.getItem("altoContraste") == "false"){
    isAltoContraste = false
    mudarElementosContraste()

} 

function mudarContraste(){
    isAltoContraste = !isAltoContraste
    localStorage.setItem("altoContraste", isAltoContraste)
    mudarElementosContraste()
}

function mudarElementosContraste(){
    if(isAltoContraste == true){
        document.documentElement.style.setProperty('--corNavEscura', "#181828")
        document.documentElement.style.setProperty('--corSemHover', "#dedeec")
        document.documentElement.style.setProperty('--corFundo', "#232333")
    }
    else{
        document.documentElement.style.setProperty('--corNavEscura', "#262636")
        document.documentElement.style.setProperty('--corSemHover', "#b3b3c0")
        document.documentElement.style.setProperty('--corFundo', "#333346")

    }
} 
// -------------------------------------------------------
var divUserAberta = false

function toggleDivUser(){
    divUserAberta = !divUserAberta

    if(divUserAberta == true){
        document.getElementById("div-user").style.display = "block"
        document.getElementById("div-user").style.right = "0px"
    } else{
        elementoAberto =  document.getElementById("div-user")
        document.getElementById("div-user").style.right = "-80%"

    }
}

// -------------------------------------------------------
var blurAtivado = true

if(localStorage.getItem("blurAtivado") !== null){
    if(localStorage.getItem("blurAtivado") == "true"){
        blurAtivado = true
    }
    if(localStorage.getItem("blurAtivado") == "false"){
        blurAtivado = false
    }
}

const backgroundConfig = document.getElementById("div-config")
const backgroundDesejos = document.getElementById("listaDeDesejos")

function toggleBlur(){
    blurAtivado = !blurAtivado
    mudarBlur()
}

function mudarBlur(){
    console.log(blurAtivado)
    if(blurAtivado == true){
        backgroundConfig.style.backdropFilter = "blur(15px)"
        backgroundConfig.style.backgroundColor = "var(--corFundoOpacity)"
        try {

            backgroundDesejos.style.backdropFilter = "blur(15px)"        
            backgroundDesejos.style.backgroundColor = "var(--corFundoOpacity)"
        } catch (TypeError){

        }
    } else{
        backgroundConfig.style.backdropFilter = "blur(0px)"
        backgroundConfig.style.backgroundColor = "var(--corFundo)"
        try {
            backgroundDesejos.style.backdropFilter = "blur(0px)"        
            backgroundDesejos.style.backgroundColor = "var(--corFundo)"
        } catch (TypeError) {
        }
    }
    localStorage.setItem("blurAtivado", blurAtivado)
}

mudarBlur()