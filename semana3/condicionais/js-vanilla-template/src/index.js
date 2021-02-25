// EXERCÍCIO 1
// O cod. transforma o valor inserido pelo usuário em número e o divide por dois. caso o resto da divisão seja zero retorna "passou no teste" se não "nao passou no teste". NA VERDADE O CODIGO ESTA TESTANDO SE O NUMERO É PAR OU IMPAR.

// EXERCÍCIO 2
// resp a : o cod serve para informar o preço da fruta desejada.
// resp b : O preço da fruta  Maçã  é  R$  2.25
// resp c : O preço da fruta  Pêra  é  R$  5 - ISSO ACONTECEU PQ ELE NÃO DEU BREAK E PASSOU PARA O PROXIMO CONSOLE.

// EXERCÍCIO 3
// resp a : pedindo para o usuario digitar um numero e convertendo ele para número.
// resp b : Esse numero passou no teste
// resp c : a variavel foi defina dentro do escopo  do bloco filho. por isso quem esta fora não consegue acessar a variavel.


// EXERCÍCIO 4
// const idade = Number(prompt("Digite sua Idade."))
// if (idade >= 18 ){
//     console.log ("Você pode dirigir")
// }else { 
//     console.log("você não pode dirigir.")
// }

//  EXERCÍCIO 5
// const turno = (prompt("Digite seu Turno: M (matutino) ou V (Vespertino) ou N (Noturno) ."))
// if (turno === "M" ){
//     console.log ("Bom dia!")
// } else if (turno === "V" ){
//         console.log ("Boa Tarde!")
// }else if (turno === "N"){ 
//     console.log("Boa Noite!")
// }

// EXERCÍCIO 6
// const turno = prompt("Digite seu Turno: M (matutino) ou V (Vespertino) ou N (Noturno) .")
// switch (turno){
//     case "M":
//         console.log ("Bom dia!")
//         break
//     case "V":
//         console.log ("Boa Tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log('DIGITE UM TURNO VÁLIDO!')
       
// }
// EXERCÍCIO 7 com desafio 1.
let filme = prompt("Qual gênero de filme vão assistir?")
let preco = Number(prompt("Qual o preço do Ingresso?"))
if (filme == 'fantasia' && preco < 15 ){
    let snack = prompt('Qual snack você quer comprar?')
    console.log(`Bom filme!... com ${snack}`)
}else {
    console.log ("Escolha outro filme :(")
   
}