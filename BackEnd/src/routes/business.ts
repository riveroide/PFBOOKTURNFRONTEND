import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Router } from "express";

import { getAllBusiness, upDateBusiness,getBusinessById , getBusinessByUser} from "../controllers/business";
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

router.get("/login/:user", async (req, res) => {
  try {
    const user = req.params.user;
    const business = await getBusinessByUser(user);
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
    res.status(200).send(newbusiness);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) return res.status(400).send("Favor de proveer un id");
  try {
    const business = await upDateBusiness(req.body, id);
    return res.status(200).send(business);
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
