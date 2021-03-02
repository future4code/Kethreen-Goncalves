// PROJETO PLANNER - AULA 15
function salvarTarefa(){
    const tarefaUsuario = document.getElementById("tarefa")
    const diaDaSemana =  document.getElementById("dias-semana")
    const domingo = document.getElementById("domingo")
    const segunda = document.getElementById("segunda")
    const terca = document.getElementById("terca")
    const quarta = document.getElementById("quarta")
    const quinta = document.getElementById("quinta")
    const sexta = document.getElementById("sexta")
    const sabado = document.getElementById("sabado")

        switch (diaDaSemana.value){
            case 'domingo':
               domingo.innerHTML += `<li>${tarefaUsuario.value}</li>`
                break
            case 'segunda':
                segunda.innerHTML += `<li>${tarefaUsuario.value}</li>`
                break  
            case 'terca':
                terca.innerHTML += `<li>${tarefaUsuario.value}</li>`
                break
             case 'quarta':
                quarta.innerHTML += `<li>${tarefaUsuario.value}</li>`
                break
            case 'quinta':
                quinta.innerHTML += `<li>${tarefaUsuario.value}</li>`
                break  
            case 'sexta':
                sexta.innerHTML += `<li>${tarefaUsuario.value}</li>`
                break
             case 'sabado':
                sabado.innerHTML += `<li>${tarefaUsuario.value}</li>`
                break           
            default:
                break
        }
         tarefaUsuario.value=""
}
