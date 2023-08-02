// BARRA DE PROGRESSÃO HORIZONTAL: Barra no topo da página para ir medindo a progressão vertical
window.onscroll = function () {
  var posicao = document.documentElement.scrollTop
  var posicaoRelativa = document.documentElement.scrollHeight -
                        document.documentElement.clientHeight
  var scroll = (posicao * 100) / posicaoRelativa

  document.getElementById("BarraProgressoHorizontal").style.width = scroll + "%"

// BOTÃO SCROLL TO TOP: Batão para voltar para o topo da página
  const scrollTop = document.getElementById("ScrollTop")
  if (window.scrollY > 200) {
    scrollTop.style.visibility = "visible"
    scrollTop.style.opacity = 1 }   
  else {
    scrollTop.style.visibility = "hidden"
    scrollTop.style.opacity = 0 } }

  function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" }) }

  document.addEventListener("DOMContentLoaded", function () {
  const scrollTop = document.getElementById("ScrollTop")
  scrollTop.style.visibility = "hidden"
  scrollTop.style.opacity = 0 })

// SLIDE MID PAGE: Com conteúdos 3 conteúdos de destaque de cada tema
var splide = new Splide( '.splide', {
  type   : 'loop',
  drag   : 'free',
  perPage: 5,
  perMove: 3,
  gap: '2rem',
  snap: true,

/* CONFIGURAÇÕES EXTRAS:
  padding: '3rem', 
  arrows: true,
  pagination: true,
  autoplay: true,
*/
} )

splide.mount()