import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import {Router} from "express"
import {getService } from "../controllers/services";
const router = Router();

router.get("/", async (_, res) => {
   const services = await getService()
   services.length ? res.status(200).send(services) : res.status(404).send("no hay services")
})

router.post("/", async (req, res) => {
    const {name, price} = req.body
    if (!name || !price) throw new Error ("Faltan datos")
    try {
        const service = await prisma.services.create({data: req.body})
        console.log(service)
        res.status(200).send(service)
    } catch (error) {
        res.status(404).send(error)
    }
})

export default router;