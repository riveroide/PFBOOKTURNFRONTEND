import {Router} from "express"
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




export default router;