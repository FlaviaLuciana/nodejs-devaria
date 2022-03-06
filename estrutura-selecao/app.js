const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Você é maior de 18 anos e tem habilitação para andar de Kart?')
console.log('Verificar a sua presença no horário')

readline.question('Qual o ano do seu nascimento? ', ano =>{
    if(ano > 2004) {
        console.log('Você não tem 18 anos.')
    }else {
        readline.question("Você tem habilitação? (Sim/Nao) ", temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() === "SIM")) {
                console.log('Você não tem habilitação para andar de Kart')
            }else{
                readline.question("Qual é o seu nome? ", nome => {
                    switch(nome) {
                        case 'Douglas':
                            console.log('Bem vindo ao Kart Douglas')
                            break
                        case 'Rafael':
                            console.log('Bem vindo ao Kart Rafael')
                            break
                        default:
                            console.log('Seu nome não está na lista')        
                    }
                })
            }
        })
    }
})