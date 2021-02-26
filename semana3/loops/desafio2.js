function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let numeroEscolhido = getRandomIntInclusive(0,100)

alert('Vamos Jogar!')


console.log('Vamos Jogar!')

let resposta = Number(prompt(" Qual número estou pensando?"))
jogadas=1

while ( resposta !== numeroEscolhido ){
if ( resposta < numeroEscolhido){
    console.log( 'O número chutado foi: ', resposta)
    console.log('Errrrrou, é maior... ')
    resposta = Number(prompt(" Qual número estou pensando?"))
}else if (resposta > numeroEscolhido){
    console.log( 'O número chutado foi: ', resposta)
    console.log('Errrrrou, é menor... ')
    resposta = Number(prompt(" Qual número estou pensando?"))
}
    jogadas++

}
console.log( 'O número chutado foi: ', resposta)
console.log('Você Acertou !!!')
console.log('O número de tentativas foi: ', jogadas)