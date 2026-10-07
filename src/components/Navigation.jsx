import { useEffect, useState } from 'react';
import { Button, Icon, Wordmark } from './ui';

const links = [['Home', 'hero'], ['About', 'about'], ['Work', 'projects'], ['Expertise', 'skills'], ['Background', 'education'], ['Resume', 'resume']];

export default function Navigation({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 30);
      let current = 'hero';
      for (const [, id] of links) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= 150) current = id;
      }
      setActive(current);
    };
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = event => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
    <nav className="navigation shell" aria-label="Main navigation">
      <a className="brand-link" href="#hero" aria-label="Abdul Moiz home" onClick={() => setOpen(false)}><Wordmark /></a>
      <div className={`nav-menu${open ? ' is-open' : ''}`} id="navigation-menu">
        {links.map(([label, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => { setOpen(false); setActive(id); }}>{label}</a>)}
        <a href="#contact" className="mobile-connect" onClick={() => setOpen(false)}>Let’s connect <Icon size={16} /></a>
      </div>
      <div className="nav-actions">
        <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}><Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} /></button>
        <Button href="#contact" variant="secondary" className="nav-connect" icon="arrow">Let’s connect</Button>
        <button className={`menu-toggle${open ? ' open' : ''}`} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="navigation-menu" onClick={() => setOpen(value => !value)}><span /><span /></button>
      </div>
    </nav>
  </header>;
}
