var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if(Number(n) > 0 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inlista.includes(num.value)) {
        lista.innerHTML += `<option value="${num.value}">${num.value}</option>`
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
}
