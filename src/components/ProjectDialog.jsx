import { useEffect, useRef } from 'react';
import { Accordion, Button, Icon } from './ui';
import ProjectVisual from './ProjectVisual';

export default function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!project) return;
    const dialog = ref.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; previousFocus?.focus(); };
  }, [project]);
  return <dialog ref={ref} className="project-dialog" data-lenis-prevent onCancel={onClose} onClick={event=>{if(event.target===event.currentTarget)onClose();}} aria-labelledby="dialog-project-title">
    {project&&<div className="dialog-content"><div className="dialog-header"><span>{project.number} / {project.category}</span><button className="icon-button" onClick={onClose} aria-label="Close project"><Icon name="close"/></button></div><ProjectVisual project={project}/><div className="dialog-copy"><p className="eyebrow">{project.status}</p><h2 id="dialog-project-title">{project.title}</h2><p>{project.description}</p><div className="project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="project-metrics">{project.metrics.map(metric=><div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div><div className="inline-buttons">{project.links.map(link=><Button key={link.href} href={link.href} variant="secondary" icon="arrow" target="_blank" rel="noopener noreferrer">{link.label}</Button>)}</div>{project.practice.length>0&&<div className="practice-section"><h3>{project.practiceTitle}</h3>{project.practice.map(item=><Accordion title={item.title} key={item.title}><p>{item.description}</p><div className="project-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div><span className="practice-label">{item.label}</span></Accordion>)}</div>}</div></div>}
  </dialog>;
}
