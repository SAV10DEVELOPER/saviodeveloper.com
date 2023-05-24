window.onscroll = function() {
    var posicao = document.documentElement.scrollTop
    var posicaoRelativa = document.documentElement.scrollHeight-
                          document.documentElement.clientHeight
    var scroll = posicao * 100 / posicaoRelativa

    document.getElementById("BarraProgressoHorizontal").style.width = scroll + "%"
}  

const scrollTop = document.getElementById('ScrollTop')

window.onload = () => { 
    scrollTop.style.visibility = 'hidden'
    scrollTop.style.opacity = 0
}

window.onscroll = () => {
    if (window.scrollY > 200) {
        
    }
}