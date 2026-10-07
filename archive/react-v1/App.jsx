import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import usePortfolioEffects from './hooks/usePortfolioEffects';
export default function App() {
  usePortfolioEffects();
  return <>
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </>;
}
