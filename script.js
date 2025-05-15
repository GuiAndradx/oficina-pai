function enviarOrcamento() {
  const numero = "5511930192475";
  const mensagem = "Olá, gostaria de solicitar um orçamento.";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}
function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("show");
}