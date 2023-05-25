// Barra de progressão horizontal no topo da página
window.onscroll = function() {
    var posicao = document.documentElement.scrollTop
    var posicaoRelativa = document.documentElement.scrollHeight-
                          document.documentElement.clientHeight
    var scroll = posicao * 100 / posicaoRelativa

    document.getElementById("BarraProgressoHorizontal").style.width = scroll + "%"
}  

// Botão de scroll top
const scrollTop = document.getElementById('ScrollTop')

window.onload = () => { 
    scrollTop.style.visibility = 'hidden'
    scrollTop.style.opacity = 0
}

window.onscroll = () => {
    if (window.scrollY > 200) {
        scrollTop.style.visibility = 'visible'
        scrollTop.style.opacity = 1
    } else {
        scrollTop.style.visibility = 'hidden'
        scrollTop.style.opacity = 0
    }
}