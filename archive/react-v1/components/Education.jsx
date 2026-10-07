export default function Education() {
  return <section id="education">
  <div className="container">
    <div className="sec-header reveal"><span className="sec-tag">Background</span><h2 className="st">Education</h2></div>
    <div className="tl">
      <div className="tli reveal">
        <div className="tl-date">2022 — Present</div>
        <div className="tl-body">
          <h4>BS Computer Science</h4>
          <div className="org">UBIT · University of Karachi</div>
          <p>7th Semester · CGPA 3.30/4.00 · Coursework: Software Engineering, Distributed Systems, Simulation & Modelling, AI/ML, Computerised Accounting. Senior capstone: skin disease classification and segmentation (CNNs + segmentation architectures on dermatology dataset).</p>
        </div>
      </div>
      <div className="tli reveal">
        <div className="tl-date">Ongoing</div>
        <div className="tl-body">
          <h4>Self-directed AI/ML Research</h4>
          <div className="org">Independent</div>
          <p>Systematic study across 5 domains: Classical ML → Deep Learning → LLM Fine-tuning → RAG Systems → Agentic AI. All production projects follow a 20+ phase methodology: experiment in notebooks, then refactor to documented production code with full deployment.</p>
        </div>
      </div>
    </div>
  </div>
</section>;
}
