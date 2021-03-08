// PROJETO PLANNER - AULA 15
function salvarTarefa(){
    const tarefaUsuario = document.getElementById("tarefa")
    const diaDaSemana =  document.getElementById("dias-semana")
 
    if (tarefaUsuario.value !== "") {
        
               document.getElementById(diaDaSemana.value).innerHTML += `<p  onclick="riscarTarefa(this)" class="itens"> ${tarefaUsuario.value}</p>`
       
    }  else{
        alert('Digite um valor válido!')
    }
         tarefaUsuario.value=""
}

function riscarTarefa(element){
    element.style = "text-decoration: line-through"
}
    
   function limpar(){
    const limpardomingo = document.querySelector('#domingo')
    limpardomingo.innerHTML = `<p></p>`

    const limparsegunda = document.querySelector('#segunda')
    limparsegunda.innerHTML = `<p></p>`
    
    const limparterca = document.querySelector('#terca')
    limparterca.innerHTML = `<p></p>`

    const limparquarta = document.querySelector('#quarta')
    limparquarta.innerHTML = `<p></p>`

    const limparquinta = document.querySelector('#quinta')
    limparquinta.innerHTML = `<p></p>`

    const limparsexta = document.querySelector('#sexta')
    limparsexta.innerHTML = `<p></p>`

    const limparsabado= document.querySelector('#sabado')
    limparsabado.innerHTML = `<p></p>`
}


