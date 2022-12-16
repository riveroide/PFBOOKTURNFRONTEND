import {Router} from "express"
import { getAllBookings } from "../controllers/booking";
const { PrismaClient } = require("@prisma/client");
// import { addBooking } from "../controllers/booking";
const router = Router();

const prisma = new PrismaClient()

router.post("/", async (req, res)=>{
 const { state, date, idClient, idBusiness, idServices } = req.body;

try {
    if(!state || !date || !idClient || !idBusiness || !idServices ){
        res.status(400).send("Faltan datos.")
    }
    const newBooking = await prisma.booking.create({ data: req.body,})
 //formato datetime ===> 2021-03-29T00:00:00.000Z
    console.log(newBooking);
    res.status(200).json({newBooking})

} catch (error) {
    console.log(error);
    res.status(400).json(error)

}
});

router.get("/", async (_req,res) => {
    try {
    const result = await getAllBookings();
    return res.json(result)
    } catch (error) {
        return "error en route"
    }
})

router.delete("/:id", async (req, res)=> {
    const  id  = parseInt(req.params.id)
    try {
        const deleteBooking = await prisma.booking.delete({
            where: {
                id: id
            }
        })
        console.log("borrado", deleteBooking);
        return res.status(200).send("Eliminado exitosamente.")
    } catch (error) {
        console.log(error);
        return "error en route."
    }
})

router.put("/:id", async (req, res) => {
    const  id  = parseInt(req.params.id)
    const { state, date, idClient, idBusiness, idServices } = req.body;
    
    try {

        const actualBooking = await prisma.booking.update({
            where: {
                id: id
            },
             data: {
                state: state,
                date: date,
                idClient: idClient,
                idBusiness: idBusiness, 
                idServices: idServices
             },
        })

        console.log(actualBooking);
        return res.status(200).send(actualBooking)
    } catch (error) {
        console.log(error);
        return "error en route."
    }
})

export default router;