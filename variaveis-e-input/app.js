const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const minhaPrimeiraConstanteString = "Minha primeira constante."
console.log(minhaPrimeiraConstanteString)

let leituraDeCampo
readline.question('Por favor digite alguma coisa:', input => {
    leituraDeCampo = input
    console.log(`O usuário digitou: ${leituraDeCampo}`)
})
