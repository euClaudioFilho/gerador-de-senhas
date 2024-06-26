let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let cointainerPassword = document.querySelector("#container-password");
let tooltip = document.querySelector(".tooltip");

let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*-_123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
};

function generatePassword() {
    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    cointainerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

    tooltip.innerHTML = "Clique para copiar 📋";
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha);

    if (navigator.clipboard.writeText(novaSenha)) {
        tooltip.innerHTML = "Senha copiada ✅";
    }
}
