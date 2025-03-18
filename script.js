window.onload = function() {
    alert("Bem-vindo ao meu portfólio!");
};

document.getElementById("changeColorBtn").onclick = function() {
    document.body.style.backgroundColor = "lightblue";
};

document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        document.getElementById("msgStatus").innerText = "Mensagem enviada com sucesso!";
        document.getElementById("msgStatus").style.color = "green";
        document.getElementById("formContato").reset(); // Limpa os campos
    } else {
        document.getElementById("msgStatus").innerText = "Por favor, preencha todos os campos.";
        document.getElementById("msgStatus").style.color = "red";
    }
});
