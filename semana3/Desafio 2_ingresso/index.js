let nome = prompt('Digite seu nome:')
let tipoDeJogo = prompt('indique o jogo: IN indica internacional; e DO indica doméstico')
let etapaDoJogo = prompt ('Etapa : SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final') 
let categoria = prompt ('qual a categoria: 1,2,3 ou 4?')
let quantidadeDeIngressos = Number( prompt ('Quantos Ingressos:'))
let dolar = 4.10
let valor 

console.log('---Dados da compra---')
console.log('Nome do cliente:', nome)
if (tipoDeJogo == 'IN'){
    console.log('Tipo do Jogo: Internacional')
    } else if (tipoDeJogo == 'DO'){
        console.log('Tipo do Jogo: Doméstico')
    }
if (etapaDoJogo == 'SF'){
    console.log('Etapa do jogo: semi-final')
    } else if (etapaDoJogo == 'DT' ){
    console.log('Etapa do jogo: Decisão de terceiro lugar')
    } else if (etapaDoJogo == 'FI' ){
    console.log('Etapa do jogo: Final')
    }
console.log('Categoria:', categoria)
console.log('Quantidade de Ingressos:', quantidadeDeIngressos)
console.log('---Valores---')

switch (etapaDoJogo && categoria){ 
    case "SF" && "1":
        valor = 1320
        break
    case "SF" && "2":
        valor = 880
        break
    case "SF" && "3":
        valor = 550
        break
    case "SF" && "4":
        valor = 220
        break
    case "DT" && "1":
        valor = 660
        break
    case "DT" && "2":
        valor = 440
        break
    case "DT" && "3":
        valor = 330
        break
    case "DT" && "4":
        valor = 170
        break
    case "FI" && "1":
        valor = 1980
        break
    case "FI" && "2":
        valor = 1320
        break
    case "FI" && "3":
        valor = 880
        break
    case "FI" && "4":
        valor = 330
        break
}
if (tipoDeJogo == "IN"){
  console.log('Valor do Ingresso: U$ ', (valor * dolar))
  console.log('Valor total: U$ ', ((valor * dolar)*quantidadeDeIngressos))
}else {
    console.log('Valor do Ingresso: R$ ', valor)
    console.log('Valor total: R$ ', (valor *quantidadeDeIngressos))
}




