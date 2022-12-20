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

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
    const client = await prisma.client.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            lastName: true,
            email: true,
            user: true,
            password: true,
         }
    })
   
    return res.json(client)
     
    //  const result = await getAllClients();
    //  return res.json(result)
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

router.put("/:id", async (req, res) => {
    const { name, email, lastName, user, passWord } = req.body
    const id = parseInt(req.params.id)
    if (!user || !email) throw new Error ("Faltan datos")
    try {
        const updatedClient = await prisma.client.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                lastName: lastName,
                user: user,
                email: email,
                password: passWord,
            }
        })
        console.log(updatedClient)
        res.status(200).send(updatedClient)
    } catch (error) {
        res.status(404).send(error)
    }
})


export default router;