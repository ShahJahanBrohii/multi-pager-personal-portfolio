import dotenv from "dotenv";

dotenv.config();

function required(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT || 5000),
  MONGODB_URI: required("MONGODB_URI"),
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:5173",
  MAX_FILE_SIZE_MB: Number(process.env.MAX_FILE_SIZE_MB || 5),
  JWT_SECRET: required("JWT_SECRET"),
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",
  ADMIN_EMAIL: required("ADMIN_EMAIL"),
  ADMIN_PASSWORD: required("ADMIN_PASSWORD"),
};
