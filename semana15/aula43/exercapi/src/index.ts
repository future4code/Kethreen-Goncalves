import express, {Request, Response} from "express";
import cors from "cors";
import { countries, country } from './countries';

const app = express();

app.use(express.json());
app.use(cors());

/* METODO GET COM BODY E QUERY*/

app.get("/test", (req: Request, res: Response) =>{
    const nome = req.body.nome;
    const cabelo = req.query.cabelo;

    res.send({message:`Hello, ${nome}, seu cabelo é ${cabelo}` });
})
// body se chama no corpo com chaves e query com "?chave=nome"
/*FIM DO GET BODY E QUERY*/

/* METODO GET buscando arquivo country*/
// app.get("/countries/all", (req: Request, res: Response)=>{
//     res
//     .status(200)
//     .send(countries);
// })
/* FIM DO METODO GET buscando arquivo country*/

// ///////////////////////////////

/* METODO GET passado MAP buscando arquivo country*/
app.get("/countries/all", (req: Request, res: Response)=>{
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
      }))
    res
    .status(200)
    .send(result);
})
  //   passando um map para so pegar id e name
/* FIM DO METODO GET passado MAP buscando arquivo country*/

// ///////////////////////////////////

/* METODO GET SEARCH buscando NOME ESPECIFICO no arquivo country*/
// app.get("/countries/search", (req: Request, res: Response)=>{
    
//     const name = req.query.name as string;
    
//     const result = countries.filter((country)=> 
//     country.name.toLowerCase().includes(name.toLowerCase()))

//     res.status(200).send(result);

//   });
//     //   passando na requsiçao um nome e uma string ele busca
//     // 
//   /* FIM DO METODO GET buscando NOME ESPECIFICO no arquivo country*/

/* METODO GET SEARCH com VALIDACOES E MAIS DE 1 QUERYbuscando NOME ESPECIFICO no arquivo country*/
app.get("/countries/search", (req: Request, res: Response)=>{
    let result: country[] = countries
try{  
  
if (req.query.name) {
   result = result.filter(
      country => country.name.includes(req.query.name as string)
   )
}

if (req.query.capital) {
   result = result.filter(
      country => country.capital.includes(req.query.capital as string)
   )
}

if (req.query.continent) {
   result = result.filter(
      country => country.continent.includes(req.query.continent as string)
   )
}
if(result.length === 0){
    throw new Error("pesquisa não encontrado)");
 }
    res.status(200).send(result);
    }catch(error){
            // deu tudo errado
                res.status(404).send({message: error.message})
    }
  });
//     //   passando na requsiçao um nome e uma string ele busca
//     // 
//   /* FIM DO METODO GET CO, VALIDAÇÃOES buscando NOME ESPECIFICO no arquivo country*/



/* METODO GET ID COM VALIDAÇÃO THROW no arquivo country*/
// O THROW É UM  ARREMEÇO DO ERRO. E O CATCH PEGA TUDO Q FOI
// ARREMEÇADO NO THROW
app.get("/countries/:id", (req: Request, res: Response)=>{
    try{
        
        if (isNaN(Number(req.params.id))){
            throw new Error("o id precisa ser um numero");
        }

        const id = Number(req.params.id);
        const result = countries.find((country => country.id === id));
         if(!result){
            throw new Error("not fount(id não encontrado)");
         }
        
        // deu tudo certo
             res
             .status(200)
             .send (result);


    } catch(error){
        // deu tudo errado
            res.status(404).send({message: error.message})
    }
    




});
  //  Verificamos se a entrada é numerica. se não, parra a eecução.
/* FIM DO METODO GET ID no arquivo country*/

// //////////////////////////////

/* METODO GET ID no arquivo country*/
// app.get("/countries/:id", (req: Request, res: Response)=>{
//     const id = Number(req.params.id);
//      res
//      .status(200)
//      .send
//      (countries.find(
//          (country => country.id === id)
//      )
//      );
  
//   });
    //   passando um map para so pegar id e name
  /* FIM DO METODO GET ID no arquivo country*/





// ultima coisa que escreve é list. ele executa depois de todos os endpoints
app.listen(3004, ()=> {
    console.log("Server is running at http://localhost:3004");
});