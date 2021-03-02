console.log('Bem vindo ao jogo de Blackjack!')
if (confirm('Você quer iniciar uma nova rodada?')){
   let cartasUsuario = []
   let valorUsuario = []
   let somaUsuario = 0  
   let cartasComputador = []
   let valorComputador = []
   let somaComputador = 0

   for (let i =0; i<2 ; i++){
      const carta = comprarCarta(); 
      cartasUsuario.push(carta.texto) 
      valorUsuario.push(carta.valor)
      somaUsuario += valorUsuario[i]
   }
   
   for (let i =0; i<2 ; i++){
      const carta = comprarCarta(); 
      cartasComputador.push(carta.texto) 
      valorComputador.push(carta.valor)
      somaComputador += valorComputador[i]
   }
   
   console.log('Usuário - cartas: ',cartasUsuario[0],cartasUsuario[1], '- pontuação ', somaUsuario)

   console.log('Computador - cartas: ',cartasComputador[0],cartasComputador[1], '- pontuação ', somaComputador)

   if (somaComputador > somaUsuario){
      console.log('O Computador ganhou!')
   }else if (somaUsuario > somaComputador){
      console.log('O Usuário ganhou!')
   }else{
      console.log('Empate!')
   }

}else{
   console.log('O jogo acabou.')
}

