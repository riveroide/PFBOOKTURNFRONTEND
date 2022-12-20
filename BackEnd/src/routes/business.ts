import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Router } from "express";
import { getAllBusiness, getBusinessById } from "../controllers/business";
const router = Router();

router.get("/", async (_req, res) => {
  try {
    const result = await getAllBusiness();
    return res.json(result);
  } catch (error) {
    return "error en route";
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const business = await getBusinessById(id);
    return res.status(200).send(business);
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const { user } = req.body;
  if (!user) throw new Error("Falta informar usuario");
  try {
    const newbusiness = await prisma.business.create({ data: req.body });
    console.log(newbusiness);
    return res.status(200).send(newbusiness);
  } catch (error) {
    return res.status(404).send(error);
  }
});

export default router;
