import { Router } from "express";
import { addService, service } from "../controllers/services";

const router = Router();

router.post("/", async (_req, res) => {
  const result: service = await addService(_req.body);

  res.status(200).send(result);
});

export default router;
