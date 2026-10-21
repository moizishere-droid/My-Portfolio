import { Button } from './ui';
import { projects } from '../data/portfolio';

export default function About() {
  return (
    <section className="about-section section-pad" id="about">
      {/* About Introduction Section */}
      <div className="about-intro">
        {/* About Content */}
        <div className="shell about-layout">
          <div className="about-copy" data-reveal>
            {/* Section Label */}
            <p className="eyebrow">The person behind the pipelines</p>

            {/* Main Heading */}
            <h2 className="display-heading">
              Models that learn.
              <br />
              <span className="muted">Systems that deliver.</span>
            </h2>

            {/* Personal Introduction */}
            <p>
              I am Abdul Moiz, a final-year Software Engineering student at UBIT, University of Karachi.
              I build ML applications, fine-tuned LLMs, and RAG systems.
            </p>

            <p>I turn notebook experiments into tested, deployed software.</p>

            <p>
              <strong>Currently exploring:</strong> Agentic AI, including tool calling and
              multi-agent workflows.
            </p>

            {/* Navigation Buttons */}
            <div className="inline-buttons">
              <Button href="#education" variant="secondary">
                More about me
              </Button>

              <Button href="#projects" variant="text" icon="arrow">
                See my work
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics / Metrics Section */}
      <div className="shell metrics-strip" data-reveal>
        {/* Domains Explored */}
        <div>
          <strong data-count="5">5</strong>
          <span>Domains explored</span>
        </div>

        {/* Projects Built */}
        <div>
          <strong>
            <span data-count={projects.length}>{projects.length}</span>
          </strong>
          <span>Featured projects</span>
        </div>

        {/* Academic CGPA */}
        <div>
          <strong>
            3.30
            <span className="metric-unit">/4.00</span>
          </strong>
          <span>CGPA · BS Software Engineering</span>
        </div>

        {/* Deployment Status */}
        <div>
          <strong className="live-metric">
            <span className="status-dot" />
            Live
          </strong>
          <span>HuggingFace Spaces &amp; Modal</span>
        </div>
      </div>
    </section>
  );
}
