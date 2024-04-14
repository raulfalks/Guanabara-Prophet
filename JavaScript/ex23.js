let amigo = {nome: 'Jao', sexo: 'M', peso: 80.5} 

function engordar(p) {
    if (p > 0) {
        amigo.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

