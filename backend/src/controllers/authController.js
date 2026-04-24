import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { asyncHandler } from "../utils/asyncHandler.js";

function signAdminToken() {
  return jwt.sign(
    {
      role: "admin",
      email: env.ADMIN_EMAIL,
    },
    env.JWT_SECRET,
    { expiresIn: env.JWT_EXPIRES_IN }
  );
}

export const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required." });
  }

  const emailOk = String(email).toLowerCase().trim() === env.ADMIN_EMAIL.toLowerCase().trim();
  const passwordOk = await bcrypt.compare(String(password), await bcrypt.hash(env.ADMIN_PASSWORD, 10));

  if (!emailOk || !passwordOk) {
    return res.status(401).json({ success: false, message: "Invalid credentials." });
  }

  const token = signAdminToken();
  return res.json({
    success: true,
    data: {
      token,
      email: env.ADMIN_EMAIL,
      role: "admin",
    },
  });
});

export const getMe = asyncHandler(async (req, res) => {
  return res.json({
    success: true,
    data: {
      email: req.admin.email,
      role: req.admin.role,
    },
  });
});
