import { Router } from "express";
import {
  getAllBookings,
  getAllByBusinessId,
  putOneBooking,
} from "../controllers/booking";
import { transporter } from "../controllers/nodemailer";
const { PrismaClient } = require("@prisma/client");
// import { addBooking } from "../controllers/booking";
const router = Router();

const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { state, date, idClient, idBusiness, idServices } = req.body;
  try {
    if (!state || !date || !idClient || !idBusiness || !idServices) {
      res.status(400).send("Faltan datos.");
    }
    const newBooking = await prisma.booking.create({ data: req.body });
    //formato datetime ===> 2021-03-29T00:00:00.000Z

    try {
      
      //traigo la info que se va a usar en los emails
      const dataClient = await prisma.client.findMany({
        where: {
          id: idClient
        }
      })
      const dataBusiness = await prisma.business.findMany({
        where: {
          id: idBusiness
        }
      })
      const dataService = await prisma.services.findMany({
        where: {
          id: idServices
        }
      })
      
      //se envia el email al cliente
      await transporter.sendMail({
        from: '"BookTurn" <bookturnnotification@gmail.com>',
        to: dataClient[0].email,
        subject: "Informacion de turno",
        text: `Su turno en ${dataBusiness[0].name} para ${dataService[0].name} se ha confirmado`
      })
      
      //se envia el email a la empresa
      await transporter.sendMail({
        from: '"BookTurn" <bookturnnotification@gmail.com>',
        to: dataBusiness[0].adress,
        subject: "Sacaron un turno",
        text: `${dataClient[0].name} ha sacado un turno para ${dataService[0].name} a las ${date}`
      })
  
    } catch (error) {
      console.log(error)
    }

    console.log(newBooking);
    res.status(200).json({ newBooking });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
  
});

router.get("/", async (_req, res) => {
  try {
    const result = await getAllBookings();
    return res.json(result);
  } catch (error) {
    return "error en route";
  }
});

router.get("/business/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await getAllByBusinessId(id);
    return res.status(200).send(result);
  } catch (error: any) {
    console.log("error")
    return res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const deleteBooking = await prisma.booking.delete({
      where: {
        id: id,
      },
    });
    console.log("borrado", deleteBooking);
    return res.status(200).send("Eliminado exitosamente.");
  } catch (error) {
    console.log(error);
    return "error en route.";
  }
});

router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { state, date, idClient, idBusiness, idServices } = req.body;

  try {
    const actualBooking = await putOneBooking(
      id,
      state,
      date,
      idClient,
      idBusiness,
      idServices
    );

    console.log(actualBooking);
    return res.status(200).send(actualBooking);
  } catch (error) {
    console.log(error);
    return "error en route.";
  }
});

export default router;
