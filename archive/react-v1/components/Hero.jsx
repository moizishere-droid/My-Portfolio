export default function Hero() {
  return <section id="hero">
  <canvas id="hero-canvas"></canvas>
  <div className="hero-content">
    <div className="eyebrow"><span className="pulse"></span>Open to AI/ML roles · Targeting 2027</div>
    <h1 className="htitle">
      <span className="l1">I build</span>
      <span className="l2"><span id="typed"></span><span className="cursor"></span></span>
    </h1>
    <p className="hero-desc">Final-year CS student at UBIT, Karachi — shipping production-grade ML systems, fine-tuned LLMs, multimodal RAG pipelines, and deep learning applications from notebook to deployment.</p>
    <div className="hero-actions">
      <a href="#projects" className="btn btn-p">View Projects</a>
      <a href="https://github.com/moizishere-droid" target="_blank" rel="noopener noreferrer" className="btn btn-o">GitHub ↗</a>
    </div>
    <div className="metrics">
      <div className="met"><span className="mv">5</span><div className="ml">Domain Areas</div></div>
      <div className="met"><span className="mv">20+</span><div className="ml">Projects Built</div></div>
      <div className="met"><span className="mv">3.30</span><div className="ml">CGPA · BS CS</div></div>
      <div className="met"><span className="mv">Live</span><div className="ml">Deployed on HF Spaces</div></div>
    </div>
  </div>
</section>;
}
