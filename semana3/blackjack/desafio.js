console.log('Bem vindo ao jogo de Blackjack!')
if (confirm('Você quer iniciar uma nova rodada?')){
   let cartasUsuario = []
   let valorUsuario = []
   let somaUsuario = 0  
   let cartasComputador = []
   let valorComputador = []
   let somaComputador = 0
   let continuar = 0

   for (let i =0; (somaUsuario != 22 && i<2) ; i++){
      const carta = comprarCarta(); 
      cartasUsuario.push(carta.texto) 
      valorUsuario.push(carta.valor)
      somaUsuario += valorUsuario[i]
   }
   
   for (let i =0;( i<2 && somaUsuario != 22) ; i++){
      const carta = comprarCarta(); 
      cartasComputador.push(carta.texto) 
      valorComputador.push(carta.valor)
      somaComputador += valorComputador[i]
   }
       

   
// RACIOCINAR O LOOPIN DE PERGUNTAR 
   for (let i =0;(continuar < 10) && (somaUsuario <= 21) ; i++){
         console.log('Suas cartas são ' + cartasUsuario + ' A carta revelada do computador é '+ cartasComputador[0]+"\n"+ 'Deseja comprar mais uma carta?')

      if (confirm('Suas cartas são ' + cartasUsuario + ' A carta revelada do computador é '+ cartasComputador[0]+"\n"+ 'Deseja comprar mais uma carta?')) {
         const carta = comprarCarta(); 
         cartasUsuario.push(carta.texto) 
         valorUsuario.push(carta.valor)
         somaUsuario += valorUsuario[i] 
         continuar++
      
   }else{
          while ( somaComputador <= somaUsuario ){
            const carta = comprarCarta(); 
            cartasComputador.push(carta.texto) 
            valorComputador.push(carta.valor)
            somaComputador += valorComputador[i]  
      }
      continuar = 11
          
   }
   }
       
         console.log('Usuário - cartas: ',cartasUsuario, '- pontuação ', somaUsuario)

         console.log('Computador - cartas: ',cartasComputador,'- pontuação ', somaComputador)

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

