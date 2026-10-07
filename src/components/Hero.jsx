import { Button, GradientBars, LetterText } from './ui';
import ProjectEditor from './ProjectEditor';

export default function Hero({ onSelectProject, theme, toggleTheme }) {
  return <section id="hero" className="hero">
    <GradientBars />
    <div className="shell hero-content">
      <p className="hero-badge"><span className="status-dot" />AI / ML Engineer · Karachi, Pakistan</p>
      <h1 className="hero-title" aria-label="Intelligent Systems. Real-world Impact."><span className="hero-line" aria-hidden="true"><LetterText>Intelligent </LetterText><em><LetterText>Systems.</LetterText></em></span><span className="hero-line" aria-hidden="true"><em className="roman"><LetterText>Real-world</LetterText></em><LetterText> Impact.</LetterText></span></h1>
      <p className="hero-subtitle">From the first experiment to production.</p>
      <div className="hero-buttons"><Button href="#contact">Get in touch</Button><Button href="#projects" variant="secondary">Explore my work</Button></div>
      <ProjectEditor onSelectProject={onSelectProject} theme={theme} toggleTheme={toggleTheme} />
    </div>
  </section>;
}
