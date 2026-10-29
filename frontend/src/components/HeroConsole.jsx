import { useState, useEffect } from 'react';
import './HeroConsole.css';

const STAGES = ['VAD', 'ASR', 'Turn', 'LLM', 'TTS'];

/* Illustrative event stream of the real-time voice pipeline (not live data) */
const EVENTS = [
  { stage: 'VAD',  kind: 'speech_start', text: 'p=0.91 · pre-roll 768 ms' },
  { stage: 'ASR',  kind: 'hypothesis',   text: '"yes I have part a"' },
  { stage: 'ASR',  kind: 'hypothesis',   text: '"yes I have part a and b but"' },
  { stage: 'VAD',  kind: 'pause',        text: 'silence · hangover 304 ms' },
  { stage: 'Turn', kind: 'turn_detect',  text: 'continue=0.82 → keep listening' },
  { stage: 'ASR',  kind: 'final',        text: '"Yes, I have Part A and B, but I\'m not sure about D."' },
  { stage: 'Turn', kind: 'turn_detect',  text: 'endpoint=0.94 → end of turn' },
  { stage: 'LLM',  kind: 'respond',      text: 'intent: has_medicare_a_b' },
  { stage: 'TTS',  kind: 'stream',       text: 'speaking reply…' },
];

const BARS = 48;
const VISIBLE = 5;

export default function HeroConsole() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % (EVENTS.length + 2)), 1500);
    return () => clearInterval(id);
  }, []);

  // two idle ticks at the end of each loop before the stream restarts
  const count = Math.min(step + 1, EVENTS.length);
  const start = Math.max(0, count - VISIBLE);
  const shown = EVENTS.slice(start, count);
  const active = step < EVENTS.length ? EVENTS[step].stage : null;
  const speaking = active === 'VAD' || active === 'ASR' || active === 'TTS';

  return (
    <div className="hconsole" aria-hidden="true">
      <div className="hconsole__bar">
        <span className="hconsole__dots"><i /><i /><i /></span>
        <span className="hconsole__file">voice-agent · live pipeline</span>
        <span className={`hconsole__rec${speaking ? ' on' : ''}`}>● REC</span>
      </div>

      <div className={`hconsole__wave${speaking ? ' hconsole__wave--live' : ''}`}>
        {Array.from({ length: BARS }, (_, i) => (
          <span key={i} style={{ animationDelay: `${(i * 97) % 1100}ms` }} />
        ))}
      </div>

      <div className="hconsole__stages">
        {STAGES.map((s, i) => (
          <span key={s} className="hconsole__stage-wrap">
            <span className={`hconsole__stage${active === s ? ' active' : ''}`}>{s}</span>
            {i < STAGES.length - 1 && <span className="hconsole__arrow">→</span>}
          </span>
        ))}
      </div>

      <ol className="hconsole__log">
        {shown.map((e, i) => (
          <li key={start + i} className={i === shown.length - 1 ? 'latest' : ''}>
            <span className="hconsole__kind">{e.kind}</span>
            <span className="hconsole__text">{e.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
