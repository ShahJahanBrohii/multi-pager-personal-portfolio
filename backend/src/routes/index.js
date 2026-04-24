import { Router } from "express";
import authRoutes from "./authRoutes.js";
import certificateRoutes from "./certificateRoutes.js";
import contentRoutes from "./contentRoutes.js";
import contactRoutes from "./contactRoutes.js";
import projectRoutes from "./projectRoutes.js";

const router = Router();

router.get("/health", (req, res) => {
  res.json({ success: true, message: "API is healthy." });
});

router.use("/auth", authRoutes);
router.use("/projects", projectRoutes);
router.use("/certificates", certificateRoutes);
router.use("/content", contentRoutes);
router.use("/contact", contactRoutes);

export default router;
