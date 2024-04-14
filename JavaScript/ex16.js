var num = [5, 8, 2, 9, 3]

num.length 
num.push(7)
num.sort()

for(var pos=0; pos < num.length; pos++) {
    console.log(num[pos])
}


console.log(num) 
console.log(`O vetor tem ${num.length} posiçes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

var pos = num.indexOf(8)
if (pos == -1) {
    console.log("O valor não foi encontrado")
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

/*
num.push(7)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posiçes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
*/