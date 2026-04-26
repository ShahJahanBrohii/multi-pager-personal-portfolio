import { Project } from "../models/Project.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { safeUnlink, toPublicPath, toPublicUrl } from "../utils/media.js";

function parseTech(techValue) {
  if (!techValue) return [];
  if (Array.isArray(techValue)) return techValue.map((x) => String(x).trim()).filter(Boolean);
  if (typeof techValue === "string") {
    return techValue
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);
  }
  return [];
}

export const listProjects = asyncHandler(async (req, res) => {
  const { tag, q, published } = req.query;
  const filter = {};

  if (tag) filter.tag = tag;
  if (q) filter.title = { $regex: q, $options: "i" };
  if (published === "true" || published === "false") {
    filter.published = published === "true";
  } else {
    // Public listing defaults to published content only.
    filter.published = true;
  }

  const items = await Project.find(filter).sort({ order: 1, createdAt: -1 });
  res.json({ success: true, data: items });
});

export const getProject = asyncHandler(async (req, res) => {
  const item = await Project.findById(req.params.id);
  if (!item) {
    return res.status(404).json({ success: false, message: "Project not found." });
  }
  res.json({ success: true, data: item });
});

export const createProject = asyncHandler(async (req, res) => {
  const { title, desc, tag, github, kaggleNotebook, liveDemo, archLink, accent, difficulty, published, order } = req.body;

  if (!title || !desc || !tag) {
    return res.status(400).json({ success: false, message: "title, desc, and tag are required." });
  }

  const doc = {
    title,
    desc,
    tag,
    tech: parseTech(req.body.tech),
    github: github || "",
    kaggleNotebook: kaggleNotebook || "",
    liveDemo: liveDemo || "",
    archLink: archLink || "",
    accent: accent || "#F5A623",
    difficulty: difficulty || "Medium",
    published: published === undefined ? true : String(published) === "true",
    order: Number(order || 0),
  };

  if (req.file) {
    const imagePath = toPublicPath(req.file.path);
    doc.imagePath = imagePath;
    doc.imageUrl = toPublicUrl(req, imagePath);
  }

  const created = await Project.create(doc);
  res.status(201).json({ success: true, data: created });
});

export const updateProject = asyncHandler(async (req, res) => {
  const current = await Project.findById(req.params.id);
  if (!current) {
    return res.status(404).json({ success: false, message: "Project not found." });
  }

  const next = {
    title: req.body.title ?? current.title,
    desc: req.body.desc ?? current.desc,
    tag: req.body.tag ?? current.tag,
    tech: req.body.tech === undefined ? current.tech : parseTech(req.body.tech),
    github: req.body.github ?? current.github,
    kaggleNotebook: req.body.kaggleNotebook ?? current.kaggleNotebook,
    liveDemo: req.body.liveDemo ?? current.liveDemo,
    archLink: req.body.archLink ?? current.archLink,
    accent: req.body.accent ?? current.accent,
    difficulty: req.body.difficulty ?? current.difficulty,
    published: req.body.published === undefined ? current.published : String(req.body.published) === "true",
    order: req.body.order === undefined ? current.order : Number(req.body.order),
  };

  if (req.file) {
    const imagePath = toPublicPath(req.file.path);
    next.imagePath = imagePath;
    next.imageUrl = toPublicUrl(req, imagePath);
    await safeUnlink(current.imagePath);
  }

  const updated = await Project.findByIdAndUpdate(req.params.id, next, { new: true, runValidators: true });
  res.json({ success: true, data: updated });
});

export const deleteProject = asyncHandler(async (req, res) => {
  const current = await Project.findById(req.params.id);
  if (!current) {
    return res.status(404).json({ success: false, message: "Project not found." });
  }

  await Project.findByIdAndDelete(req.params.id);
  await safeUnlink(current.imagePath);

  res.json({ success: true, message: "Project deleted." });
});
