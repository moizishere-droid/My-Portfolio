import { Button, GradientBars, LetterText } from './ui';
import ProjectEditor from './ProjectEditor';

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
          aria-label="I build ML applications, fine-tune LLMs, and develop RAG systems."
        >
          <span className="hero-line" aria-hidden="true">
            <LetterText>I build </LetterText>
            <em>
              <LetterText>ML applications,</LetterText>
            </em>
          </span>
          <span className="hero-line" aria-hidden="true">
            <LetterText>fine-tune </LetterText>
            <em>
              <LetterText>LLMs,</LetterText>
            </em>
          </span>
          <span className="hero-line" aria-hidden="true">
            <LetterText>and develop </LetterText>
            <em className="roman">
              <LetterText>RAG systems.</LetterText>
            </em>
          </span>
        </h1>
        <p className="hero-subtitle">
          Final-year BS Software Engineering student at UBIT, University of Karachi.
          <br />
          Graduating in 2027 · Open to AI/ML internships.
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
