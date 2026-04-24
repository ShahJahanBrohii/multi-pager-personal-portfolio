import { Router } from "express";
import {
  createProject,
  deleteProject,
  getProject,
  listProjects,
  updateProject,
} from "../controllers/projectController.js";
import { requireAdmin } from "../middlewares/auth.js";
import { uploadProjectImage } from "../middlewares/upload.js";

const router = Router();

router.get("/", listProjects);
router.get("/:id", getProject);
router.post("/", requireAdmin, uploadProjectImage.single("image"), createProject);
router.put("/:id", requireAdmin, uploadProjectImage.single("image"), updateProject);
router.delete("/:id", requireAdmin, deleteProject);

export default router;
