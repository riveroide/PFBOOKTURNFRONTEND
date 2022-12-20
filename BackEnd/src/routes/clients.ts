import {Router} from "express"
import { getAllClients } from "../controllers/clients";
const router = Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

router.get("/", async (_req,res) => {
    try {
    const result = await getAllClients();
    return res.json(result)
    } catch (error) {
        return "error en route"
    }
    
})

router.post("/", async (req, res) => {
    const { email, user } = req.body
    if (!user || !email) throw new Error ("Faltan datos")
    try {
        const newclient = await prisma.client.create({data: req.body})
        console.log(newclient)
        res.status(200).send(newclient)
    } catch (error:any) {
        res.status(404).send(error.message)
    }
})


export default router;