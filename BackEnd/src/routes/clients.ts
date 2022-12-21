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
            passWord: true,
            business: true
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
    } catch (error) {
        res.status(404).send(error)
    }
})

router.put("/:id", async (req, res) => {
    const { name, email, lastName, user, passWord, business } = req.body
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
                passWord: passWord,
                business: business
            }
        })
        console.log(updatedClient)
        res.status(200).send(updatedClient)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.delete('/:id', async (req, res) => {
     const id = parseInt(req.params.id);
  try {
    const deleteClient = await prisma.client.delete({
      where: {
        id: id,
      },
    });
    console.log("borrado", deleteClient);
    return res.status(200).send("Usuario eliminado");
  } catch (error) {
    console.log(error);
    return "error en route.";
  }
        
})


export default router;