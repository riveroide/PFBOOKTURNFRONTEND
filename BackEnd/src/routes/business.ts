
import {Router} from "express"
import { getAllBusiness } from "../controllers/business";
const router = Router();

router.get("/", async (_req,res) => {
    try {
    const result = await getAllBusiness();
    return res.json(result)
    } catch (error) {
        return "error en route"
    }
    
})



export default router;