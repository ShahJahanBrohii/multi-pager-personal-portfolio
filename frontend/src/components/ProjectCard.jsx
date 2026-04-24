import './ProjectCard.css';

const API_ORIGIN = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace(/\/api\/?$/, '');

const DIFFICULTY_COLORS = {
  Easy: '#4DD9C0',
  Medium: '#F5A623',
  Hard: '#F56E6E',
};

function getImageSrc(project) {
  if (project.imageUrl) return project.imageUrl;
  if (project.imagePath) {
    const cleanPath = String(project.imagePath).replace(/^\/+/, '');
    return `${API_ORIGIN}/${cleanPath}`;
  }
  return null;
}

export default function ProjectCard({ project, featured = false }) {
  const { title, desc, tag, tech, github, archLink, accent, difficulty } = project;
  const imageSrc = getImageSrc(project);

  return (
    <article className={`pcard card${featured ? ' pcard--featured' : ''}`}>
      {/* coloured top stripe */}
      <div className="pcard__stripe" style={{ background: accent }} />

      {/* ── Screenshot thumbnail ── */}
      {imageSrc && (
        <div className="pcard__thumb">
          <img
            src={imageSrc}
            alt={`${title} screenshot`}
            className="pcard__thumb-img"
            onError={(e) => {
              // hide the wrapper if image fails to load
              e.currentTarget.closest('.pcard__thumb').style.display = 'none';
            }}
          />
        </div>
      )}

      <div className="pcard__body">
        {/* header row */}
        <div className="pcard__head">
          <div className="pcard__tags">
            <span
              className="pcard__tag"
              style={{ color: accent, borderColor: `${accent}40`, background: `${accent}12` }}
            >
              {tag}
            </span>
            {difficulty && (
              <span
                className="pcard__difficulty"
                style={{
                  color: DIFFICULTY_COLORS[difficulty],
                  borderColor: `${DIFFICULTY_COLORS[difficulty]}40`,
                  background: `${DIFFICULTY_COLORS[difficulty]}12`,
                }}
              >
                {difficulty}
              </span>
            )}
          </div>
          <div className="pcard__actions">
            {archLink && (
              <a href={archLink} className="pcard__icon" title="Architecture diagram" aria-label="Architecture">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                </svg>
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="pcard__icon" title="GitHub" aria-label="GitHub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        <h3 className="pcard__title">{title}</h3>
        <p className="pcard__desc">{desc}</p>

        <div className="pcard__tech">
          {tech.map(t => <span key={t} className="chip">{t}</span>)}
        </div>
      </div>
    </article>
  );
}