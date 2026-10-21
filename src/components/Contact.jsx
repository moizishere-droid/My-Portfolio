import { useState } from 'react';
import { email, socials } from '../data/portfolio';
import { Button, GradientBars, Icon } from './ui';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <>
      <section id="contact" className="contact-section">
        <GradientBars />
        <div className="shell contact-content" data-reveal>
          <p className="hero-badge">
            <span className="status-dot" />
            Open to AI / ML opportunities
          </p>
          <h2>
            Let’s build
            <br />
            <em>something real.</em>
          </h2>
          <p>
            Internships. Research. Freelance projects.
            <br />
            Based in Karachi. Open to working remotely.
          </p>
          <div className="inline-buttons">
            <Button href={`mailto:${email}`} icon="arrow">
              Get in touch
            </Button>
            <Button href="#projects" variant="secondary">
              Explore my work
            </Button>
          </div>
          <div className="contact-email-row">
            <a className="contact-email" href={`mailto:${email}`}>
              {email}
            </a>
            <button className="copy-email" onClick={copy} aria-label="Copy email address">
              <Icon name={copied ? 'check' : 'layers'} size={16} />
            </button>
            <span className="sr-only" role="status">
              {copied ? 'Email address copied' : ''}
            </span>
          </div>
          <div className="social-links">
            {socials.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
