import { Certificate } from "../models/Certificate.js";
import { Project } from "../models/Project.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const TIMELINE_COLORS = ["#F5A623", "#4DD9C0", "#F56E6E", "#9B7FFF"];

function yearOf(dateLike) {
  const d = new Date(dateLike);
  return Number.isNaN(d.getTime()) ? "Now" : String(d.getFullYear());
}

function toTechFrequency(projects) {
  const freq = new Map();
  for (const project of projects) {
    for (const tech of project.tech || []) {
      const key = String(tech || "").trim();
      if (!key) continue;
      freq.set(key, (freq.get(key) || 0) + 1);
    }
  }
  return freq;
}

function levelFromFrequency(count, max) {
  if (max <= 0) return 60;
  const ratio = count / max;
  return Math.max(55, Math.min(95, Math.round(55 + ratio * 40)));
}

export const getContentOverview = asyncHandler(async (req, res) => {
  const [projects, certificates] = await Promise.all([
    Project.find({ published: true }).sort({ order: 1, createdAt: -1 }).lean(),
    Certificate.find({}).sort({ featured: -1, order: 1, createdAt: -1 }).lean(),
  ]);

  const techFreq = toTechFrequency(projects);
  const techSorted = Array.from(techFreq.entries()).sort((a, b) => b[1] - a[1]);
  const maxTechCount = techSorted.length ? techSorted[0][1] : 0;

  const stack = techSorted.map(([name]) => name);

  const tagFreq = new Map();
  for (const p of projects) {
    const tag = String(p.tag || "General").trim() || "General";
    tagFreq.set(tag, (tagFreq.get(tag) || 0) + 1);
  }
  const tagSorted = Array.from(tagFreq.entries()).sort((a, b) => b[1] - a[1]);
  const maxTagCount = tagSorted.length ? tagSorted[0][1] : 0;

  const skills = {
    "Core Technologies": techSorted.slice(0, 12).map(([name, count]) => ({
      name,
      level: levelFromFrequency(count, maxTechCount),
    })),
    Domains: tagSorted.map(([name, count]) => ({
      name,
      level: levelFromFrequency(count, maxTagCount),
    })),
  };

  const projectTimeline = projects.slice(0, 8).map((p, i) => ({
    year: yearOf(p.createdAt),
    tag: p.tag || "Project",
    title: p.title,
    body: p.desc,
    color: p.accent || TIMELINE_COLORS[i % TIMELINE_COLORS.length],
  }));

  const certTimeline = certificates.slice(0, 4).map((c, i) => ({
    year: c.year || yearOf(c.createdAt),
    tag: "Certificate",
    title: c.title,
    body: `${c.issuer}${c.tag ? ` - ${c.tag}` : ""}`,
    color: c.color || TIMELINE_COLORS[(i + 1) % TIMELINE_COLORS.length],
  }));

  const timeline = [...projectTimeline, ...certTimeline]
    .sort((a, b) => String(b.year).localeCompare(String(a.year)))
    .slice(0, 12);

  const topTags = tagSorted.slice(0, 4).map(([tag]) => tag);
  const issuers = Array.from(new Set(certificates.map((c) => c.issuer).filter(Boolean)));

  const resume = {
    experience: [
      {
        role: "Portfolio Projects",
        company: "Live Project Repository",
        period: `${projects.length ? yearOf(projects[projects.length - 1].createdAt) : "Now"} - ${projects.length ? yearOf(projects[0].createdAt) : "Now"}`,
        bullets: [
          `Total published projects: ${projects.length}`,
          `Active domains: ${tagSorted.length}`,
          `Top domains: ${topTags.join(", ") || "N/A"}`,
          `Certificates tracked: ${certificates.length}`,
        ],
      },
    ],
    education: [
      {
        degree: "Professional Learning & Certifications",
        institution: issuers[0] || "Certification Providers",
        period: "Ongoing",
        gpa: "N/A",
        notes: [
          `Unique certification issuers: ${issuers.length}`,
          `Total certifications: ${certificates.length}`,
          `Latest certification year: ${certificates[0]?.year || "N/A"}`,
        ],
      },
    ],
  };

  const data = {
    stats: {
      projects: projects.length,
      certificates: certificates.length,
      tags: tagSorted.length,
      technologies: stack.length,
    },
    stack,
    skills,
    timeline,
    resume,
    highlights: {
      topTags,
      issuers,
    },
    heroRoles: topTags.length ? topTags.map((tag) => `${tag} Builder`) : ["Backend Developer", "ML Enthusiast"],
  };

  res.json({ success: true, data });
});

export const getSiteContent = asyncHandler(async (req, res) => {
  // Compatibility endpoint for clients expecting editable site-content payload.
  res.json({ success: true, data: { sections: {} } });
});
