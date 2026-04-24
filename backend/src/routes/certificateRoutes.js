import { Router } from "express";
import {
  createCertificate,
  deleteCertificate,
  getCertificate,
  listCertificates,
  updateCertificate,
} from "../controllers/certificateController.js";
import { requireAdmin } from "../middlewares/auth.js";
import { uploadCertificateImage } from "../middlewares/upload.js";

const router = Router();

router.get("/", listCertificates);
router.get("/:id", getCertificate);
router.post("/", requireAdmin, uploadCertificateImage.single("image"), createCertificate);
router.put("/:id", requireAdmin, uploadCertificateImage.single("image"), updateCertificate);
router.delete("/:id", requireAdmin, deleteCertificate);

export default router;
