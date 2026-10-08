import { useId } from 'react';

export function Icon({ name = 'arrow', size = 20, ...props }) {
  const paths = {
    arrow: <path d="M5 19 19 5M5 5h14v14" />,
    chevron: <path d="m9 5 7 7-7 7" />,
    plus: <path d="M12 5v14M5 12h14" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    desktop: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    mobile: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5" />
      </>
    ),
    moon: <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z" />,
    pause: <path d="M8 5v14M16 5v14" />,
    play: <path d="m7 4 14 8-14 8Z" />,
    layers: <path d="m12 3 10 6-10 6L2 9ZM2 13l10 6 10-6M2 17l10 6 10-6" />,
    code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
    search: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m15 15 6 6" />
      </>
    ),
    download: <path d="M12 3v12m-5-5 5 5 5-5M4 15v5h16v-5" />,
    eye: (
      <>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}

export function Wordmark({ compact = false }) {
  return (
    <span className="wordmark">
      <svg viewBox="0 0 40 32" width="32" height="28" fill="currentColor" aria-hidden="true">
        <path d="M0 30 10 2h7l4 15 4-15h7l8 28h-8l-4-15-5 15h-5l-5-15-5 15Z" />
      </svg>
      {!compact && (
        <span>
          abdul moiz<span className="wordmark-period">.</span>
        </span>
      )}
    </span>
  );
}

export function RollText({ children }) {
  return (
    <span className="roll" aria-hidden="true">
      {Array.from(children).map((char, i) => (
        <span className="roll-char" key={i} style={{ '--i': i }}>
          <span>{char === ' ' ? '\u00a0' : char}</span>
          <span>{char === ' ' ? '\u00a0' : char}</span>
        </span>
      ))}
    </span>
  );
}

export function LetterText({ children }) {
  return (
    <>
      {Array.from(children).map((char, index) => (
        <span className="hero-char" key={index}>
          {char === ' ' ? '\u00a0' : char}
        </span>
      ))}
    </>
  );
}

export function Button({ children, href, variant = 'primary', icon, className = '', ...props }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      type={href ? undefined : 'button'}
      className={`button button-${variant} ${className}`}
      {...props}
    >
      <span className="sr-only">{children}</span>
      <RollText>{children}</RollText>
      {icon && <Icon name={icon} size={15} />}
    </Tag>
  );
}

export function GradientBars({ className = '' }) {
  return (
    <div className={`gradient-bars ${className}`} aria-hidden="true">
      {Array.from({ length: 15 }, (_, i) => (
        <span
          key={i}
          style={{
            '--scale': 0.22 + 0.78 * Math.pow(Math.abs(i - 7) / 7, 0.85),
            '--delay': `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}

export function SectionHeading({ eyebrow, children, subtitle, centered = false }) {
  return (
    <div className={`section-heading${centered ? ' centered' : ''}`} data-reveal>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="display-heading">{children}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export function Accordion({ title, children, className = '' }) {
  const id = useId();
  return (
    <details
      className={`accordion ${className}`}
      onToggle={() => window.dispatchEvent(new Event('portfolio:resize'))}
    >
      <summary aria-controls={id}>
        <span>{title}</span>
        <Icon name="plus" />
      </summary>
      <div className="accordion-content" id={id}>
        {children}
      </div>
    </details>
  );
}
