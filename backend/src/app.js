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
    origin: env.CORS_ORIGIN,
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
    res.setHeader("Access-Control-Allow-Origin", env.CORS_ORIGIN);
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