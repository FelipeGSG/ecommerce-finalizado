const divConfig = document.getElementById("div-config")
const divUser = document.getElementById("div-user")
const divListaDesejos = document.getElementById("listaDeDesejos")

const elNome = document.getElementById("displayNomeUsuario")
const elEmail= document.getElementById("displayEmail")
const elButton = document.getElementById("buttonLogarSair")

let algoAberto = false

const config = {
    loggedIn: false,
    hasHighContrast: false,
    hasAnimation: true,
    hasBlur: true,
    name: undefined,
    email: undefined,
}

if(localStorage.getItem("configuracoes") != null){
    const savedConfig = JSON.parse(localStorage.getItem("configuracoes"))
    
    for(let key in config){
        config[key] = savedConfig[key]
    }
}

function setLocalStorage(){
    localStorage.setItem("configuracoes", JSON.stringify({...config}))
}

function manageConfig(att, callback){

    if(!att || !callback) return
    if(typeof(config[att]) == "boolean"){
        config[att] = !config[att]
    }

    setLocalStorage()
    callback()
}

function openDiv(id = "", displayValue = "flex") {
    
    divConfig.style.display = "none"
    divUser.style.display = "none"
    
    if(divListaDesejos) divListaDesejos.style.display = "none"
    
    if(id !== ""){
        document.getElementById(id).style.display = displayValue
        algoAberto = true
        return
    }
    algoAberto = false
}
// -------------------------------------------------------
document.body.addEventListener("keyup", (event) =>{
    if(event.key === "Escape"){
        if(algoAberto){
            openDiv()
        } else{
            window.location.href = "index.html"    
        }
    }
})
// -------------------------------------------------------
// programação referente ao contraste do site:
function mudarContraste(){
    if(config.hasHighContrast == true){
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
function mudarBlur(){
    if(config.hasBlur == true){
        divConfig.style.backdropFilter = "blur(15px)"
        divConfig.style.backgroundColor = "var(--corFundoOpacity)"
        try {
            divListaDesejos.style.backdropFilter = "blur(15px)"        
            divListaDesejos.style.backgroundColor = "var(--corFundoOpacity)"
        } catch (TypeError){

        }
    } else{
        divConfig.style.backdropFilter = "blur(0px)"
        divConfig.style.backgroundColor = "var(--corFundo)"
        try {
            divListaDesejos.style.backdropFilter = "blur(0px)"        
            divListaDesejos.style.backgroundColor = "var(--corFundo)"
        } catch (TypeError) {
        }
    }
    localStorage.setItem("blurAtivado", config.hasBlur)
}

//---------------------------------------------
function mudarAnimacao(){
    if(config.hasAnimation === true){
        document.getElementsByClassName("slider")[0].style.animation = " 30s infinite linear normal running sliderInicio"
    } else if(config.hasAnimation === false){
        document.getElementsByClassName("slider")[0].style.animation = "30s infinite linear normal running none"
    }
}
//---------------------------------------------
function displayUsuario(){
    (config.loggedIn && config.name != undefined) ? elNome.innerText = config.name : elNome.innerText = "Usuário";
    (config.loggedIn && config.email != undefined) ? elEmail.innerText = config.email : elEmail.innerText = "Email não definido";
    config.loggedIn ? elButton.innerText = "Sair" : elButton.innerText = "Logar"


    if(!document.getElementById("bemVindoUsuario")) {
        return
    }
    
    if((config.loggedIn && config.name != undefined)){
        document.getElementById("bemVindoUsuario").innerText = config.name 
    } else{
        document.getElementById("bemVindoUsuario").innerText = "usuário"
    }
}

function botaoSairLogar(){
    if(config.loggedIn){
        config.loggedIn = false
        setLocalStorage()
        displayUsuario()
    } else{
        window.location.href = "quemSomos.html"
    }
}

displayUsuario()