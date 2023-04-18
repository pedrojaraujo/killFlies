// Screen resizing
var height = 0
var width = 0
var vidas = 1
var tempo = 15
var nivel = window.location.search
var criaMoscaTempo = 1500




nivel = nivel.replace('?', '')

if (nivel === 'Normal') {

    var criaMoscaTempo = 1500

} else if (nivel === 'Difícil') {

    var criaMoscaTempo = 1000

} else {

    var criaMoscaTempo = 750
}


function ajustSizeGame() {
    height = window.innerHeight
    width = window.innerWidth
    console.log(height, width)
}

ajustSizeGame()

var cronometro = setInterval(function () {
    tempo -= 1

    if (tempo < 0) {

        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'win_game.html'

    } else {
        document.getElementById('time-s').innerHTML = tempo
    }
}, 1000)


document.querySelector('#btn-reniciar').addEventListener('click', () => window.location.href = 'index.html')


// Fly positioning

function posiRadom() {

    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        if (vidas > 3) {
            window.location.href = 'end_game.html'
        } else {
            document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'
            vidas++
        }
    }

    var posiX = Math.floor(Math.random() * width) - 90
    var posiY = Math.floor(Math.random() * height) - 90

    posiX = posiX < 0 ? 0 : posiX
    posiY = posiY < 0 ? 0 : posiY

    console.log(posiX, posiY)

    // HTML

    var mosca = document.createElement('img')
    mosca.src = 'img/mosca.png'
    mosca.className = tamanhoRandom() + ' ' + sideRandom()
    mosca.style.left = posiX + 'px'
    mosca.style.top = posiY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosca)
}


//Functions CSS

function tamanhoRandom() {
    var classe = Math.floor(Math.random() * 3)

    if (classe === 0) {
        return 'mosca1'
    } else if (classe === 1) {
        return 'mosca2'
    } else {
        return 'mosca3'
    }
    console.log(classe)
}



function sideRandom() {
    var classe = Math.floor(Math.random() * 2)
    if (classe == 0) {
        return 'ladoA'
    } else {
        return 'ladoB'
    }
}


function playGame() {

    var nivel = document.getElementById('nivel').value

    if (nivel === '') {
        alert('Selecione um nível para começar um jogo!')
        return false
    }
    window.location.href = 'play.html?' + nivel
}  
