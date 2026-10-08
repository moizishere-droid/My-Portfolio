import { email, socials } from '../data/portfolio';
import { Icon, Wordmark } from './ui';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <a href="#hero" aria-label="Back to top">
            <Wordmark />
          </a>
          <p>
            Intelligent systems.
            <br />
            Thoughtful engineering.
          </p>
          <a className="back-top" href="#hero">
            Back to top
            <Icon size={17} />
          </a>
        </div>
        <div className="footer-grid">
          <div>
            <h3>Explore</h3>
            {[
              ['About', 'about'],
              ['Work', 'projects'],
              ['Expertise', 'skills'],
              ['Background', 'education'],
              ['Resume', 'resume'],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>
          <div>
            <h3>Focus</h3>
            {['Classical ML', 'Deep Learning', 'LLM Fine-tuning', 'RAG Systems', 'Agentic AI'].map(
              (label) => (
                <a key={label} href="#projects">
                  {label}
                </a>
              ),
            )}
          </div>
          <div>
            <h3>Elsewhere</h3>
            {socials.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
                <Icon size={12} />
              </a>
            ))}
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <a href={`mailto:${email}`}>{email}</a>
            <span>Based in Karachi, Pakistan</span>
            <span>Remote-friendly · Targeting 2027</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Abdul Moiz. All rights reserved.</span>
          <span>From experiment to production.</span>
        </div>
      </div>
    </footer>
  );
}
