import { Router } from "express";
import { getContentOverview, getSiteContent } from "../controllers/contentController.js";

const router = Router();

router.get("/overview", getContentOverview);
router.get("/site", getSiteContent);

export default router;
