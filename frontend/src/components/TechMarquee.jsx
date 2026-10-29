import './TechMarquee.css';

/**
 * Shared scrolling tech-stack marquee strip.
 * Props:
 *   stack  – array of { name } objects
 *   label  – optional eyebrow label above the strip
 */
export default function TechMarquee({ stack = [], label }) {
  if (!stack.length) return null;

  return (
    <div className="tech-marquee">
      {label && (
        <p className="sec-eyebrow tech-marquee__label">{label}</p>
      )}
      <div className="tech-marquee__wrap">
        {/* duplicate the array so the strip loops seamlessly */}
        <div className="tech-marquee__track" aria-hidden="true">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="marquee-item">{s.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
