// Barra de progressão horizontal
window.onscroll = function () {
  var posicao = document.documentElement.scrollTop
  var posicaoRelativa = document.documentElement.scrollHeight -
                        document.documentElement.clientHeight
  var scroll = (posicao * 100) / posicaoRelativa

  document.getElementById("BarraProgressoHorizontal").style.width = scroll + "%"

  // Botão de "scroll top"
  const scrollTop = document.getElementById("ScrollTop")
    if (window.scrollY > 200) {
      scrollTop.style.visibility = "visible"
      scrollTop.style.opacity = 1 } 
    else {
      scrollTop.style.visibility = "hidden"
      scrollTop.style.opacity = 0 } }

// Função para ir para o topo da página
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" }) }

// Mostrar o botão de "scroll top" ao carregar a página
  document.addEventListener("DOMContentLoaded", function () {
    const scrollTop = document.getElementById("ScrollTop")
    scrollTop.style.visibility = "hidden"
    scrollTop.style.opacity = 0 })