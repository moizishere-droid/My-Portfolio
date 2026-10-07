import { projects } from '../data/portfolio';
import { Button } from './ui';
import ProjectVisual from './ProjectVisual';

export default function About() {
  return <section className="about-section section-pad" id="about">
    <div className="about-collage" aria-hidden="true"><div className="collage-track collage-one">{[projects[0],projects[2],projects[3]].map(project => <div className="collage-card" key={project.id}><ProjectVisual project={project} compact /></div>)}</div><div className="collage-track collage-two">{[projects[1],projects[4],projects[0]].map((project,i) => <div className="collage-card" key={i}><ProjectVisual project={project} compact /></div>)}</div></div>
    <div className="shell about-layout"><div className="about-copy" data-reveal><p className="eyebrow">The person behind the pipelines</p><h2 className="display-heading">Models that learn.<br /><span className="muted">Systems that deliver.</span></h2><p>I am Abdul Moiz, a final-year Computer Science student at UBIT, University of Karachi. I build ML applications, fine-tuned LLMs, and RAG systems.</p><p>I turn notebook experiments into tested, deployed software.</p><div className="inline-buttons"><Button href="#education" variant="secondary">More about me</Button><Button href="#projects" variant="text" icon="arrow">See my work</Button></div></div></div>
    <div className="shell metrics-strip" data-reveal><div><strong data-count="5">5</strong><span>Domains explored</span></div><div><strong><span data-count="20">20</span>+</strong><span>Projects built</span></div><div><strong>3.30<span className="metric-unit">/4.00</span></strong><span>CGPA · BS Computer Science</span></div><div><strong className="live-metric"><span className="status-dot" />Live</strong><span>Deployed on HuggingFace Spaces</span></div></div>
  </section>;
}
