



// let printAuthor = document.getElementById("autor-post")
// let author = printAuthor.value
// let printContent = document.getElementById("conteudo-post")
// let content = printContent.value

//

 
 


const createPostButton = () =>{

    const printTitle = document.getElementById("titulo-post")
    const printAuthor = document.getElementById("autor-post")
    const printImage = document.getElementById("image-post")
    const printContent = document.getElementById("conteudo-post")
    
    const userPost = {
    title: printTitle.value ,
    author: printAuthor.value,
    image: printImage.value,
    content: printContent.value

}
    // guarda onde imprimir
   
    let printPost = document.getElementById("container-de-posts")
    if (userPost.image.includes('.png') || userPost.image.includes('.jpg')){  
        printPost.innerHTML += `
        <div class="myPost" >
            <h1>${userPost.title} </h1> 
            <h3>${userPost.author} </h3> 
            <img id="imagePost" src= ${userPost.image} /> 
            <p>${userPost.content} </p>  
        </div>`
        
    } else {
        printPost.innerHTML += `
        <div class="myPost" >
            <h1>${userPost.title} </h1> 
            <h3>${userPost.author} </h3> 
            <p>${userPost.content} </p>  
        </div>`
    }
    
   
    // zera input
    printTitle.value = ""
    printAuthor.value = ""
    printImage.value = ""
    printContent.value = ""
  
}
