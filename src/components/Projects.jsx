import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolio';
import { Button, Icon } from './ui';
import ProjectVisual from './ProjectVisual';

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ onSelectProject }) {
  const scope = useRef(null);
  const [filter, setFilter] = useState('All work');
  const [view, setView] = useState('gallery');
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);
  const shown = projects.filter(project => filter === 'All work' || project.category === filter);
  useLayoutEffect(() => {
    if (view !== 'gallery' || filter !== 'All work') return;
    const media = gsap.matchMedia();
    media.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
      const cards = gsap.utils.toArray('.work-gallery-card', scope.current);
      const gallery = scope.current.querySelector('.work-gallery');
      gallery.classList.add('is-pinned');
      setActive(0);
      setPinned(true);
      gsap.set(cards, { zIndex: i => i + 1, opacity: 1, force3D: true });
      gsap.set(cards.slice(1), { yPercent: 120, rotate: 4, visibility: 'hidden' });
      let currentCard = 0;
      const timeline = gsap.timeline({
        onUpdate() {
          // Follow the displayed animation, including scrub lag and reverse scrolling.
          const next = Math.min(cards.length - 1, Math.max(0, Math.floor(this.time() + .001)));
          if (next !== currentCard) { currentCard = next; setActive(next); }
        },
        // Lenis already smooths scrolling; a second scrub delay makes the cards lag.
        scrollTrigger: { trigger: gallery, start: 'top top', end: () => `+=${Math.max(500, window.innerHeight * .8) * (cards.length - 1)}`, pin: true, scrub: true, anticipatePin: 1, invalidateOnRefresh: true }
      });
      cards.slice(1).forEach((card, i) => {
        const start = i;
        timeline.set(card, { visibility: 'visible' }, start);
        timeline.to(card, { yPercent: 0, rotate: 0, duration: 1, ease: 'none' }, start);
        timeline.set(cards[i], { visibility: 'hidden' }, start + 1);
      });
      return () => { gallery.classList.remove('is-pinned'); setPinned(false); };
    }, scope);
    ScrollTrigger.refresh();
    return () => media.revert();
  }, [view, filter]);

  return <section id="projects" className="works-section" ref={scope}>
    <div className="shell work-heading" data-reveal><p className="eyebrow">Selected production work · 01—05</p><h2>My Work<span className="heading-period">.</span></h2><p>Built with intention. Backed by experiments.</p><div className="work-toolbar"><div className="work-filters" aria-label="Filter projects">{['All work',...projects.map(project=>project.category)].map(category=><button key={category} className={category===filter?'active':''} aria-pressed={category===filter} onClick={()=>{setFilter(category);setActive(0);}}>{category}</button>)}</div><button className="view-toggle" onClick={()=>setView(value=>value==='gallery'?'list':'gallery')}><Icon name={view==='gallery'?'layers':'desktop'} size={15}/>{view==='gallery'?'List view':'Gallery view'}</button></div></div>
    <div className={`work-gallery${pinned?' is-pinned':''}${view==='list'||filter!=='All work'?' work-list':''}`}>
      <div className="shell gallery-inner">
        <div className="work-gallery-top"><span>Selected projects</span><span>{String(active+1).padStart(2,'0')} / {String(shown.length).padStart(2,'0')}</span></div>
        <div className="work-card-stack">{shown.map((project,index)=><article className="work-gallery-card" key={project.id} inert={pinned && index !== active}><div className="work-art"><ProjectVisual project={project}/><button className="art-open" onClick={()=>onSelectProject(project)} aria-label={`Explore ${project.title}`}><Icon name="arrow" size={24}/></button></div><div className="work-info" tabIndex={pinned && index === active ? 0 : undefined} aria-label="Project details"><div className="work-info-top"><span>{project.number} / {project.category}</span><span className={`project-status ${project.status.startsWith('Live')?'live':''}`}><i/>{project.status}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="project-metrics">{project.metrics.map(metric=><div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div><div className="work-info-bottom"><Button onClick={()=>onSelectProject(project)} variant="secondary" icon="arrow">Explore project</Button><div className="work-external-links">{project.links.map(link=><a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={`subtle-link${link.label === 'Live Demo' ? ' demo-link' : ''}`}>{link.label}<Icon size={14}/></a>)}</div></div></div></article>)}</div>
        <div className="gallery-bottom"><span>Classical ML → Deep Learning → LLMs → RAG → Agents</span><a href="#skills">Keep exploring <span>↓</span></a></div>
      </div>
    </div>
  </section>;
}
