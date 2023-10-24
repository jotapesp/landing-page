var Bruna = window.document.getElementById("bruna")
var Samantha = window.document.getElementById("samantha")
var Leonardo = window.document.getElementById("leonardo")
var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Samantha.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Samantha.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"   
}