var msg = window.document.getElementById('msg')
var foto = window.document.getElementById('foto')

var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora <= 12) {
    img.src = 'manha.png'
    document.body.style.backgroundColor = 'blue'
} else if (hora >= 13 && hora <= 18) {
    img.src = 'tarde.png'
    document.body.style.backgroundColor = 'yellow'
} else {
    img.src = 'noite.png'   
    document.body.style.backgroundColor - 'black'
}
