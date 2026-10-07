import { useEffect, useRef, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDialog from './components/ProjectDialog';
import usePortfolioEffects from './hooks/usePortfolioEffects';

export default function App() {
  const scope = useRef(null);
  const [project, setProject] = useState(null);
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; }
    catch { return 'dark'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Storage can be disabled. */ }
  }, [theme]);
  usePortfolioEffects(scope);
  const toggleTheme = () => setTheme(value => value === 'dark' ? 'light' : 'dark');
  return <div ref={scope}>
    <a href="#main" className="skip-link">Skip to content</a>
    <Navigation theme={theme} toggleTheme={toggleTheme} />
    <main id="main">
      <Hero onSelectProject={setProject} theme={theme} toggleTheme={toggleTheme} />
      <About />
      <Projects onSelectProject={setProject} />
      <Skills />
      <Education />
      <Resume />
      <Contact />
    </main>
    <Footer />
    <ProjectDialog project={project} onClose={() => setProject(null)} />
  </div>;
}
