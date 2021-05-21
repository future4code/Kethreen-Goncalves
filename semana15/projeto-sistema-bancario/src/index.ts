import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    try {
        res.status(200).send("funciona?")
    } catch (erro) {
        res.status(400).send({ message: erro.message })
    }
})





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});