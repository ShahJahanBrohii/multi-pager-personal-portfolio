import './Timeline.css';

/**
 * Shared Timeline component used by About (zigzag) and Resume (linear list).
 * Props:
 *   items   – array of { year, tag, title, body, color }
 *   variant – 'zigzag' (default) | 'linear'
 */
export default function Timeline({ items = [], variant = 'zigzag' }) {
  if (!items.length) return null;

  if (variant === 'linear') {
    return (
      <div className="tl-linear">
        {items.map((item, i) => (
          <div key={i} className="tl-linear__item">
            <div
              className="tl-linear__marker"
              style={{ backgroundColor: item.color }}
            />
            <div className="tl-linear__content card">
              <div className="tl-linear__header">
                <span className="tl-linear__year" style={{ color: item.color }}>
                  {item.year}
                </span>
                <span
                  className="tl-linear__tag chip"
                  style={{
                    borderColor: `${item.color}40`,
                    color: item.color,
                    background: `${item.color}14`,
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <h3 className="tl-linear__title">{item.title}</h3>
              <p className="tl-linear__body">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default: zigzag (used in About)
  return (
    <div className="tl-zz">
      <div className="tl-zz__spine" />
      {items.map((item, i) => (
        <div
          key={i}
          className={`tl-zz__item${i % 2 === 0 ? ' tl-zz__item--left' : ' tl-zz__item--right'}`}
        >
          <div
            className="tl-zz__dot"
            style={{ background: item.color, boxShadow: `0 0 14px ${item.color}55` }}
          />
          <div className="tl-zz__card card">
            <div className="tl-zz__top">
              <span className="tl-zz__year" style={{ color: item.color }}>{item.year}</span>
              <span
                className="chip"
                style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}14` }}
              >
                {item.tag}
              </span>
            </div>
            <h4 className="tl-zz__title">{item.title}</h4>
            <p className="tl-zz__body">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
