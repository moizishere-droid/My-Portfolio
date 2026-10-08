import { education } from '../data/portfolio';
import { Icon, SectionHeading } from './ui';

const phases = [
  [
    '01',
    'Explore',
    'Understand the problem, inspect the data, and establish a measurable baseline.',
  ],
  ['02', 'Experiment', 'Compare models, tune with Optuna, and track what changes and why.'],
  ['03', 'Evaluate', 'Measure quality with F1, AUC, RAGAS, BLEU, and explainability methods.'],
  [
    '04',
    'Engineer',
    'Refactor notebooks into documented APIs, reusable modules, and tested pipelines.',
  ],
  ['05', 'Deploy', 'Package with Docker and ship to HuggingFace Spaces with CI/CD.'],
  ['06', 'Keep learning', 'Build the next system on the lessons from the previous one.'],
];

export default function Education() {
  return (
    <section id="education" className="education-section section-pad">
      <div className="shell">
        <SectionHeading eyebrow="Background & approach">
          A strong foundation.
          <br />
          <span className="muted">A curious mindset.</span>
        </SectionHeading>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.title} data-reveal>
              <div className="education-card-top">
                <span>{item.date}</span>
                <Icon name="arrow" />
              </div>
              <h3>{item.title}</h3>
              <p className="education-org">{item.organization}</p>
              <p>
                {item.title === 'BS Computer Science'
                  ? 'Studying computer science with a focus on AI/ML and distributed systems. Final-year capstone: skin disease classification and segmentation.'
                  : 'Independent study in machine learning, deep learning, LLMs, RAG, and agentic AI, supported by deployed projects.'}
              </p>
              {item.title === 'BS Computer Science' && (
                <div className="education-stat">
                  <strong>3.30</strong>
                  <span>
                    CGPA / 4.00
                    <br />
                    7th Semester
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
        <div className="approach-heading" data-reveal>
          <h3>From notebook to production.</h3>
          <p>Experiment, evaluate, engineer, deploy.</p>
        </div>
        <div className="approach-grid">
          {phases.map(([number, title, description]) => (
            <article className="approach-card" key={number} data-reveal>
              <span>{number}</span>
              <h4>{title}</h4>
              <p>{description}</p>
              <div className={`approach-line line-${number}`} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
