window.onscroll = function() {
    var posicao = document.documentElement.scrollTop
    var posicaoRelativa = document.documentElement.scrollHeight-
                          document.documentElement.clientHeight
    var scroll = posicao * 100 / posicaoRelativa

    document.getElementById("BarraProgressoHorizontal").style.width = scroll + "%"
}  