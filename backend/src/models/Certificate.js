import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    issuer: { type: String, required: true, trim: true },
    year: { type: String, required: true, trim: true },
    tag: { type: String, required: true, trim: true },
    color: { type: String, trim: true, default: "#F5A623" },
    desc: { type: String, trim: true, default: "" },
    imagePath: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true, trim: true },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

certificateSchema.index({ featured: -1, order: 1, createdAt: -1 });

export const Certificate = mongoose.model("Certificate", certificateSchema);
