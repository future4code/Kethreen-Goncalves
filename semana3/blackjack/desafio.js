console.log('Bem vindo ao jogo de Blackjack!')
if (confirm('Você quer iniciar uma nova rodada?')){
   
   let cartasUsuario = []
   let valorUsuario = []
   let somaUsuario = 0  
   let cartasComputador = []
   let valorComputador = []
   let somaComputador = 0
   let continuar = 0

   for (let i =0; (i<2 && somaUsuario <=21) ; i++){
      const carta = comprarCarta(); 
      cartasUsuario.push(carta.texto) 
      valorUsuario.push(carta.valor)
      somaUsuario += valorUsuario[i]
   }
   
   for (let i =0;( i<2 && somaComputador <=21) ; i++){
      const carta = comprarCarta(); 
      cartasComputador.push(carta.texto) 
      valorComputador.push(carta.valor)
      somaComputador += valorComputador[i]
   }

   
// RACIOCINAR O LOOPIN DE PERGUNTAR 

console.log( continuar, somaUsuario)
console.log('Suas cartas são ' + cartasUsuario + ' A carta revelada do computador é '+ cartasComputador[0]+"\n"+ 'Deseja comprar mais uma carta?')

   
   if (confirm('Suas cartas são ' + cartasUsuario + ' A carta revelada do computador é '+ cartasComputador[0]+"\n"+ 'Deseja comprar mais uma carta?')) {
         console.log('resp: SIM')
         let i= 2
         while (i <= 6  && somaUsuario <22){
         
         
         continuar = 0
         const carta = comprarCarta(); 
         cartasUsuario.push(carta.texto) 
         valorUsuario.push(carta.valor)
         somaUsuario += valorUsuario[i] 
         
         i++
         
         }
         }else{ 
            console.log('resp: NÃO! ')
            
           let i=2
          while ( i <= 6 && somaComputador <= somaUsuario && somaComputador <22){
            const carta = comprarCarta(); 
            cartasComputador.push(carta.texto) 
            valorComputador.push(carta.valor)
            somaComputador += valorComputador[i]  

            i++
          }
           continuar = 1
          
         }
   
       
         console.log('Usuário - cartas: ' +cartasUsuario+ 'sua pontuação é '+ somaUsuario)

         console.log('Computador - cartas: '+cartasComputador+'sua pontuação é '+ somaComputador)

         
         if ((somaUsuario <=21 )&&  (somaUsuario>somaComputador)){
         console.log('O Usuário ganhou!')
         }else if ((somaUsuario <=21 ) && (somaComputador >21)){
            console.log('O Usuário ganhou!')
         }else if (somaUsuario >21){
            console.log('O Computador ganhou!')
         }else if ( somaComputador > somaUsuario){
         console.log('O Computador ganhou!')
         }else if (somaUsuario == somaComputador){
         console.log('Empate!')
         }else{
            console.log('Empate!')
         }
      
 
   
   
   
}else{
   console.log('O jogo acabou.')
}

