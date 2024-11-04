// localStorage.setItem("logado", false)
// -------------------------------------------------------
var elementoAberto = "inicio"

document.body.addEventListener("keyup", (event, elemento) =>{
    elemento = elementoAberto
    console.log(event.key)
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
