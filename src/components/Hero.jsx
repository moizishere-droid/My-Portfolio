import { Button, GradientBars, LetterText } from './ui';
import ProjectEditor from './ProjectEditor';

function HeroWords({ children }) {
  return children.split(' ').map((word, index) => (
    <span key={`${word}-${index}`}>
      {index > 0 && ' '}
      <span className="hero-word"><LetterText>{word}</LetterText></span>
    </span>
  ));
}

export default function Hero({ onSelectProject, theme, toggleTheme }) {
  return (
    <section id="hero" className="hero">
      <GradientBars />
      <div className="shell hero-content">
        <p className="hero-badge">
          <span className="status-dot" />
          AI / ML Engineer · Karachi, Pakistan
        </p>
        <h1
          className="hero-title"
          aria-label="I build AI applications—from models to deployment."
        >
          <span className="hero-line" aria-hidden="true">
            <HeroWords>I build</HeroWords>{' '}
            <em>
              <HeroWords>AI applications</HeroWords>
            </em>
          </span>
          <span className="hero-line" aria-hidden="true">
            <HeroWords>—from models to</HeroWords>{' '}
            <em className="roman">
              <HeroWords>deployment.</HeroWords>
            </em>
          </span>
        </h1>
        <p className="hero-subtitle">
          Machine learning, LLM fine-tuning, and RAG systems.
          <br />
          Final-year Software Engineering student · Graduating in 2027 · Open to AI/ML internships.
        </p>
        <div className="hero-buttons">
          <Button href="#contact">Get in touch</Button>
          <Button href="#projects" variant="secondary">
            Explore my work
          </Button>
        </div>
        <ProjectEditor onSelectProject={onSelectProject} theme={theme} toggleTheme={toggleTheme} />
      </div>
    </section>
  );
}
