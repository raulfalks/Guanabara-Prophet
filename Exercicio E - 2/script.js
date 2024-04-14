function tabuada() {
    var num = document.getElementById("num").value
    var tabuada = document.getElementById("tabuada")
    if (num.length == 0) {
        window.alert("[ERRO] Digite um nmero")
    } else {
        var n = Number(num)
        var c = 0
        tabuada.innerHTML = ""
        while (c <= 10) {
            var item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = c
            tabuada.appendChild(item)
            c++
        }
    }
}

