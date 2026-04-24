import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    desc: { type: String, required: true, trim: true },
    tag: { type: String, required: true, trim: true },
    tech: [{ type: String, trim: true }],
    github: { type: String, trim: true, default: "" },
    kaggleNotebook: { type: String, trim: true, default: "" },
    liveDemo: { type: String, trim: true, default: "" },
    archLink: { type: String, trim: true, default: "" },
    accent: { type: String, trim: true, default: "#F5A623" },
    difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], default: "Medium" },
    imagePath: { type: String, trim: true, default: "" },
    imageUrl: { type: String, trim: true, default: "" },
    published: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

projectSchema.index({ tag: 1, order: 1, createdAt: -1 });

export const Project = mongoose.model("Project", projectSchema);
