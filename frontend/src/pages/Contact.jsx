import { useState } from 'react';
import './Contact.css';

const BLANK = { name: '', email: '', subject: '', message: '' };

function validate({ name, email, subject, message }) {
  const e = {};
  if (!name.trim())                                   e.name    = 'Name is required.';
  if (!email.trim())                                  e.email   = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))e.email   = 'Enter a valid email address.';
  if (!subject.trim())                                e.subject = 'Subject is required.';
  if (message.trim().length < 20)                     e.message = 'Message must be at least 20 characters.';
  return e;
}

const INFO = [
  {
    label: 'Email',
    value: 'shahjahanbrohii@gmail.com',
    href: 'mailto:shahjahanbrohii@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2 4 12 13 22 4"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: '@ShahJahanBrohii',
    href: 'https://github.com/ShahJahanBrohii',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Shah Jahan Abdul Latif',
    href: 'https://linkedin.com/in/shah-jahan-abdul-latif-a00a74280',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Nawabshah, Sindh, PK',
    href: null,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [fields, setFields]   = useState(BLANK);
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState('idle'); // idle | loading | success | error
  const [apiErr, setApiErr]   = useState('');

  const change = e => {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const submit = async e => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');
    setApiErr('');
    try {
      /*
       * POST to your Express backend.
       * Backend should: validate → save to MongoDB → send email via Nodemailer → return { success: true }
       * Set REACT_APP_API_URL=http://localhost:5000/api in .env
       */
      const url = (process.env.REACT_APP_API_URL || 'http://localhost:5000/api') + '/contact';
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      setFields(BLANK);
    } catch (err) {
      setStatus('error');
      setApiErr('Could not send message. Please email me directly at shahjahanbrohii@gmail.com');
    }
  };

  return (
    <div className="page">

      {/* ══ HEADER ════════════════════════════════════════════ */}
      <section className="section contact-hero">
        <div className="container">
          <p className="sec-eyebrow fu">Contact</p>
          <h1 className="sec-title fu d1">Let's <em>Talk</em></h1>
          <p className="sec-sub fu d2">
            Open to internships, collaborations, and interesting conversations.
            I typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ══ MAIN ══════════════════════════════════════════════ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">

          {/* left — info */}
          <div className="contact-info">
            <h2 className="contact-info__title">Get in Touch</h2>
            <p className="contact-info__body">
              Whether you have a project idea, a job opportunity, or just want to
              talk about ML architectures — my inbox is open.
            </p>

            {INFO.map(({ label, value, href, icon }) => (
              <div key={label} className="cinfo-row card">
                <div className="cinfo-icon">{icon}</div>
                <div>
                  <p className="cinfo-label">{label}</p>
                  {href
                    ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="cinfo-val cinfo-val--link">{value}</a>
                    : <p className="cinfo-val">{value}</p>
                  }
                </div>
              </div>
            ))}

            <div className="contact-avail">
              <span className="contact-avail__dot" />
              Available for new opportunities
            </div>
          </div>

          {/* right — form */}
          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div className="contact-success">
                <div className="contact-success__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll reply soon.</p>
                <button className="btn btn-outline" onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit} noValidate>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name"
                      value={fields.name} onChange={change} className={errors.name ? 'err' : ''} />
                    {errors.name && <span className="ferr">{errors.name}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com"
                      value={fields.email} onChange={change} className={errors.email ? 'err' : ''} />
                    {errors.email && <span className="ferr">{errors.email}</span>}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" placeholder="Internship · Collaboration · Hello"
                    value={fields.subject} onChange={change} className={errors.subject ? 'err' : ''} />
                  {errors.subject && <span className="ferr">{errors.subject}</span>}
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    value={fields.message} onChange={change} className={errors.message ? 'err' : ''} />
                  {errors.message && <span className="ferr">{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <p className="contact-api-err">{apiErr}</p>
                )}

                <button type="submit" className="btn btn-amber contact-submit" disabled={status === 'loading'}>
                  {status === 'loading' ? (
                    <><span className="contact-spin" />Sending…</>
                  ) : (
                    <>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="contact-note">
                  Messages are sent via <code>POST /api/contact</code> → saved in MongoDB + email notification via Nodemailer.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
