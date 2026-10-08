import { skills } from '../data/portfolio';
import { Button, Icon, SectionHeading } from './ui';

function SkillArtwork({ index }) {
  return (
    <div className={`skill-art skill-art-${index}`} aria-hidden="true">
      {index === 0 && (
        <div className="decision-tree">
          <span>Features</span>
          <div>
            <i />
            <i />
            <i />
          </div>
          <div className="tree-leaves">
            {['Predict', 'Explain', 'Segment'].map((text) => (
              <span key={text}>{text}</span>
            ))}
          </div>
        </div>
      )}
      {index === 1 && (
        <div className="neural-orb">
          {Array.from({ length: 8 }, (_, i) => (
            <i key={i} style={{ '--i': i }} />
          ))}
          <span>DL</span>
        </div>
      )}
      {index === 2 && (
        <div className="token-cloud">
          {['<s>', 'QLoRA', 'SFT', 'LoRA', 'DPO', '</s>'].map((text, i) => (
            <span key={text} style={{ '--i': i }}>
              {text}
            </span>
          ))}
        </div>
      )}
      {index === 3 && (
        <div className="retrieval-art">
          <div>
            <Icon name="search" size={24} />
          </div>
          <span />
          <div>
            <Icon name="layers" size={24} />
          </div>
          <span />
          <div>
            <Icon name="code" size={24} />
          </div>
        </div>
      )}
      {index === 4 && (
        <div className="terminal-art">
          <p>
            <i />
            <i />
            <i />
          </p>
          <code>
            <span>$</span> docker compose up
            <br />
            <small>✓ api &nbsp; ✓ db &nbsp; ✓ models</small>
            <br />
            <span>●</span> production ready
          </code>
        </div>
      )}
      {index === 5 && (
        <div className="evaluation-art">
          {[58, 80, 67, 91, 85].map((height, i) => (
            <span key={i} style={{ height: `${height}%` }} />
          ))}
          <i>Measure. Improve. Repeat.</i>
        </div>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section section-pad">
      <div className="shell">
        <div className="skills-heading-row">
          <SectionHeading eyebrow="Expertise">
            A complete
            <br />
            <span className="muted">AI toolkit.</span>
          </SectionHeading>
          <div data-reveal>
            <p>
              Five domains. One connected workflow.
              <br />
              The tools behind every experiment and deployment.
            </p>
            <Button href="#projects" variant="secondary" icon="arrow">
              Explore the projects
            </Button>
          </div>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skill-card" key={skill.title} data-reveal>
              <span className="card-index">0{index + 1}</span>
              <SkillArtwork index={index} />
              <h3>{skill.title}</h3>
              <div className="skill-items">
                {skill.items.map((item) => (
                  <div className="skill-item" key={item.name}>
                    <div>
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="skill-meter">
                      <i style={{ '--level': `${item.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="platform-strip" data-reveal>
          <div>
            <h3>
              Experiment freely.
              <br />
              <span className="muted">Deploy confidently.</span>
            </h3>
            <p>From local notebooks to documented APIs and live applications.</p>
          </div>
          <div className="platform-names">
            {['PyTorch', 'TensorFlow', 'FastAPI', 'Docker', 'PostgreSQL', 'HuggingFace'].map(
              (name) => (
                <span key={name}>{name}</span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
