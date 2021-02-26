// EXERCÍCIO 1 - O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//     valor += i
//   }
//   console.log(valor)

// o Código esta somando +1 na variavel "i" enquando "i "" for menor q cinco. E somando a variavel "valor" + o novo valor de "i" a cada loop. ou seja. 
//     i = 0 / 1 / 2 / 3 / 4
// valor = 0/ 1 / 3 / 6 / 10
// resultado é valor = 10

// EXERCÍCIO 2 -Leia o código abaixo: 

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// ```

// a. O que vai ser impresso no console?
// VAI SER IMPRESSO OS NUMEROS MAIORES QUE 18.
// O for PERCORRE TODO ARRAY lista COMPARANDO SE É MAIOR QUE 18, E QUANDO POSITIVO ELE IMPRIME.

// b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso? sim mas precisa definir a variavel let com inicio em zero. e depois concatenar com os elementos correspondentes.
// let i = 0
// let numbers = [10, 20, 30]
// for(let number of numbers) {
//   console.log('índice ' + i + ': ' + number)
//   i++
// }

// DESAFIO 1
// 0
// 00
// 000
// 0000

// EXERCÍCIO 3
// resp a
// let arrayoriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let array of arrayoriginal){
//     console.log(array)
// }
// resp b
// for (let array of arrayoriginal){
//     console.log(array/10)
// }
// resp c - ESSE É UM NOVO ARRAY SOMENTE COM OS NUMEROS PARES DO ARRAY ORIGINAL
// let arrayoriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoarray =[]
// for (let array of arrayoriginal){
//     if (array%2 == 0){
//     novoarray.push(array)
//     }
// }
// console.log(novoarray)
// 
// RESP d - O ELEMENTO DO INDEX E SUA POSIÇÃO CORRESPONDENTE
// let arrayoriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let i = 0
// for(let array of arrayoriginal) {
//   console.log('O elemento do índex ' + i + ' é ' + array)
//   i++
// }
// ****
//  RESP e. MAIOR E MENOR NUMERO DO ARRAY**
// let arrayoriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maiorNumero = 0
// let menorNumero = 1000
// for ( let i = 0 ; i < arrayoriginal.length ; i ++ ){
//   if(arrayoriginal[i] > maiorNumero) {
//   maiorNumero = arrayoriginal[i]  
//   }
// } 
// for ( let i = 0 ; i < arrayoriginal.length ; i ++ ){
//   if(arrayoriginal[i] < menorNumero) {
//   menorNumero = arrayoriginal[i]  
//   }
// }
// console.log("o maior número é ", maiorNumero, "e o menor número é ", menorNumero)
