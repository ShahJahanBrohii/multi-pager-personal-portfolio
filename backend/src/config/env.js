import dotenv from "dotenv";

dotenv.config();

function required(name) {
  const value = process.env[name];
  return value && String(value).trim() ? value : null;
}

function requireEnv(names) {
  const missing = names.filter((name) => !required(name));
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}

function normalizeOrigins(value) {
  return String(value || "")
    .split(",")
    .map((origin) => origin.trim().replace(/\/$/, ""))
    .filter(Boolean);
}

requireEnv(["MONGODB_URI", "JWT_SECRET", "ADMIN_EMAIL", "ADMIN_PASSWORD"]);

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT || 5000),
  MONGODB_URI: String(process.env.MONGODB_URI).trim(),
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:5173",
  CORS_ORIGINS: normalizeOrigins(process.env.CORS_ORIGIN || "http://localhost:5173"),
  MAX_FILE_SIZE_MB: Number(process.env.MAX_FILE_SIZE_MB || 5),
  JWT_SECRET: String(process.env.JWT_SECRET).trim(),
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",
  ADMIN_EMAIL: String(process.env.ADMIN_EMAIL).trim(),
  ADMIN_PASSWORD: String(process.env.ADMIN_PASSWORD).trim(),
};
