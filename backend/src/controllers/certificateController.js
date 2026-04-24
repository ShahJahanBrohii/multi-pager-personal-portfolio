import { Certificate } from "../models/Certificate.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { safeUnlink, toPublicPath, toPublicUrl } from "../utils/media.js";

export const listCertificates = asyncHandler(async (req, res) => {
  const { tag } = req.query;
  const filter = tag ? { tag } : {};
  const items = await Certificate.find(filter).sort({ featured: -1, order: 1, createdAt: -1 });
  res.json({ success: true, data: items });
});

export const getCertificate = asyncHandler(async (req, res) => {
  const item = await Certificate.findById(req.params.id);
  if (!item) {
    return res.status(404).json({ success: false, message: "Certificate not found." });
  }
  res.json({ success: true, data: item });
});

export const createCertificate = asyncHandler(async (req, res) => {
  const { title, issuer, year, tag, color, desc, featured, order } = req.body;

  if (!title || !issuer || !year || !tag) {
    return res.status(400).json({ success: false, message: "title, issuer, year, and tag are required." });
  }

  if (!req.file) {
    return res.status(400).json({ success: false, message: "Certificate image is required." });
  }

  const imagePath = toPublicPath(req.file.path);
  const created = await Certificate.create({
    title,
    issuer,
    year,
    tag,
    color: color || "#F5A623",
    desc: desc || "",
    featured: String(featured) === "true",
    order: Number(order || 0),
    imagePath,
    imageUrl: toPublicUrl(req, imagePath),
  });

  res.status(201).json({ success: true, data: created });
});

export const updateCertificate = asyncHandler(async (req, res) => {
  const current = await Certificate.findById(req.params.id);
  if (!current) {
    return res.status(404).json({ success: false, message: "Certificate not found." });
  }

  const next = {
    title: req.body.title ?? current.title,
    issuer: req.body.issuer ?? current.issuer,
    year: req.body.year ?? current.year,
    tag: req.body.tag ?? current.tag,
    color: req.body.color ?? current.color,
    desc: req.body.desc ?? current.desc,
    featured: req.body.featured === undefined ? current.featured : String(req.body.featured) === "true",
    order: req.body.order === undefined ? current.order : Number(req.body.order),
  };

  if (req.file) {
    const imagePath = toPublicPath(req.file.path);
    next.imagePath = imagePath;
    next.imageUrl = toPublicUrl(req, imagePath);
    await safeUnlink(current.imagePath);
  }

  const updated = await Certificate.findByIdAndUpdate(req.params.id, next, { new: true, runValidators: true });
  res.json({ success: true, data: updated });
});

export const deleteCertificate = asyncHandler(async (req, res) => {
  const current = await Certificate.findById(req.params.id);
  if (!current) {
    return res.status(404).json({ success: false, message: "Certificate not found." });
  }

  await Certificate.findByIdAndDelete(req.params.id);
  await safeUnlink(current.imagePath);
  res.json({ success: true, message: "Certificate deleted." });
});
