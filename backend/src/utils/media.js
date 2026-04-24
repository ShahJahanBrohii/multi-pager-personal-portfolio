import fs from "fs/promises";
import path from "path";

export function toPublicPath(filePath) {
  const relative = path.relative(process.cwd(), filePath);
  return relative.replace(/\\/g, "/");
}

export function toPublicUrl(req, publicPath) {
  return `${req.protocol}://${req.get("host")}/${publicPath}`;
}

export async function safeUnlink(filePath) {
  if (!filePath) return;
  try {
    await fs.unlink(path.resolve(process.cwd(), filePath));
  } catch {
    // Ignore missing file errors.
  }
}
