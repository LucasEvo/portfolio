window.onload = function() {
    alert("Bem-vindo ao meu portfólio!");
};

document.getElementById("changeColorBtn").onclick = function() {
    document.body.style.backgroundColor = "lightblue";
};

document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();  // Impede o envio padrão do formulário
    var name = document.getElementById("name").value;
    
    if (name === "") {
        alert("Por favor, insira seu nome!");
    } else {
        alert("Obrigado por enviar, " + name + "!");
    }
};
