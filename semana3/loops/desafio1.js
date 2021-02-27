let numeroEscolhido = Number(prompt("JOGADOR 1: Escolha um número"))
console.log('Vamos Jogar!')
let resposta = Number(prompt("JOGADOR 2: Qual número o jogador 1 escolheu?"))
jogadas=1
while ( resposta !== numeroEscolhido ){
if ( resposta < numeroEscolhido){
    console.log( 'O número chutado foi: ', resposta)
    console.log('Errrrrou, é maior... ')
    resposta = Number(prompt("JOGADOR 2: Qual número o jogador 1 escolheu?"))
}else if (resposta > numeroEscolhido){
    console.log( 'O número chutado foi: ', resposta)
    console.log('Errrrrou, é menor... ')
    resposta = Number(prompt("JOGADOR 2: Qual número o jogador 1 escolheu?"))
}
    jogadas++

}
console.log( 'O número chutado foi: ', resposta)
console.log('Você Acertou !!!')
console.log('O número de tentativas foi: ', jogadas)