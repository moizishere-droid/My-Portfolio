import { useState } from 'react';
import { email, socials } from '../data/portfolio';
import { Accordion, Button, GradientBars, Icon } from './ui';

const faqs = [
  ['What kind of opportunities are you looking for?', 'I’m open to AI/ML internships, research roles, and freelance projects. I’m targeting roles from 2027.'],
  ['Where are you based?', 'I’m based in Karachi, Pakistan, and I’m open to remote work.'],
  ['What do you build?', 'Classical ML systems, deep learning applications, fine-tuned LLMs, multilingual multimodal RAG pipelines, and agentic AI systems.'],
  ['Can I try your projects?', 'Yes. The Loan Risk Assessment System and CodeMentor-LLM have live demos on HuggingFace Spaces. Open a project to find its demo, source code, model, and API links. MedRAG is in development and the Agentic AI System is in planning.'],
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); }
    catch { setCopied(false); window.location.href=`mailto:${email}`; }
  };
  return <><section className="faq-section section-pad"><div className="shell faq-layout"><div data-reveal><p className="eyebrow">A few useful answers</p><h2 className="display-heading">Before we<br/><span className="muted">say hello.</span></h2></div><div data-reveal>{faqs.map(([question,answer],i)=><Accordion key={question} title={`${i+1}. ${question}`}><p>{answer}</p></Accordion>)}</div></div></section><section id="contact" className="contact-section"><GradientBars/><div className="shell contact-content" data-reveal><p className="hero-badge"><span className="status-dot"/>Open to AI / ML opportunities · Targeting 2027</p><h2>Let’s build<br/><em>something real.</em></h2><p>Internships. Research. Freelance projects.<br/>Based in Karachi. Open to working remotely.</p><div className="inline-buttons"><Button href={`mailto:${email}`} icon="arrow">Get in touch</Button><Button href="#projects" variant="secondary">Explore my work</Button></div><div className="contact-email-row"><a className="contact-email" href={`mailto:${email}`}>{email}</a><button className="copy-email" onClick={copy} aria-label="Copy email address"><Icon name={copied?'check':'layers'} size={16}/></button><span className="sr-only" role="status">{copied?'Email address copied':''}</span></div><div className="social-links">{socials.map(link=><a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<Icon size={14}/></a>)}</div></div></section></>;
}
