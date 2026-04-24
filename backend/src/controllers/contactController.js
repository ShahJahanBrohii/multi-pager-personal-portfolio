import { ContactMessage } from "../models/ContactMessage.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const createContactMessage = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  if (!emailRegex.test(String(email))) {
    return res.status(400).json({ success: false, message: "Invalid email address." });
  }

  if (String(message).trim().length < 20) {
    return res.status(400).json({ success: false, message: "Message must be at least 20 characters." });
  }

  const created = await ContactMessage.create({ name, email, subject, message });

  res.status(201).json({ success: true, data: created, message: "Message received." });
});

export const listContactMessages = asyncHandler(async (req, res) => {
  const items = await ContactMessage.find().sort({ createdAt: -1 });
  res.json({ success: true, data: items });
});
