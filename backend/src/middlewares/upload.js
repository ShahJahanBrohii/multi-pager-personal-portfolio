import fs from "fs";
import path from "path";
import multer from "multer";
import { env } from "../config/env.js";

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function buildStorage(folder) {
  const destination = path.resolve(process.cwd(), "uploads", folder);
  ensureDir(destination);

  return multer.diskStorage({
    destination: (req, file, cb) => cb(null, destination),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      const base = path.basename(file.originalname, ext).replace(/\s+/g, "-").toLowerCase();
      cb(null, `${base}-${Date.now()}${ext}`);
    },
  });
}

function fileFilter(req, file, cb) {
  const allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  if (!allowed.includes(file.mimetype)) {
    const err = new Error("Only JPG, PNG, and WEBP images are allowed.");
    err.statusCode = 400;
    return cb(err);
  }
  return cb(null, true);
}

function createUploader(folder) {
  return multer({
    storage: buildStorage(folder),
    fileFilter,
    limits: {
      fileSize: env.MAX_FILE_SIZE_MB * 1024 * 1024,
    },
  });
}

export const uploadProjectImage = createUploader("projects");
export const uploadCertificateImage = createUploader("certificates");
