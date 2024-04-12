function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano').value
    var res = document.querySelector('div#res')
    if (fano.length == 0 || fano.value > 2024) {
        window.alert('Ano inválido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 18) {
                img.src = '../exercicio parte 2/imagens/homem.png'
            } else {
                img.src = '../exercicio parte 2/imagens/menino.png'
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 18) {
                img.src = '../exercicio parte 2/imagens/mulher.png'
            } else {
                img.src = '../exercicio parte 2/imagens/garota.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<h2>Olá, você tem ${idade} anos, ${genero}</h2>`
        res.appendChild(img)
    }
}

