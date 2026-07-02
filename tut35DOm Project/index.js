const signup = document.getElementById("registerForm");
const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword")

if (signup) {
    signup.addEventListener("submit", (e) => {
        e.preventDefault()
        let email = registerEmail.value
        let password = registerPassword.value

        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        alert("Registration successful!")
    })
}

const login = document.getElementById("loginForm")
const loginEmail = document.getElementById("loginEmail")
const loginPassword = document.getElementById("loginPassword")

if (login) {

    login.addEventListener("submit", (e) => {
        e.preventDefault()
        let email = loginEmail.value
        let password = loginPassword.value

        if (localStorage.getItem("email") === email && localStorage.getItem("password") === password) {
            alert("login success")
            window.location.href = "index.html"
        }
        else {
            alert("invalid user please register first")
        }


    })
}