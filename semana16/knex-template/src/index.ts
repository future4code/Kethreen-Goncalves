import { Request, Response } from "express";
import app from "./app";
import { connection } from "./connection";

app.get("/", (req, res)=> {res.send("Hello, world!")})

app.post("/actors", async(
    req:Request, 
    res:Response
) => {
try{

    if(!req.body.name){
        throw new Error("name is required")
    }
    
    const actorData = {
        id: req.body.id,
        name: req.body.name,
        birth_date: req.body.birthDate,
        gender: req.body.gender,
        salary: req.body.salary
    }

    await connection("Actor").insert(actorData)
    
        res.status(201).send("Actor Created")

    }catch(error){
        if (error.sqlMessage.includes("gender")){
            res.send("gender invalid")
        }
        res.status(500).send("Internal server error")
        console.log(error.message);
    }
})
/* a) Ao usar o raw, a resposta do banco inclui informações extras além das contidas nas linhas da tabela. Essas informações são enviadas em um segundo array, tornando a resposta em um grande array composto de dois outros arrays. No primeiro array filho estão as informações dos elementos (os que queremos) e no segundo array filho, as informações complementares que, neste caso, podemos ignorar. */

app.get("/actor/count/:gender", (req, res) => {
    const gender = req.params.gender;
    if (gender) {
      connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `).then((resp) => {
      res.status(200).send({ quantyGender: resp[0][0] })
    }).catch(() => {
      res.status(400).send({ menssage: "Faild" })
    })
    }
    else{
  
      res.status(200).send({ menssage: "Gender not send" })
    }
  
  })
  


app.get('/actors', async(req, res) => {
    try{
        const result= await connection("Actor")
        res.send(result)
    }catch(error){
        console.log(error.message);
        res.status(500).send(" deu error")

    }
})

app.put("/actors/:id", async(req, res)=>{
    try{

        const actorData = {
           
            name:req.body.name,
            salary:req.body.salary,
            birth_date:req.body.birthDate,
            gender:req.body.gender
        }
        
        await connection("Actor")
        .update(actorData)
        .where({id:req.params.id})

        res.send("update!")
    }catch(error){
        console.log(error.message)
        res.status(500).send("Internal error")
    }
})


   
  app.delete("/actors/:id", async (req: Request, res: Response) => {
    try {
      await connection("Actor").del().where({ id: req.params.id });
  
      res.status(200).send("Actor deleted.");
    } catch (error) {
      console.log(error.message);
      res.status(500).send("error");
    }
  });