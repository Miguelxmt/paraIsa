setInterval(() => {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.innerHTML = "❤️";

  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(coracao);

  setTimeout(() => {  
    coracao.remove();
  }, 3000);
}, 300);
function virarCarta(carta) {
  carta.classList.toggle("virada");
}// ===== CORAÇÕES =====
function criarCoracao() {
  setInterval(() => {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerHTML = "❤️";

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = Math.random() * 20 + 20 + "px";

    document.body.appendChild(coracao);

    setTimeout(() => coracao.remove(), 3000);
  }, 300);
}

// ===== VIRAR CARTA =====
function virarCarta(carta) {
  carta.classList.toggle("virada");
}

// ===== LOGIN COM DATA =====
const dataCorreta = "2025-06-02";

document.querySelector(".login").addEventListener("submit", function (e) {
  e.preventDefault();

  const dataDigitada = this.querySelector('input[type="date"]').value;

if (dataDigitada === dataCorreta) {
  document.querySelector(".login-container").classList.add("hidden");
  document.querySelector(".displayNone").style.display = "flex";
document.getElementById("musica").play();
  alert("💖 Bem-vinda,xuxu!");
}
 else {
    alert("❌ nossa xuxu e  ssa não é a nossa data especial 😢");
  }
});
function iniciarTimer() {
  // 🔴 COLOQUE A DATA AQUI (ANO, MÊS-1, DIA)
  const dataInicio = new Date(2025, 6, 2); // Exemplo: 10/06/2023

  setInterval(() => {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
  }, 1000);
}

iniciarTimer();
