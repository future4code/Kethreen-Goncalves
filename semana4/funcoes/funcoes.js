// // ##EXERCÍCIO 1 **
// // ### A- /* Vai imprimir 10 e 50 */
// // ### B- /* Nada. a função foi executada mas não solicitou que imprimisse nada no console. */

// // ## EXERCÍCIO 2 **
// //### A- /* darvas , caio*/
// //### B- /* Amanda , caio */

// //## EXERCÍCIO 3 **
// /* percorre o aray verifica se é par, e armazena os pares em um novo arrayFinal*/

// //## EXERCÍCIO 4
// // ### letra A 
// function sobremim(){
//     console.log("Eu sou Kethreen Lanes, tenho 30 anos, moro no Rio de Janeiro e sou estudante.")
// }

// // ##EXERCÍCIO 4 **
// // // ### letra B     
// function sobremim(nome, idade, endereco, estudante ){
//     if (estudante === true  ){
//         estudante = 'Sou estudante'
//       }else if ( estudante === false){
//         estudante = 'Não sou estudante'
//     }
//     const frase = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${estudante}`)
//     return frase
//      }
//     const resposta = sobremim('Kell', 30, 'Santa cruz, Rio de janeiro-RJ', true )
//     console.log(resposta)

// // ## EXERCÍCIO 5 **.
// // ### letra A.
// function somaDeDoisNumeros(num1, num2){
//     soma = num1+num2
//     return soma
// }
// console.log(somaDeDoisNumeros(1,2))

// // ### letra B.
// function somaDeDoisNumeros(num1, num2){
//         soma = num1+num2
//        return num1>=num2
//     }
//     console.log(somaDeDoisNumeros(3,2))

// //### letra C
// function repeteFrase (){
//     for (let i =1; i<11; i++){
//         console.log('ESTOU ME REPETINDO DEZ VEZES')
//     }
// }
// repeteFrase()
// // ## EXERCÍCIO 6 **.
// // ### letra A.
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function arrayDeNumeros(array){
// const quantidadeDeElementos = array.length
// return quantidadeDeElementos
// }
// console.log(arrayDeNumeros(array))

// // ### letra B.
// function numeroPar(num){
//     return num %2===0
//  }
//  console.log(numeroPar(1))

// /*## letra C*/
// // const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
   
// function quantidadeDeNumerosPares(array){
//       let i = 0
//     for ( num of array){
//         if (num %2===0){
//             i++
//         }
//     }
//     return i
//  }
//  console.log(quantidadeDeNumerosPares(array))

// /*## letra D*/
// // const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22] 
// for ( num of array){
// console.log(numeroPar(num))
// }

// /*DESAFIO*/
// /*EXERCÍCIO 1.1 */
// let imprimeparametro = (parametro) => {
//    console.log(parametro)
// }
//  imprimeparametro(2)

// /*EXERCÍCIO 1.2 */
// let doisValoresSemRetorno = (valor1, valor2) =>{
//     soma = valor1+valor2
//     imprimeparametro(soma)
// }
// doisValoresSemRetorno(1,2)

// /*EXERCÍCIO 2.A */
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
