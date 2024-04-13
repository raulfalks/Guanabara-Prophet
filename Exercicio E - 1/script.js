function contar() {
    var inicio = document.getElementById("inicio").value
    var fim = document.getElementById("fim").value
    var passo = document.getElementById("passo").value

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert("[ERRO] Faltam dados")
    } else {
        res.innerHTML = "Contando..."
        var i = Number(inicio)
        var f = Number(fim)
        var p = Number(passo)
        if (p <= 0) {
            window.alert("vsf mlk")
        } 
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{F913}`
        }
            res.innerHTML += "\u{FAE6}"
        } else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{F913}`
            }
            res.innerHTML += "\u{FAE6}"
        }
    }
}

