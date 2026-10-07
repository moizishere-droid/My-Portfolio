import { useEffect, useRef, useState } from 'react';
import { Button, Icon } from './ui';

const RESUME_URL = `${import.meta.env.BASE_URL}Abdul-Moiz-Resume.pdf`;

export default function Resume() {
  const [open, setOpen] = useState(false);
  const viewer = useRef(null);
  useEffect(() => {
    window.dispatchEvent(new Event('portfolio:resize'));
    if (open) viewer.current?.scrollIntoView({behavior:'smooth',block:'start'});
  }, [open]);
  return <section id="resume" className="resume-section section-pad"><div className="shell"><div className="resume-card" data-reveal><div className="resume-paper" aria-hidden="true"><div><span>ABDUL MOIZ</span><small>AI / ML ENGINEER</small></div><i/><i/><p>EXPERIENCE & PROJECTS</p><i/><i/><i/><p>EDUCATION & EXPERTISE</p><i/><i/><span className="paper-mark">AM.</span></div><div className="resume-copy"><p className="eyebrow">The full picture</p><h2>My experience.<br/><span className="muted">On one page.</span></h2><p>Education, projects, and the technical details.<br/>View my resume here or take a copy with you.</p><div className="inline-buttons"><Button onClick={()=>setOpen(value=>!value)} aria-expanded={open} aria-controls="resume-viewer" icon="eye">{open?'Hide resume':'View resume'}</Button><Button href={RESUME_URL} download="Abdul_Moiz_Resume.pdf" variant="secondary" icon="download">Download PDF</Button></div></div></div>{open&&<div className="resume-viewer" id="resume-viewer" ref={viewer}><div className="resume-viewer-header"><span>Abdul Moiz — Resume</span><button onClick={()=>setOpen(false)} className="icon-button" aria-label="Close resume"><Icon name="close"/></button></div><iframe src={RESUME_URL} title="Abdul Moiz Resume"/><p>If your browser cannot display the PDF, <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">open it in a new tab ↗</a>.</p></div>}</div></section>;
}
