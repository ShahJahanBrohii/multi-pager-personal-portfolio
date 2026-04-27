import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { env } from "./config/env.js";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";
import apiRoutes from "./routes/index.js";

const app = express();
const allowedOrigins = new Set(env.CORS_ORIGINS);

if (env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

function resolveAllowedOrigin(req) {
  const requestOrigin = req.get("origin");
  if (requestOrigin && allowedOrigins.has(requestOrigin)) {
    return requestOrigin;
  }

  // For non-browser requests (curl/health checks), fall back to the first configured origin.
  return env.CORS_ORIGINS[0] || "*";
}

/* 🔐 Security Headers */
app.use(
  helmet({
    crossOriginResourcePolicy: false,   // ← let us set it manually per route
    crossOriginEmbedderPolicy: false,
  })
);

/* 🌐 CORS */
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.has(origin)) return callback(null, true);
      return callback(null, false);
    },
    credentials: true,
  })
);

/* 🛡️ Rate Limiting */
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

/* 📦 Logger */
app.use(morgan("dev"));

/* 📥 Body Parsers */
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

/* 📁 Static Files — CORP header applied inline so it's never overridden */
app.use(
  "/uploads",
  (req, res, next) => {
    res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
    res.setHeader("Access-Control-Allow-Origin", resolveAllowedOrigin(req));
    res.setHeader("Vary", "Origin");
    next();
  },
  express.static(path.resolve(process.cwd(), "uploads"))
);

/* 🔗 API Routes */
app.use("/api", apiRoutes);

/* ❌ 404 + Error Handling */
app.use(notFound);
app.use(errorHandler);

export default app;