import { useEffect, useRef, useState } from 'react';
const RESUME_URL = `${import.meta.env.BASE_URL}Abdul-Moiz-Resume.pdf`;
export default function Resume() {
  const [open, setOpen] = useState(false);
  const viewerRef = useRef(null);
  useEffect(() => {
    if (open) viewerRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, [open]);
  return <section id="resume" style={{
    "background": "var(--bg2)",
    "padding": "6rem 0",
    "position": "relative",
    "zIndex": "1"
  }}>
  <div className="container">
    <div className="sec-header reveal">
      <span className="sec-tag">Resume</span>
      <h2 className="st">My Resume</h2>
    </div>
    
    <div style={{
        "display": "flex",
        "gap": "1rem",
        "flexWrap": "wrap",
        "marginBottom": "2rem"
      }} className="reveal">
      <button onClick={() => setOpen(value => !value)} id="view-btn" aria-expanded={open} aria-controls="resume-viewer" className="btn btn-p">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
        {open ? 'Hide Resume' : 'View Resume'}
      </button>
      <a id="dl-btn" href={RESUME_URL} download="Abdul_Moiz_Resume.pdf" className="btn btn-o">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
        Download PDF
      </a>
    </div>
    
    <div id="resume-viewer" ref={viewerRef} style={{
        display: open ? 'block' : 'none'
      }}>
      <div style={{
          "background": "var(--surface)",
          "border": "1px solid var(--border)",
          "borderRadius": "16px",
          "overflow": "hidden"
        }}>
        
        <div style={{
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "space-between",
            "padding": ".85rem 1.4rem",
            "borderBottom": "1px solid var(--border)",
            "background": "rgba(0,0,0,.2)"
          }}>
          <span style={{
              "fontFamily": "'Syne',sans-serif",
              "fontSize": ".8rem",
              "fontWeight": "700",
              "color": "var(--cyan)"
            }}>Abdul Moiz — Resume</span>
          <button onClick={() => setOpen(value => !value)} style={{
              "background": "none",
              "border": "none",
              "color": "var(--muted)",
              "cursor": "pointer",
              "fontSize": ".75rem",
              "transition": "color .2s"
            }} className="resume-close">✕ Close</button>
        </div>
        
        <iframe id="resume-iframe" src={RESUME_URL} style={{
            "width": "100%",
            "height": "780px",
            "border": "none",
            "display": "block"
          }} title="Abdul Moiz Resume">
        </iframe>
      </div>
    </div>
  </div>
</section>;
}
