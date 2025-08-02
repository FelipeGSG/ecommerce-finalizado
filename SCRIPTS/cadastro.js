const loginNome = document.getElementById("name_input")
const loginEmail = document.getElementById("email_input")
const loginPassword = document.getElementById("password_input")

document.getElementById("divFundoCadastro").addEventListener("submit", (e) =>{
    e.preventDefault()

    if(!loginNome.value.trim() ||
        !loginPassword.value.trim()    
    ){
        alert("Necessário preencher campos obrigatórios")
        return
    }

    config.name = loginNome.value.trim()
    config.email = loginEmail.value.trim()
    config.loggedIn = true

    setLocalStorage()
    displayUsuario()

    window.location.href = "index.html"
})
    

