import { Router } from "express";
import { getMe, loginAdmin } from "../controllers/authController.js";
import { requireAdmin } from "../middlewares/auth.js";

const router = Router();

router.post("/login", loginAdmin);
router.get("/me", requireAdmin, getMe);

export default router;
