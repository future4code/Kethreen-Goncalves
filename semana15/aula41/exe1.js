// A)// console.log(process.argv[0]);
// console.log(process.argv[1]);
//é um array. De todos os argumentos de um processo
//process.argv[0] SEMPRE VALE o próprio node
//process.argv[1] SEMPRE VALE o arquivo que o node vai rodar
//portanto, process.argv[0] e process.argv[1] sempre estão ocupados

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores,
//  imprima no console uma mensagem que siga a seguinte estrutura:
// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

const nome = process.argv[2];
const idade = Number(process.argv[3]);

console.log(`Olá, ${nome}! Você tem, ${idade} anos. Em sete anos você terá, ${idade + 7} anos.`);
