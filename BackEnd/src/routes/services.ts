import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import {Router} from "express"
import {deleteService, getService } from "../controllers/services";
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

router.delete("/:id", async (req, res) => {
    const {id} = req.params
    const idnum = parseInt(id) //parseo el numero a int porque typescript reconoce el params como string
    try {
        const deletedService = await deleteService(idnum)
        deletedService ? res.status(200).send(`Servicio ${deletedService} eliminado exitosamente`)
        : res.status(404).send("Servicio no existente") //El status 404 no funciona, hay que ver como solucionarlo
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put("/:id", async (req, res) => {
    const id = parseInt(req.params.id) //parseo el numero a int porque typescript reconoce el params como string
    const {name, price, time, category} = req.body
    try {
        await prisma.services.update({where: {
            id
        },
        data: {
            name,
            price,
            time,
            category
        }
    })
    res.status(200).send("Servicio actualizado")
    } catch (error) {
    res.status(400).send(error)
    }
    
    
    

})


export default router;
